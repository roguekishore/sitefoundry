import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BrexButton } from "@foundry/brex-button";
import { BrexHeading } from "@foundry/brex-heading";
import { BrexPlaceholder } from "@foundry/brex-placeholder";

export interface BrexSolution {
  title: string;
  text: string;
  /** label and destination of the orange link */
  link: { label: string; href: string };
  /** the photo. A placeholder when empty */
  media?: ReactNode;
}

export interface BrexSolutionsProps {
  title: string;
  /** three columns */
  solutions: BrexSolution[];
  className?: string;
}

/** "Solutions for every stage": three photo columns on a grey band. */
export function BrexSolutions({ title, solutions, className }: BrexSolutionsProps) {
  return (
    <section className={cn("bg-muted px-gutter pt-16 pb-12 lg:px-[calc(var(--page-gutter)*3)] lg:pb-20", className)}>
      <BrexHeading title={title} className="max-w-[40rem] lg:max-w-[56rem]" />
      <div className="mx-auto mt-12 grid max-w-page gap-x-6 gap-y-10 md:grid-cols-3 lg:mt-16">
        {solutions.map((s) => (
          <article key={s.title}>
            {s.media ?? <BrexPlaceholder tone="photo" className="aspect-[416/260] w-full rounded-xl" />}
            <h3 className="mt-6 font-display text-2xl/[1.8125rem] font-medium tracking-[-0.02em] text-foreground">{s.title}</h3>
            <p className="mt-2 text-base/6 text-muted-foreground">{s.text}</p>
            <BrexButton href={s.link.href} variant="link" className="mt-6">
              {s.link.label}
            </BrexButton>
          </article>
        ))}
      </div>
    </section>
  );
}
