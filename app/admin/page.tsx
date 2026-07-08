import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdmin, adminConfigured } from "@/lib/auth";
import { EDITABLE_SECTIONS, getSite } from "@/lib/content";
import { storeMode } from "@/lib/store";
import { BearMark } from "@/components/BearMark";
import { AvatarUploader } from "@/components/admin/AvatarUploader";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { PencilLine, ExternalLink } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  if (!adminConfigured()) {
    return (
      <main className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="text-xl font-bold text-ink">後台尚未啟用</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          請在環境變數設定 <code className="rounded bg-cream-deep px-1.5 py-0.5">ADMIN_PASSWORD</code>
          （至少 8 碼）後重啟服務。本地開發：在專案根目錄的 .env 檔設定。
        </p>
      </main>
    );
  }
  if (!(await isAdmin())) redirect("/admin/login");

  const site = await getSite();
  const mode = storeMode();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <BearMark className="h-8 w-8 text-honey" />
          <div>
            <h1 className="font-semibold text-ink">內容後台</h1>
            <p className="text-xs text-muted">
              {mode === "postgres" ? "資料庫模式（正式）" : "本地檔案模式（data/ 資料夾）"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-honey"
          >
            看網站 <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <LogoutButton />
        </div>
      </header>

      {/* 頭像 */}
      <section className="mt-8 rounded-[var(--radius-card)] border border-line bg-cream p-6">
        <h2 className="font-semibold text-ink">頭像</h2>
        <p className="mt-1 text-sm text-muted">
          上傳後首頁的頭像會立即更換（JPG／PNG／WebP，2MB 以內，建議正方形）。
        </p>
        <div className="mt-4">
          <AvatarUploader current={site.profile.avatar} />
        </div>
      </section>

      {/* 區塊清單 */}
      <section className="mt-6">
        <h2 className="px-1 text-sm font-medium text-muted">頁面內容</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {EDITABLE_SECTIONS.filter((s) => s.key !== "profile").map((s) => (
            <Link
              key={s.key}
              href={`/admin/edit/${s.key}`}
              className="group flex items-start justify-between gap-3 rounded-xl border border-line bg-cream p-5 transition-all hover:border-honey-soft hover:shadow-sm"
            >
              <div>
                <div className="font-medium text-ink">{s.label}</div>
                <div className="mt-1 text-sm leading-snug text-muted">{s.hint}</div>
              </div>
              <PencilLine className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-honey" />
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-8 text-xs leading-relaxed text-muted">
        改完存檔後，首頁會立即更新。還沒動過的欄位會顯示程式內建的預設文案；
        清單類（作品、方案）可以新增與刪除項目。
      </p>
    </main>
  );
}
