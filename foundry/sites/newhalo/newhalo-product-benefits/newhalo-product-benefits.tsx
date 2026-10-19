import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";

export interface NewhaloProductBenefitsProps {
  /** the anchor id (for the sub-navigation) */
  id?: string;
  /** the 100px white heading at the top */
  title: string;
  /** two or three short points along the bottom, each under a white hairline */
  points: { title: string; text: string }[];
  /** the full-bleed photo; empty shows the placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-bleed photo band 1.2 windows tall: a 100px white heading at the top and a row of short
 * points along the bottom, each under a thin white rule. The photo blooms in; points fade in.
 */
export function NewhaloProductBenefits({ id, title, points, media, className }: NewhaloProductBenefitsProps) {
  return (
    <section id={id} className={cn("dark relative min-h-[120svh] overflow-clip bg-background text-foreground", className)}>
      <NewhaloMedia tone="deep" className={cn("absolute inset-0", newhaloReveal("bloom"))}>
        {media}
      </NewhaloMedia>
      <div className="relative mx-auto flex min-h-[120svh] max-w-page flex-col px-gutter py-section">
        <h2 className="max-w-[56rem] font-display text-[3.125rem] leading-[0.95] tracking-[-0.015em] lg:text-[6.25rem]">{title}</h2>
        <ul className="mt-auto grid gap-10 pt-20 sm:grid-cols-2 lg:max-w-[42.6rem] lg:gap-5">
          {points.map((p, i) => (
            <li key={p.title} className={cn("border-t border-foreground pt-3", newhaloReveal("fade"))} style={newhaloRevealStyle(i)}>
              <h3 className="font-display text-[1.3rem] leading-[1.1] lg:text-2xl">{p.title}</h3>
              <p className="mt-6 text-[0.91rem] leading-normal lg:mt-12 lg:text-base">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
