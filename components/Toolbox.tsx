import { site } from "@/lib/site";

export function Toolbox() {
  const { toolbox, links } = site;
  return (
    <section className="border-t border-line bg-cream-deep/30">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-medium text-muted">{toolbox.eyebrow}</p>
        <h2 className="mt-1.5 text-xl font-semibold text-ink">{toolbox.title}</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {toolbox.apps.map((a) => (
            <div key={a.name} className="rounded-xl border border-line bg-cream/60 p-5">
              <div className="font-medium text-ink">{a.name}</div>
              <div className="mt-1.5 text-sm leading-relaxed text-muted">{a.desc}</div>
            </div>
          ))}
          {links.shopee && (
            <a
              href={links.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-line bg-cream/60 p-5 transition-colors hover:border-honey-soft"
            >
              <div className="font-medium text-ink">蝦皮選物</div>
              <div className="mt-1.5 text-sm leading-relaxed text-muted">
                我平常在用、也推薦給你的東西。
              </div>
            </a>
          )}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted">{toolbox.intro}</p>
      </div>
    </section>
  );
}
