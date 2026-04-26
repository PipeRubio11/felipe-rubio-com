import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import type { Project } from "@/data/projects";

type Locale = "es" | "en";

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("Work");
  const locale = useLocale() as Locale;

  return (
    <article className="group relative flex flex-col gap-5 rounded-2xl border border-foreground/10 bg-foreground/[0.015] p-6 transition-colors hover:border-foreground/25 sm:p-8">
      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-mono uppercase tracking-[0.18em] text-foreground/50">
            {project.year}
          </span>
          <span className="text-foreground/30">·</span>
          <span className="text-foreground/60">{project.category[locale]}</span>
          {project.tier === "destacado" && (
            <>
              <span className="text-foreground/30">·</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {t("tier.destacado")}
              </span>
            </>
          )}
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              {project.name}
              <ArrowUpRight className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="text-sm text-foreground/60">{project.tagline[locale]}</p>
      </header>

      <p className="text-sm leading-relaxed text-foreground/75">
        {project.summary[locale]}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-y border-foreground/10 py-4 sm:grid-cols-4">
          {project.metrics.map((m, i) => (
            <div key={i}>
              <dt className="text-lg font-semibold tracking-tight text-foreground">
                {m.value}
              </dt>
              <dd className="text-xs text-foreground/55">{m.label[locale]}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="space-y-3">
        <div>
          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45">
            {t("highlightsLabel")}
          </p>
          <ul className="space-y-1 text-sm text-foreground/70">
            {project.highlights[locale].slice(0, 4).map((h, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/30" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45">
            {t("stackLabel")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-foreground/15 bg-foreground/[0.03] px-2.5 py-0.5 text-xs text-foreground/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {project.apis.length > 0 && (
          <div>
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45">
              {t("apisLabel")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.apis.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-2.5 py-0.5 text-xs text-emerald-700 dark:text-emerald-300"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
