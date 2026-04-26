import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { experience } from "@/data/cv";

type Locale = "es" | "en";

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const locale = useLocale() as Locale;

  return (
    <section
      id="experience"
      aria-label={t("title")}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-lightest-slate">
          {t("title")}
        </h2>
      </div>

      <ol className="group/list space-y-12">
        {experience.map((exp) => (
          <li
            key={exp.id}
            className="relative grid gap-2 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover/list:bg-light-navy/50 lg:group-hover/list:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/list:drop-shadow-lg" />

            <header
              className="z-10 mb-2 mt-1 font-mono text-xs uppercase tracking-wide text-slate sm:col-span-2"
              aria-label={`${exp.role[locale]} at ${exp.company}`}
            >
              {exp.period[locale]}
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-lightest-slate">
                <span className="inline-flex items-baseline gap-1.5">
                  {exp.role[locale]}
                  <span className="text-slate">·</span>
                  <span className="text-light-slate">{exp.company}</span>
                </span>
              </h3>
              {exp.context && (
                <p className="mt-1 text-xs text-slate">
                  {exp.context[locale]}
                </p>
              )}

              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate">
                {exp.bullets[locale].slice(0, 4).map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      className="mt-2 size-1 shrink-0 rounded-full bg-slate/50"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {exp.metrics && exp.metrics.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {exp.metrics.map((m, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-green-tint px-2.5 py-0.5 font-mono text-xs leading-5 text-green"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <a
          href="https://www.linkedin.com/in/felipe-rubio-fernandez"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center font-mono text-sm font-medium text-lightest-slate hover:text-green"
        >
          {t("viewResume")}
          <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
