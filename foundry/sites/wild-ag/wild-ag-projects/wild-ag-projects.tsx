import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WildAgButton } from "@foundry/wild-ag-button";
import { WildAgCarousel } from "@foundry/wild-ag-carousel";
import { WildAgHeading } from "@foundry/wild-ag-heading";
import { WildAgMedia } from "@foundry/wild-ag-media";

export interface WildAgProject {
  /** place and name */
  title: string;
  /** short facts, each led by an arrow */
  facts: string[];
  /** the outline pill */
  cta: { label: string; href: string };
  /** photo or rendering. Empty: a placeholder */
  media?: ReactNode;
}

export interface WildAgProjectsProps {
  /** an id for in-page links */
  id?: string;
  title: string;
  projects: WildAgProject[];
  /** screen-reader labels of the slider arrows */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

export function WildAgProjects({ id, title, projects, prevLabel, nextLabel, className }: WildAgProjectsProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative z-10 rounded-b-[calc(var(--radius)*3.4)] bg-muted px-gutter pt-[4.4rem] pb-[5.4rem] lg:rounded-b-[calc(var(--radius)*4.5)] lg:py-section",
        className,
      )}
    >
      <div className="mx-auto max-w-page">
        <WildAgCarousel
          title={<WildAgHeading>{title}</WildAgHeading>}
          prevLabel={prevLabel}
          nextLabel={nextLabel}
          columns={2}
          items={projects.map((p) => (
            <article key={p.title} className="flex h-full flex-col overflow-clip rounded-lg">
              <WildAgMedia media={p.media} className="aspect-[1.26] w-full lg:aspect-[1.85]" />
              <div className="flex-1 bg-linear-15 from-primary to-highlight px-9 pt-9 pb-9 text-primary-foreground lg:px-10 lg:pt-8 lg:pb-10">
                <h3 className="text-[1.9rem] leading-[1.2] font-semibold tracking-[-0.01em]">{p.title}</h3>
                <ul className="mt-3 flex flex-col gap-1.5 text-[1.0625rem] leading-[1.4] font-medium tracking-[-0.01em] text-primary-foreground/85 lg:flex-row lg:flex-wrap lg:gap-x-4 lg:gap-y-1.5">
                  {p.facts.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <ArrowRight aria-hidden strokeWidth={1.5} className="size-[1.15rem] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <WildAgButton href={p.cta.href} variant="outline" size="sm" className="mt-6 w-full lg:w-auto">
                  {p.cta.label}
                </WildAgButton>
              </div>
            </article>
          ))}
        />
      </div>
    </section>
  );
}
