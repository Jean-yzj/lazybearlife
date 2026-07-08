"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BearMark } from "@/components/BearMark";
import { Upload } from "lucide-react";

export function AvatarUploader({ current }: { current: string }) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(current);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function upload(file: File) {
    setBusy(true);
    setMsg(null);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/avatar", { method: "POST", body: fd });
    const body = (await res.json().catch(() => ({}))) as {
      url?: string;
      error?: string;
    };
    if (res.ok && body.url) {
      setPreview(body.url);
      setMsg({ ok: true, text: "頭像已更新。" });
      router.refresh();
    } else {
      setMsg({ ok: false, text: body.error || "上傳失敗" });
    }
    setBusy(false);
  }

  return (
    <div className="flex items-center gap-5">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-honey bg-cream-deep">
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="頭像預覽" className="h-full w-full object-cover" />
        ) : (
          <BearMark className="h-9 w-9 text-honey" />
        )}
      </div>

      <div>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) upload(f);
            e.target.value = "";
          }}
        />
        <button
          type="button"
          disabled={busy}
          onClick={() => fileRef.current?.click()}
          className="btn-line btn-sm disabled:opacity-60"
        >
          <Upload className="h-3.5 w-3.5" />
          {busy ? "上傳中…" : preview ? "換一張" : "上傳頭像"}
        </button>
        {msg && (
          <p className={`mt-2 text-sm ${msg.ok ? "text-honey-deep" : "text-rose"}`}>
            {msg.text}
          </p>
        )}
      </div>
    </div>
  );
}
