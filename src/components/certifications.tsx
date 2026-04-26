import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { certifications, type Certification } from "@/data/cv";

const ORDER: Certification["category"][] = [
  "ai",
  "google",
  "paid-media",
  "ecommerce",
  "inbound",
  "engineering",
];

export function Certifications() {
  const t = useTranslations("Certifications");

  const grouped = ORDER.map((cat) => ({
    cat,
    items: certifications.filter((c) => c.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <Section id="certifications" title={t("title")} kicker={t("kicker")}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {grouped.map(({ cat, items }) => (
          <div
            key={cat}
            className="rounded-2xl border border-foreground/10 bg-foreground/[0.015] p-6"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground/55">
              {t(`categories.${cat}`)}
            </h3>
            <ul className="space-y-2.5">
              {items.map((c) => (
                <li key={c.id} className="text-sm">
                  <p className="font-medium text-foreground">{c.name}</p>
                  <p className="text-xs text-foreground/55">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
