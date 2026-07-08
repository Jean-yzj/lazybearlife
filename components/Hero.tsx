import { site } from "@/lib/site";
import { BearMark } from "./BearMark";

export function Hero() {
  const { hero, profile } = site;
  return (
    <section id="top" className="glow-honey relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="fade-up mx-auto max-w-3xl text-center">
          <div className="mb-7 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-honey bg-cream-deep">
              {profile.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <BearMark className="h-11 w-11 text-honey" />
              )}
            </div>
          </div>

          <p className="mb-6 inline-flex items-center rounded-full border border-honey-soft bg-cream px-4 py-1.5 text-[13px] font-medium text-honey-deep">
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

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#consulting" className="btn-fill w-full sm:w-auto">
              {hero.primaryCta}
            </a>
            <a href="#work" className="btn-line w-full sm:w-auto">
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
