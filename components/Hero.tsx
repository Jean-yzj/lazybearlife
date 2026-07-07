import { site } from "@/lib/site";

export function Hero() {
  const { hero, links } = site;
  return (
    <section id="top" className="glow-honey relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="fade-up mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center rounded-full border border-honey-soft bg-cream/60 px-4 py-1.5 text-[13px] font-medium text-honey-deep">
            {hero.eyebrow}
          </p>

          <h1 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-6xl">
            {hero.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#consulting"
              className="w-full rounded-full bg-honey px-7 py-3.5 text-base font-medium text-cream shadow-md shadow-honey/20 transition-all hover:bg-honey-deep hover:shadow-lg sm:w-auto"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#about"
              className="w-full rounded-full border border-line bg-cream/50 px-7 py-3.5 text-base font-medium text-ink transition-colors hover:bg-cream-deep sm:w-auto"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* 數字條：證據先行 */}
        <div className="fade-up mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-line pt-10">
          {hero.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight text-honey-deep sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs leading-snug text-muted sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
