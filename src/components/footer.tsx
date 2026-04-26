import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-16 pb-16 text-sm text-slate">
      <p>{t("built")}</p>
      <a
        href="https://github.com/PipeRubio11/felipe-rubio-com"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-2 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.18em] text-light-slate hover:text-green"
      >
        {t("source")}
        <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </footer>
  );
}
