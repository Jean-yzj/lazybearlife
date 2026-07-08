import { getSite } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export async function Brands() {
  const { brands, links } = await getSite();
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <p className="text-sm font-medium text-honey-deep">{brands.eyebrow}</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {brands.items.map((b) => {
          const url = links[b.href as keyof typeof links];
          const hasLink = typeof url === "string" && url.length > 0;
          const Tag = hasLink ? "a" : "div";
          return (
            <Tag
              key={b.name}
              {...(hasLink ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group flex items-start justify-between gap-4 rounded-[var(--radius-card)] border border-line bg-cream p-7 transition-all ${
                hasLink ? "hover:border-honey-soft hover:shadow-md" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold text-ink">{b.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{b.desc}</p>
                {hasLink && (
                  <span className="mt-3 inline-block text-sm font-medium text-honey transition-colors group-hover:text-honey-deep">
                    {b.cta}
                  </span>
                )}
              </div>
              {hasLink && (
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-honey" />
              )}
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
