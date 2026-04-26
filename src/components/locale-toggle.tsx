"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export function LocaleToggle() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const next = locale === "es" ? "en" : "es";

  const onClick = () => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isPending}
      className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-foreground disabled:opacity-50"
      aria-label={`Switch to ${next}`}
    >
      {t("switchLocale")}
    </button>
  );
}
