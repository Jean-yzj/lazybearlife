import { getSite } from "@/lib/content";
import { ArrowRight, BookOpen } from "lucide-react";

export async function Notes() {
  const { notes, links } = await getSite();
  const url =
    links.notesWaitlist ||
    `mailto:${links.contactEmail}?subject=${encodeURIComponent("筆記搶先通知")}`;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <div className="glow-honey overflow-hidden rounded-[var(--radius-card)] border border-honey-soft bg-cream-deep/50 px-8 py-14 text-center sm:px-14">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-honey px-3 py-1 text-xs font-semibold text-cream">
          <BookOpen className="h-3.5 w-3.5" />
          {notes.eyebrow}
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl">
          {notes.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {notes.body}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-fill mt-8"
        >
          {notes.cta}
          <ArrowRight className="h-4 w-4" />
        </a>

        <p className="mt-4 text-sm text-muted">{notes.note}</p>
      </div>
    </section>
  );
}
