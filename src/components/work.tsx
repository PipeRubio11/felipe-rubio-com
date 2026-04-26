import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export function Work() {
  const t = useTranslations("Work");

  return (
    <Section id="work" title={t("title")} kicker={t("kicker")}>
      <div className="grid gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
