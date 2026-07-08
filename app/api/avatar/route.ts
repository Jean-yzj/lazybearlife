import { NextResponse } from "next/server";
import { getStore } from "@/lib/store";

export const dynamic = "force-dynamic";

// 公開的頭像端點：後台上傳後，首頁 <img> 從這裡讀
export async function GET() {
  const asset = await getStore().getAsset("avatar").catch(() => null);
  if (!asset) {
    return new NextResponse("not found", { status: 404 });
  }
  return new NextResponse(new Uint8Array(asset.data), {
    headers: {
      "Content-Type": asset.mime,
      "Cache-Control": "public, max-age=300",
    },
  });
}
