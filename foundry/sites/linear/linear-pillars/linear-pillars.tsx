import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LinearPlaceholder } from "@foundry/linear-placeholder";

export interface LinearPillar {
  /** the tiny monospace label at the top (desktop only), e.g. "FIG 0.1" */
  figure?: string;
  /** the medium-weight title */
  title: ReactNode;
  /** two short grey lines */
  text: ReactNode;
  /** the illustration; empty shows a soft placeholder patch */
  media?: ReactNode;
  /** a name for the placeholder, for screen readers */
  mediaLabel?: string;
}

export interface LinearPillarsProps {
  /** three pillars read best */
  pillars: LinearPillar[];
  className?: string;
}

/** Columns with a figure label, an illustration and a short title + text. */
export function LinearPillars({ pillars, className }: LinearPillarsProps) {
  return (
    <section className={cn("bg-background pb-20 text-foreground lg:pb-40", className)}>
      <ul className="flex snap-x snap-mandatory scroll-px-2 gap-2 overflow-x-auto px-2 [scrollbar-width:none] lg:mx-auto lg:grid lg:max-w-[calc(var(--page-width)+2*var(--page-gutter))] lg:snap-none lg:grid-cols-3 lg:gap-0 lg:overflow-visible lg:px-gutter">
        {pillars.map((p, i) => (
          <li
            key={i}
            className={cn(
              "flex w-[84vw] max-w-[22rem] shrink-0 snap-start flex-col rounded-lg border border-border bg-card/40 p-6 lg:w-auto lg:max-w-none lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0",
              i > 0 && "lg:border-l lg:border-border lg:pl-8",
            )}
          >
            {p.figure && <p className="hidden font-mono text-[0.625rem] leading-[0.875rem] text-muted-foreground/60 uppercase lg:block">{p.figure}</p>}
            <LinearPlaceholder
              kind="patch"
              label={p.media ? undefined : p.mediaLabel}
              className="mx-auto mt-2 h-[15.5rem] w-full max-w-[20.5rem] lg:mt-4 lg:h-[18.75rem]"
            >
              {p.media}
            </LinearPlaceholder>
            <h3 className="mt-8 text-[0.9375rem] leading-6 font-[510] text-foreground lg:mt-[3.25rem]">{p.title}</h3>
            <p className="mt-2 max-w-[20rem] text-[0.9375rem] leading-6 text-muted-foreground">{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
