import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { getStore } from "@/lib/store";

const ALLOWED = ["image/jpeg", "image/png", "image/webp"];
const MAX_BYTES = 2 * 1024 * 1024; // 2MB

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "未登入" }, { status: 401 });
  }
  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "缺少檔案" }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json(
      { error: "只接受 JPG、PNG、WebP 圖片" },
      { status: 415 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "檔案超過 2MB" }, { status: 413 });
  }

  const buf = Buffer.from(await file.arrayBuffer());
  const store = getStore();
  await store.saveAsset("avatar", file.type, buf);

  // 自動把 profile.avatar 指到頭像端點（帶版本參數避免快取舊圖）
  const sections = await store.getSections();
  const profile = (sections["profile"] as Record<string, unknown>) || {};
  await store.saveSection("profile", {
    ...profile,
    avatar: `/api/avatar?v=${Date.now()}`,
  });

  revalidatePath("/");
  return NextResponse.json({ ok: true, url: `/api/avatar?v=${Date.now()}` });
}
