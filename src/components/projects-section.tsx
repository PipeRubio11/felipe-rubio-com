import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type Locale = "es" | "en";

const PROJECT_GRADIENTS: Record<string, string> = {
  "concha-y-toro": "from-rose-900 via-rose-700 to-amber-600",
  rocketmonk: "from-emerald-700 via-teal-600 to-cyan-500",
  "personal-brand-suite": "from-violet-700 via-fuchsia-600 to-rose-500",
  "rf-consultores": "from-slate-800 via-blue-900 to-amber-700",
  "pack-and-print": "from-orange-700 via-amber-600 to-yellow-500",
};

function ProjectCover({ slug, name }: { slug: string; name: string }) {
  const gradient = PROJECT_GRADIENTS[slug] ?? "from-slate-700 to-slate-900";
  const initials = name
    .split(/[\s·]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded border-2 border-lightest-navy/40 bg-gradient-to-br shadow-md transition group-hover:border-lightest-navy/70 sm:aspect-square",
        gradient
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-navy/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-4xl font-bold tracking-tight text-white/90 sm:text-5xl">
          {initials}
        </span>
      </div>
    </div>
  );
}

function ProjectRow({ project, locale }: { project: Project; locale: Locale }) {
  const t = useTranslations("Projects");
  const titleId = `project-${project.slug}`;

  return (
    <li
      className="relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
      aria-labelledby={titleId}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover/list:bg-light-navy/50 lg:group-hover/list:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/list:drop-shadow-lg" />

      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 id={titleId}>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-lightest-slate hover:text-green focus-visible:text-green"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {project.name}
                <ArrowUpRight className="inline-block size-4 shrink-0 translate-y-0.5 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              </span>
            </a>
          ) : (
            <span className="text-base font-medium leading-tight text-lightest-slate">
              {project.name}
            </span>
          )}
        </h3>

        <p className="mt-2 text-sm leading-normal text-slate">
          {project.summary[locale]}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-3 font-mono text-xs">
            {project.metrics.slice(0, 4).map((m, i) => (
              <li key={i} className="flex items-baseline gap-1.5">
                <span className="text-green">{m.value}</span>
                <span className="text-slate">{m.label[locale]}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
          {[...project.stack, ...project.apis].slice(0, 8).map((s) => (
            <li
              key={s}
              className="rounded-full bg-green-tint px-2.5 py-0.5 font-mono text-xs leading-5 text-green"
            >
              {s}
            </li>
          ))}
        </ul>

        {project.url && (
          <div className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-slate">
            <ExternalLink className="size-3" />
            <span>{t("viewLive")}</span>
          </div>
        )}
      </div>

      <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
        <ProjectCover slug={project.slug} name={project.name} />
      </div>
    </li>
  );
}

export function ProjectsSection() {
  const t = useTranslations("Projects");
  const locale = useLocale() as Locale;

  const featured = projects.filter((p) => p.tier === "destacado");
  const more = projects.filter((p) => p.tier === "secundario");

  return (
    <section
      id="projects"
      aria-label={t("title")}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-lightest-slate">
          {t("title")}
        </h2>
      </div>

      <ol className="group/list space-y-12">
        {featured.map((p) => (
          <ProjectRow key={p.slug} project={p} locale={locale} />
        ))}
      </ol>

      {more.length > 0 && (
        <>
          <h3 className="mt-16 font-mono text-xs uppercase tracking-widest text-lightest-slate">
            {t("moreTitle")}
          </h3>
          <ol className="group/list mt-6 space-y-12">
            {more.map((p) => (
              <ProjectRow key={p.slug} project={p} locale={locale} />
            ))}
          </ol>
        </>
      )}
    </section>
  );
}
