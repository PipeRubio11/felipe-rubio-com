import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetricsGrid } from "@/components/metrics-grid";
import { personal } from "@/data/cv";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-6 py-24 sm:px-10">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.03] px-3 py-1 text-xs font-medium tracking-wide text-foreground/70">
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
          {t("eyebrow")}
        </p>

        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-foreground/50">
          {t("tagline")}
        </p>

        <h1 className="mb-8 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {t("headline")}
        </h1>

        <p className="mb-6 max-w-2xl text-balance text-base leading-relaxed text-foreground/70 sm:text-lg">
          {t("description")}
        </p>

        <p className="mb-12 max-w-2xl text-balance text-lg font-medium text-foreground sm:text-xl">
          {t("punchline")}
        </p>

        <div className="mb-20 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#work">
              {t("ctaPrimary")}
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${personal.email}`}>{t("ctaSecondary")}</a>
          </Button>
        </div>

        <MetricsGrid />
      </div>
    </section>
  );
}
