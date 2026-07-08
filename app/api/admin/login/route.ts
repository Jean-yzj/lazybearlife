import { NextRequest, NextResponse } from "next/server";
import {
  adminConfigured,
  checkPassword,
  createSession,
  SESSION_COOKIE,
  rateLimited,
  recordFail,
  clearFails,
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  if (!adminConfigured()) {
    return NextResponse.json(
      { error: "後台尚未設定：請在環境變數設 ADMIN_PASSWORD（至少 8 碼）" },
      { status: 503 },
    );
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "嘗試次數過多，請 15 分鐘後再試" },
      { status: 429 },
    );
  }

  const { password } = (await req.json().catch(() => ({}))) as { password?: string };
  if (!password || !checkPassword(password)) {
    recordFail(ip);
    return NextResponse.json({ error: "密碼錯誤" }, { status: 401 });
  }

  clearFails(ip);
  const token = await createSession();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
