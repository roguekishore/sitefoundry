import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal } from "@foundry/newhalo-reveal";
import "./newhalo-product-sequence.css";

export interface NewhaloProductSequenceProps {
  /** the anchor id (for the sub-navigation) */
  id?: string;
  /** the 100px heading over the first screen */
  title: string;
  /** the captions that pass by over the pinned picture */
  steps: { title: string; text: string; icon?: ReactNode }[];
  /** the picture (or image sequence) that stays pinned; empty shows the placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A pinned product story: a window-tall dark picture stays fixed while a 100px heading and then
 * a few short captions scroll past it on the left, each fading in at the middle of the window
 * and dimming as it leaves.
 */
export function NewhaloProductSequence({ id, title, steps, media, className }: NewhaloProductSequenceProps) {
  return (
    <section id={id} className={cn("dark relative bg-background text-foreground", className)}>
      <div className="sticky top-0 h-svh overflow-clip">
        <NewhaloMedia tone="deep" className={cn("absolute inset-0", newhaloReveal("bloom"))}>
          {media}
        </NewhaloMedia>
      </div>
      <div className="relative -mt-[100svh] mx-auto max-w-page px-gutter">
        <h2 className="max-w-[46rem] pt-section font-display text-[3.125rem] leading-[0.95] tracking-[-0.015em] lg:text-[6.25rem]">{title}</h2>
        <ol className="pt-[40svh] pb-[20svh]">
          {steps.map((s) => (
            <li key={s.title} className="flex min-h-[60svh] items-center">
              <div className="newhalo-product-sequence-caption max-w-[20rem]">
                {s.icon && <span className="mb-6 flex size-12 items-center [&_svg]:size-10 [&_svg]:stroke-1">{s.icon}</span>}
                <h3 className="font-display text-[1.3rem] leading-[1.1] lg:text-2xl">{s.title}</h3>
                <p className="mt-3 text-[0.91rem] leading-normal lg:text-base">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
