import { site } from "@/lib/site";

export function About() {
  const { about } = site;
  const hasTestimonials = about.testimonials.length > 0;
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {about.title}
        </h2>
        <div className="mt-6 space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </div>

      {hasTestimonials && (
        <div className="mx-auto mt-14 grid max-w-2xl gap-5 sm:grid-cols-2">
          {about.testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-[var(--radius-card)] border border-line bg-cream p-6"
            >
              <blockquote className="text-[15px] leading-relaxed text-ink-soft">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="text-muted"> · {t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
