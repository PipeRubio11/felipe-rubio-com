import { useTranslations } from "next-intl";
import { personal } from "@/data/cv";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-3 px-6 text-xs text-foreground/55 sm:flex-row sm:items-center sm:px-10">
        <p>{t("tagline")}</p>
        <p>
          © {year} {personal.fullName} · {t("rights")}
        </p>
      </div>
    </footer>
  );
}
