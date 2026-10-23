import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleHeading } from "@foundry/puzzle-heading";

export interface PuzzleServicePlan {
  /** the monospace label, e.g. "Light-touch" */
  label: string;
  title: string;
  text: string;
  points: string[];
  /** the small print under the list */
  note?: string;
  /** accent: the pale violet surface */
  tone?: "card" | "accent";
}

export interface PuzzleServiceProject {
  label: string;
  title: string;
  text: string;
}

export interface PuzzleServicesProps {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  /** two plans */
  plans: PuzzleServicePlan[];
  /** the heading over the projects row */
  projectsTitle?: string;
  /** four one-off projects */
  projects: PuzzleServiceProject[];
  className?: string;
}

const label = "font-mono text-sm/5 tracking-[0.06em] text-muted-foreground uppercase";

/** Two service plans, then a row of one-off projects. */
export function PuzzleServices({ eyebrow, title, text, plans, projectsTitle, projects, className }: PuzzleServicesProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-14 pb-16 lg:pt-[4.25rem] lg:pb-[4.5rem]">
        <PuzzleHeading eyebrow={eyebrow} eyebrowSize="lg" title={title} text={text} className="max-w-[30rem] lg:max-w-[40rem]" />

        <div className="mt-11 grid gap-3.5 lg:mt-14 lg:grid-cols-2 lg:gap-[1.125rem]">
          {plans.map((p) => (
            <article
              key={p.title}
              className={cn("rounded-lg px-6 pt-7 pb-6 lg:px-8 lg:pt-8 lg:pb-10", p.tone === "accent" ? "bg-accent text-accent-foreground" : "bg-card text-card-foreground")}
            >
              <p className={label}>{p.label}</p>
              <h3 className="mt-3 font-display text-2xl/[1.3] font-normal lg:mt-4 lg:text-[1.75rem]/[1.3]">{p.title}</h3>
              <p className="mt-4 text-[0.9375rem]/[1.6] lg:mt-6">{p.text}</p>
              <ul className="mt-4 flex flex-col gap-2 text-[0.9375rem]/[1.5] lg:mt-6 lg:gap-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <Check aria-hidden className="mt-1 size-3.5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                    {pt}
                  </li>
                ))}
              </ul>
              {p.note && <p className="mt-5 text-sm/[1.6] text-muted-foreground lg:mt-6 lg:text-xs">{p.note}</p>}
            </article>
          ))}
        </div>

        {projectsTitle && (
          <h3 className="mx-auto mt-12 max-w-[21rem] text-center font-display text-2xl/[1.3] font-normal text-balance sm:max-w-none lg:mt-[4.25rem] lg:text-[1.75rem]/[1.3]">
            {projectsTitle}
          </h3>
        )}
        <ul className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4 lg:gap-[1.125rem]">
          {projects.map((p) => (
            <li key={p.title} className="rounded-lg bg-card px-6 pt-7 pb-6 text-card-foreground lg:min-h-[17.6rem] lg:px-8 lg:pt-9 lg:pb-8">
              <p className={label}>{p.label}</p>
              <h4 className="mt-4 font-display text-xl/[1.6] font-medium lg:mt-5 lg:text-[1.375rem]/[1.65] lg:font-normal">{p.title}</h4>
              <p className="mt-3 text-[0.9375rem]/[1.6] lg:mt-5">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
