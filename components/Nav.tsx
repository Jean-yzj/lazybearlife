import { getSite } from "@/lib/content";
import { BearMark } from "./BearMark";

export async function Nav() {
  const site = await getSite();
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <BearMark className="h-8 w-8 text-honey" />
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            {site.brand.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#work" className="text-sm text-ink-soft transition-colors hover:text-honey">
            作品
          </a>
          <a href="#consulting" className="text-sm text-ink-soft transition-colors hover:text-honey">
            諮詢
          </a>
          <a href="#about" className="text-sm text-ink-soft transition-colors hover:text-honey">
            關於
          </a>
        </div>

        <a href="#consulting" className="btn-line btn-sm">
          {site.hero.primaryCta}
        </a>
      </nav>
    </header>
  );
}
