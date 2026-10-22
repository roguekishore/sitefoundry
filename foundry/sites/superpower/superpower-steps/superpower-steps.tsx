import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerMedia } from "@foundry/superpower-media";
import { SuperpowerReveal } from "@foundry/superpower-reveal";

export interface SuperpowerStep {
  title: string;
  text: string;
  /** the step's photo (square on desktop, 3:2 on phones); empty: a placeholder */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
}

export interface SuperpowerStepsProps {
  title: string;
  lead?: string;
  /** usually four; they're numbered 1, 2, 3… */
  steps: SuperpowerStep[];
  id?: string;
  className?: string;
}

export function SuperpowerSteps({ title, lead, steps, id, className }: SuperpowerStepsProps) {
  return (
    <section id={id} className={cn("bg-background py-12 text-foreground lg:flex lg:min-h-[88svh] lg:flex-col lg:justify-center lg:py-section", className)}>
      <div className="mx-auto w-full max-w-page px-gutter">
        <h2 className="text-center text-[2rem] leading-[1.2] font-normal tracking-[-0.025em] lg:text-[2.8125rem]">{title}</h2>
        {lead && (
          <p className="mx-auto mt-3 max-w-[18.5rem] text-center text-[1rem] leading-[1.45] text-muted-foreground lg:max-w-none lg:text-[0.9375rem]">
            {lead}
          </p>
        )}
        <ol className="mt-12 grid gap-9 lg:grid-cols-4 lg:gap-2">
          {steps.map((s, i) => (
            <SuperpowerReveal as="li" key={s.title} step={i} className="text-center lg:text-left">
              <SuperpowerMedia media={s.media} label={s.mediaLabel} className="aspect-[3/2] rounded-lg lg:aspect-square">
                <span className="absolute top-2 left-2 grid size-[1.875rem] place-items-center rounded-[calc(var(--radius)/3)] bg-foreground/35 text-[0.8125rem] text-background backdrop-blur-sm">
                  {i + 1}
                </span>
              </SuperpowerMedia>
              <h3 className="mt-7 text-[1.1875rem] leading-[1.3] font-normal tracking-[-0.015em] lg:mt-9 lg:text-[1.375rem]">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-[21rem] text-[1rem] leading-[1.45] text-muted-foreground lg:mx-0 lg:max-w-[17.5rem] lg:text-[0.9375rem]">
                {s.text}
              </p>
            </SuperpowerReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
