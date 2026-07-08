import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { getStore } from "@/lib/store";
import { EDITABLE_SECTIONS } from "@/lib/content";

export async function PUT(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "未登入" }, { status: 401 });
  }
  const body = (await req.json().catch(() => null)) as {
    key?: string;
    data?: unknown;
  } | null;

  if (!body?.key || body.data === undefined) {
    return NextResponse.json({ error: "缺少 key 或 data" }, { status: 400 });
  }
  if (!EDITABLE_SECTIONS.some((s) => s.key === body.key)) {
    return NextResponse.json({ error: `不允許的區塊：${body.key}` }, { status: 400 });
  }
  // 基本防呆：payload 不可過大（正常內容遠小於此）
  if (JSON.stringify(body.data).length > 200_000) {
    return NextResponse.json({ error: "內容過大" }, { status: 413 });
  }

  await getStore().saveSection(body.key, body.data);
  revalidatePath("/");
  return NextResponse.json({ ok: true });
}
