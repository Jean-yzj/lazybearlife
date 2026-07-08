import { getSite } from "@/lib/content";
import { Check } from "lucide-react";

export async function Consulting() {
  const { consulting, links } = await getSite();
  return (
    <section id="consulting" className="border-y border-line bg-cream-deep/40">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-honey-deep">{consulting.eyebrow}</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {consulting.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            {consulting.intro}
          </p>
        </div>

        {/* 方案卡 */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          {consulting.plans.map((plan) => {
            const url = links[plan.link as keyof typeof links];
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[var(--radius-card)] p-8 ${
                  plan.featured
                    ? "border-2 border-honey bg-cream shadow-xl shadow-honey/10"
                    : "border border-line bg-cream"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-honey px-3 py-1 text-xs font-semibold text-cream">
                    最多人選擇
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-muted">{plan.duration}</span>
                </div>
                <h3 className="mt-1 text-xl font-bold text-ink">{plan.name}</h3>
                <div className="mt-3 text-3xl font-bold tracking-tight text-ink">
                  {plan.price}
                </div>
                <p className="mt-2 text-sm text-muted">{plan.forWho}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full ${plan.featured ? "btn-fill" : "btn-line"}`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* 流程四步 */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-center text-sm font-medium text-muted">預約流程</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {consulting.steps.map((s) => (
              <div key={s.n} className="text-center sm:text-left">
                <div className="text-sm font-bold text-honey">{s.n}</div>
                <div className="mt-1.5 font-semibold text-ink">{s.t}</div>
                <div className="mt-1 text-sm leading-snug text-muted">{s.d}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm leading-relaxed text-muted">
            {consulting.policy}
          </p>
        </div>
      </div>
    </section>
  );
}
