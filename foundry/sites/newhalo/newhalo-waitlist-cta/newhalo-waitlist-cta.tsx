import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";

export interface NewhaloWaitlistCtaProps {
  /** the 100px white heading */
  title: string;
  /** the numbered steps on the right, each between thin white rules */
  steps: string[];
  /** the full-width white button under the steps */
  cta: { label: string; href: string };
  /** the full-bleed orange photo; empty shows a warm gradient placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A closing call to action on a full-bleed amber→red photo: a 100px white heading on the
 * left, and on the right numbered steps between thin white rules and a full-width white
 * button. The photo drifts; steps fade in one after another.
 */
export function NewhaloWaitlistCta({ title, steps, cta, media, className }: NewhaloWaitlistCtaProps) {
  return (
    <section className={cn("dark relative overflow-clip bg-background text-foreground", className)}>
      <NewhaloMedia tone="warm" className="absolute inset-0" innerClassName={cn("-inset-y-10", newhaloReveal("drift"))}>
        {media}
      </NewhaloMedia>
      <div className="relative mx-auto grid min-h-[43.75rem] max-w-page content-start gap-y-12 px-gutter pt-12 pb-section lg:grid-cols-12 lg:gap-x-6 lg:pt-10">
        <h2 className="font-display text-[3.125rem] leading-[0.95] tracking-[-0.015em] lg:col-span-7 lg:pt-3 lg:text-[6.25rem]">{title}</h2>
        <div className="lg:col-span-4 lg:col-start-9">
          <ol className="border-b border-foreground">
            {steps.map((s, i) => (
              <li key={s} className={cn("flex border-t border-foreground py-3 text-base leading-normal", newhaloReveal("fade"))} style={newhaloRevealStyle(i)}>
                <span className="w-[3.1rem] shrink-0">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <NewhaloButton label={cta.label} href={cta.href} variant="light" block className="mt-10" />
        </div>
      </div>
    </section>
  );
}
