import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { skillGroups } from "@/data/cv";

type Locale = "es" | "en";

export function Stack() {
  const t = useTranslations("Stack");
  const locale = useLocale() as Locale;

  return (
    <Section id="stack" title={t("title")} kicker={t("kicker")}>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="rounded-2xl border border-foreground/10 bg-foreground/[0.015] p-6"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground/55">
              {group.label[locale]}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-foreground/15 bg-background px-2.5 py-1 text-xs text-foreground/75"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
