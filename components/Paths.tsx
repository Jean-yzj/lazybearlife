import { site } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function Paths() {
  return (
    <section className="border-y border-line bg-cream-deep/40">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="text-center text-sm font-medium text-muted">你是哪一種？</p>
        <h2 className="mx-auto mt-2 max-w-lg text-balance text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          不管你從哪裡來，我們都從一次對話開始
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {site.paths.map((p) => (
            <a
              key={p.tag}
              href="#consulting"
              className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-cream p-7 transition-all hover:-translate-y-1 hover:border-honey-soft hover:shadow-lg hover:shadow-honey/5"
            >
              <span className="inline-flex w-fit rounded-full bg-honey-soft/50 px-3 py-1 text-xs font-semibold text-honey-deep">
                {p.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                {p.promise}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-honey transition-colors group-hover:text-honey-deep">
                從這裡開始
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
