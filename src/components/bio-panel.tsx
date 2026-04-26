import { useTranslations } from "next-intl";
import { SideNav } from "@/components/side-nav";
import { Socials } from "@/components/socials";
import { LocaleToggle } from "@/components/locale-toggle";

export function BioPanel() {
  const t = useTranslations("Bio");

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <a
            href="#about"
            className="font-mono text-xs uppercase tracking-[0.18em] text-green"
          >
            felipe<span className="text-slate">.rubio</span>
          </a>
          <LocaleToggle />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
          {t("name")}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">
          {t("title")}{" "}
          <span className="text-slate">{t("subtitle")}</span>
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate">
          {t("tagline")}
        </p>

        <div className="mt-12">
          <SideNav />
        </div>
      </div>

      <div className="mt-12 lg:mt-0">
        <Socials />
      </div>
    </header>
  );
}
