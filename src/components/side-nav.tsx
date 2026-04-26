"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const SECTIONS = ["about", "experience", "projects", "stack", "certifications"] as const;
type SectionId = (typeof SECTIONS)[number];

export function SideNav() {
  const t = useTranslations("Nav");
  const [active, setActive] = useState<SectionId>("about");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav aria-label="In-page" className="hidden lg:block">
      <ul className="space-y-2">
        {SECTIONS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "group flex items-center py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors",
                active === id
                  ? "text-lightest-slate"
                  : "text-slate hover:text-lightest-slate"
              )}
            >
              <span
                className={cn(
                  "mr-4 inline-block h-px bg-current transition-all duration-300",
                  active === id ? "w-16" : "w-8 group-hover:w-16"
                )}
                aria-hidden
              />
              {t(id)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
