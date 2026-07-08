import { getSite } from "@/lib/content";
import { BearMark } from "./BearMark";

export async function Footer() {
  const site = await getSite();
  const { brand, links } = site;
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* 收尾 CTA */}
        <div className="rounded-[var(--radius-card)] border border-line bg-cream-deep px-8 py-14 text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            想認識我，或聊聊你在做的事？
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
            不管是想開始一個產品，還是單純交流，我都很樂意聊聊。
          </p>
          <a href="#consulting" className="btn-fill mt-8">
            {site.hero.primaryCta}
          </a>
        </div>

        {/* footer 主體 */}
        <div className="mt-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <BearMark className="h-7 w-7 text-honey" />
            <div>
              <div className="text-sm font-semibold text-ink">{brand.name}</div>
              <div className="text-xs text-muted">{brand.role}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="/terms" className="text-ink-soft transition-colors hover:text-honey">
              服務條款
            </a>
            <a href="/privacy" className="text-ink-soft transition-colors hover:text-honey">
              隱私權政策
            </a>
            <a
              href={`mailto:${links.contactEmail}`}
              className="text-ink-soft transition-colors hover:text-honey"
            >
              {links.contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {brand.name}. 用 AI 一個一個做出來的。
        </div>
      </div>
    </footer>
  );
}
