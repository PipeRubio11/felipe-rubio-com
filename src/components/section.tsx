import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, kicker, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("border-t border-foreground/10 py-24 sm:py-32", className)}>
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <header className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
            {id}
          </p>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {kicker && (
            <p className="text-base text-foreground/60 sm:text-lg">{kicker}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
