"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BearMark } from "@/components/BearMark";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.replace("/admin");
      router.refresh();
      return;
    }
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    setError(body.error || "登入失敗");
    setBusy(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-[var(--radius-card)] border border-line bg-cream p-8 shadow-sm"
      >
        <div className="flex items-center gap-2.5">
          <BearMark className="h-8 w-8 text-honey" />
          <div>
            <div className="font-semibold text-ink">Lazy Bear Life</div>
            <div className="text-xs text-muted">內容後台</div>
          </div>
        </div>

        <label className="mt-7 block text-sm font-medium text-ink-soft">
          管理密碼
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="mt-2 w-full rounded-lg border border-line bg-cream px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-honey"
          />
        </label>

        {error && <p className="mt-3 text-sm text-rose">{error}</p>}

        <button type="submit" disabled={busy} className="btn-fill mt-6 w-full disabled:opacity-60">
          {busy ? "登入中…" : "登入"}
        </button>
      </form>
    </main>
  );
}
