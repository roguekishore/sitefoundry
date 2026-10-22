import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OnEnergyBlurText } from "@foundry/on-energy-blur-text";
import { OnEnergyButton } from "@foundry/on-energy-button";
import { OnEnergyEyebrow } from "@foundry/on-energy-eyebrow";
import { OnEnergyReveal } from "@foundry/on-energy-reveal";

export interface OnEnergyPerformanceProps {
  /** the small mono label (scrambles in) */
  eyebrow?: string;
  /** the bright first line; its letters blur in */
  title: string;
  /** the grey statement that follows, at the same size */
  text?: string;
  /** a glass button under the statement */
  cta?: { label: string; href: string };
  /** the full-window background (video or canvas art); a soft glow haze when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-window dark section over full-bleed media: in the right half, from the top, a mono
 * eyebrow, a bright heading whose letters blur in, the same-size statement continuing in grey,
 * and a glass button that fades in after it.
 */
export function OnEnergyPerformance({ eyebrow, title, text, cta, media, className }: OnEnergyPerformanceProps) {
  return (
    <section className={cn("relative h-svh overflow-clip bg-background text-foreground", className)}>
      <div className="absolute inset-0">
        {media ?? (
          <div className="size-full bg-[radial-gradient(90%_75%_at_22%_95%,color-mix(in_oklab,var(--glow)_42%,transparent),transparent_72%)]" />
        )}
      </div>
      <div className="relative mx-auto grid max-w-page px-gutter pt-[7.75rem] lg:grid-cols-2 lg:gap-x-[1.6vw] lg:pt-[7.5rem]">
        <div className="lg:col-start-2 lg:max-w-[36rem]">
          {eyebrow && <OnEnergyEyebrow label={eyebrow} className="text-foreground/75" />}
          <OnEnergyBlurText
            as="h2"
            text={title}
            className="mt-9 font-display text-[1.82rem]/[1.142] font-light tracking-[-0.04em] lg:mt-12 lg:text-4xl/[1.167]"
          />
          {text && (
            <OnEnergyReveal as="p" className="font-display text-[1.82rem]/[1.142] font-light tracking-[-0.04em] text-foreground/45 lg:text-4xl/[1.167]">
              {text}
            </OnEnergyReveal>
          )}
          {cta && (
            <OnEnergyReveal delay={6} className="mt-10">
              <OnEnergyButton href={cta.href}>{cta.label}</OnEnergyButton>
            </OnEnergyReveal>
          )}
        </div>
      </div>
    </section>
  );
}
