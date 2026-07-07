import { site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

const dotColor: Record<string, string> = {
  violet: "bg-violet",
  amber: "bg-amber",
  rose: "bg-rose",
  sky: "bg-sky",
};

export function Work() {
  const { work, links } = site;
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-honey-deep">作品</p>
        <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          四個產品，一條把想法做出來的軌跡
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          從第一次戰戰兢兢送審，到一天湧入五千人，再到讓產品自己賺錢。這不是履歷上的一行字，是四個你現在就點得進去的東西。
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {work.map((w) => {
          const url = links[w.href as keyof typeof links];
          const hasLink = typeof url === "string" && url.length > 0;
          const Tag = hasLink ? "a" : "div";
          return (
            <Tag
              key={w.name}
              {...(hasLink ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group flex flex-col rounded-[var(--radius-card)] border border-line bg-cream p-8 transition-all ${
                hasLink ? "hover:-translate-y-1 hover:border-honey-soft hover:shadow-lg hover:shadow-honey/5" : ""
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${dotColor[w.accent]}`} />
                <span className="text-sm font-medium text-muted">{w.chapter}</span>
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold tracking-tight text-ink">
                  {w.name}
                </h3>
                {hasLink && (
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-honey" />
                )}
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                <span className="text-muted">痛點 —</span> {w.pain}
              </p>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-soft">
                <span className="text-muted">做法 —</span> {w.approach}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {w.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-line bg-cream-deep/50 px-3 py-1 text-xs font-medium text-ink-soft"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
