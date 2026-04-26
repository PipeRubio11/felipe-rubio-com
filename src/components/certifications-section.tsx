import { useTranslations } from "next-intl";
import { certifications, type Certification } from "@/data/cv";

const ORDER: Certification["category"][] = [
  "ai",
  "google",
  "paid-media",
  "ecommerce",
  "inbound",
  "engineering",
];

export function CertificationsSection() {
  const t = useTranslations("Certifications");

  const grouped = ORDER.map((cat) => ({
    cat,
    items: certifications.filter((c) => c.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section
      id="certifications"
      aria-label={t("title")}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-lightest-slate">
          {t("title")}
        </h2>
      </div>

      <p className="mb-8 text-sm leading-relaxed text-slate">{t("kicker")}</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {grouped.map(({ cat, items }) => (
          <div
            key={cat}
            className="rounded border border-lightest-navy/40 bg-light-navy/30 p-5"
          >
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-lightest-slate">
              {t(`categories.${cat}`)}
            </h3>
            <ul className="space-y-2">
              {items.map((c) => (
                <li key={c.id} className="text-sm">
                  <p className="font-medium text-light-slate">{c.name}</p>
                  <p className="font-mono text-xs text-slate">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
