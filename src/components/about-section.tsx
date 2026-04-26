"use client";

import { useTranslations } from "next-intl";

const HIGHLIGHTS = {
  rocketmonk: "https://rocketmonk.io",
  scotiabank: "https://www.scotiabank.com",
  bci: "https://www.bci.cl",
  uber: "https://www.uber.com",
  descorcha: "https://www.descorcha.com",
} as const;

function Highlight({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-lightest-slate transition-colors hover:text-green"
    >
      {children}
    </a>
  );
}

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      aria-label={t("title")}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-lightest-slate">
          {t("title")}
        </h2>
      </div>

      <div className="space-y-4 text-base leading-relaxed">
        <p>{t("p1")}</p>
        <p>
          {t.rich("p2", {
            rocketmonk: (chunks) => (
              <Highlight href={HIGHLIGHTS.rocketmonk}>{chunks}</Highlight>
            ),
          })}
        </p>
        <p>{t("p3")}</p>
        <p>
          {t.rich("p4", {
            scotiabank: (chunks) => (
              <Highlight href={HIGHLIGHTS.scotiabank}>{chunks}</Highlight>
            ),
            bci: (chunks) => (
              <Highlight href={HIGHLIGHTS.bci}>{chunks}</Highlight>
            ),
            uber: (chunks) => (
              <Highlight href={HIGHLIGHTS.uber}>{chunks}</Highlight>
            ),
            descorcha: (chunks) => (
              <Highlight href={HIGHLIGHTS.descorcha}>{chunks}</Highlight>
            ),
          })}
        </p>
      </div>
    </section>
  );
}
