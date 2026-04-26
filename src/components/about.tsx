import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { education, experience } from "@/data/cv";

type Locale = "es" | "en";

export function About() {
  const t = useTranslations("About");
  const locale = useLocale() as Locale;

  return (
    <Section id="about" title={t("title")} kicker={t("kicker")}>
      <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-5 text-base leading-relaxed text-foreground/70">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>

        <div>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
            {t("timelineTitle")}
          </h3>
          <ol className="space-y-12">
            {experience.map((exp) => (
              <li key={exp.id} className="grid gap-3 sm:grid-cols-[1fr_3fr] sm:gap-8">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    {exp.period[locale]}
                  </p>
                  <p className="text-sm text-foreground/60">{exp.company}</p>
                  {exp.context && (
                    <p className="text-xs text-foreground/40">
                      {exp.context[locale]}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-foreground">
                    {exp.role[locale]}
                  </h4>
                  <ul className="space-y-1.5 text-sm leading-relaxed text-foreground/70">
                    {exp.bullets[locale].map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/30" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.metrics.map((m, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-foreground/15 bg-foreground/[0.03] px-2.5 py-0.5 text-xs text-foreground/70"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16 border-t border-foreground/10 pt-8">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
              {t("education")}
            </h3>
            <ul className="space-y-4">
              {education.map((ed) => (
                <li key={ed.id} className="grid gap-1 sm:grid-cols-[1fr_3fr] sm:gap-8">
                  <p className="text-sm text-foreground/60">{ed.period}</p>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {ed.degree[locale]} · {ed.institution}
                    </p>
                    {ed.distinction && (
                      <p className="text-xs text-foreground/50">
                        {ed.distinction[locale]}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
