import { Mail, MapPin, Phone, Languages, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/cv";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <Section id="contact" title={t("title")} kicker={t("kicker")}>
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5">
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-start gap-4 border-b border-foreground/10 py-4 transition-colors hover:border-foreground/30"
          >
            <Mail className="mt-1 size-4 text-foreground/50" />
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/50">
                {t("emailLabel")}
              </p>
              <p className="text-base text-foreground">{personal.email}</p>
            </div>
            <ArrowUpRight className="mt-1 size-4 text-foreground/30 transition-colors group-hover:text-foreground" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 border-b border-foreground/10 py-4 transition-colors hover:border-foreground/30"
          >
            <LinkedInIcon className="mt-1 size-4 text-foreground/50" />
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/50">
                {t("linkedinLabel")}
              </p>
              <p className="text-base text-foreground">linkedin/felipe-rubio-fernandez</p>
            </div>
            <ArrowUpRight className="mt-1 size-4 text-foreground/30 transition-colors group-hover:text-foreground" />
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s/g, "")}`}
            className="group flex items-start gap-4 border-b border-foreground/10 py-4 transition-colors hover:border-foreground/30"
          >
            <Phone className="mt-1 size-4 text-foreground/50" />
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/50">
                {t("phoneLabel")}
              </p>
              <p className="text-base text-foreground">{personal.phone}</p>
            </div>
          </a>

          <div className="flex items-start gap-4 border-b border-foreground/10 py-4">
            <MapPin className="mt-1 size-4 text-foreground/50" />
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/50">
                {t("locationLabel")}
              </p>
              <p className="text-base text-foreground">Las Condes, Santiago · Chile</p>
            </div>
          </div>

          <div className="flex items-start gap-4 py-4">
            <Languages className="mt-1 size-4 text-foreground/50" />
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/50">
                {t("languagesLabel")}
              </p>
              <p className="text-base text-foreground">
                {personal.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 self-start">
          <Button asChild size="lg">
            <a href={`mailto:${personal.email}`}>{t("ctaEmail")}</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              {t("ctaLinkedIn")}
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
