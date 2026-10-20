import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RoveiaStep {
  /** the small label beside the dot ("Step 1") */
  label: string;
  title: string;
  description?: string;
}

export interface RoveiaStepsProps {
  heading: string;
  steps: RoveiaStep[];
  /** the looping background video or image, shown under a 75% dark veil; a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * A dark, inset card with 40px corners over a veiled background video: a big light heading
 * on the left and a column of numbered steps on the right (white dot + "Step n", a 40px title,
 * a quiet note). Phones stack the heading over the steps.
 */
export function RoveiaSteps({ heading, steps, media, className }: RoveiaStepsProps) {
  return (
    <section className={cn("bg-background py-2 text-foreground lg:py-5", className)}>
      <div className="dark relative mx-5 overflow-clip rounded-[calc(var(--radius)+1rem)] bg-background text-foreground">
        <div aria-hidden className="absolute inset-0">
          {media ?? <div className="size-full bg-foreground/85" />}
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative grid gap-12 px-6 pt-16 pb-16 lg:grid-cols-2 lg:gap-8 lg:px-25 lg:pt-21 lg:pb-20">
          <h2 className="max-w-[26rem] text-[2.5rem] leading-[1.2] font-normal tracking-[-0.05em] lg:text-[4rem] lg:tracking-[-0.03em]">{heading}</h2>
          <ol className="flex flex-col gap-16 lg:gap-20 lg:pl-5">
            {steps.map((s) => (
              <li key={s.label}>
                <p className="flex items-center gap-6 text-[1.75rem] leading-9 font-light tracking-[-0.03em] lg:gap-4">
                  <span aria-hidden className="size-4 shrink-0 rounded-full bg-foreground" />
                  {s.label}
                </p>
                <h3 className="mt-10 text-2xl leading-[1.2] font-light tracking-[-0.02em] lg:mt-12 lg:text-[2.5rem]">{s.title}</h3>
                {s.description && <p className="mt-1 text-sm leading-6 tracking-[-0.01em] text-muted-foreground lg:mt-2">{s.description}</p>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
