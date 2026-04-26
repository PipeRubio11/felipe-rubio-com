import { useTranslations } from "next-intl";
import { headlineMetrics } from "@/data/cv";

export function MetricsGrid() {
  const t = useTranslations("Metrics");

  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
      {headlineMetrics.map((m) => (
        <div key={m.labelKey} className="flex flex-col gap-1">
          <dt className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {m.value}
          </dt>
          <dd className="text-sm text-foreground/60">{t(m.labelKey)}</dd>
        </div>
      ))}
    </dl>
  );
}
