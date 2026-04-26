import { useTranslations } from "next-intl";
import { LocaleToggle } from "@/components/locale-toggle";

export function Header() {
  const t = useTranslations("Nav");

  const links = [
    { id: "about", label: t("about") },
    { id: "work", label: t("work") },
    { id: "stack", label: t("stack") },
    { id: "certifications", label: t("certifications") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6 sm:px-10">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          felipe<span className="text-foreground/50">.rubio</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LocaleToggle />
        </div>
      </div>
    </header>
  );
}
