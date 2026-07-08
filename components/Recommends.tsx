import { getSite } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export async function Recommends() {
  const { recommends, links } = await getSite();
  if (recommends.items.length === 0) return null;

  return (
    <section className="border-t border-line bg-cream-deep/40">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="text-sm font-medium text-honey-deep">{recommends.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {recommends.title}
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {recommends.items.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-3 rounded-xl border border-line bg-cream p-5 transition-all hover:-translate-y-0.5 hover:border-honey-soft hover:shadow-sm"
            >
              <div>
                <div className="font-medium leading-snug text-ink">{item.name}</div>
                <div className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.desc}
                </div>
              </div>
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-honey" />
            </a>
          ))}
        </div>

        {links.linktree && (
          <div className="mt-8 text-center">
            <a
              href={links.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line"
            >
              {recommends.moreCta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}

        <p className="mt-6 text-xs leading-relaxed text-muted">{recommends.intro}</p>
      </div>
    </section>
  );
}
