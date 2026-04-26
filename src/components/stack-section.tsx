import { useLocale, useTranslations } from "next-intl";
import { skillGroups } from "@/data/cv";

type Locale = "es" | "en";

export function StackSection() {
  const t = useTranslations("Stack");
  const locale = useLocale() as Locale;

  return (
    <section
      id="stack"
      aria-label={t("title")}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-lightest-slate">
          {t("title")}
        </h2>
      </div>

      <p className="mb-8 text-sm leading-relaxed text-slate">{t("kicker")}</p>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-lightest-slate">
              {group.label[locale]}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-lightest-navy/60 bg-light-navy/40 px-2.5 py-0.5 font-mono text-xs leading-6 text-light-slate"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
