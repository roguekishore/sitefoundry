import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerButton } from "@foundry/superpower-button";
import { SuperpowerFacts, type SuperpowerFact } from "@foundry/superpower-facts";
import { SuperpowerMedia } from "@foundry/superpower-media";
import "./superpower-hero.css";

export interface SuperpowerHeroProps {
  /** a small line above the headline (e.g. a rating), optional */
  eyebrow?: ReactNode;
  /** the headline, two short lines */
  title: string;
  /** one or two sentences under it */
  lead?: string;
  /** the vermillion button */
  primary: { label: string; href: string };
  /** the frosted button next to it */
  secondary?: { label: string; href: string };
  /** small facts under the buttons */
  facts?: SuperpowerFact[];
  /** the full-window video or photo; empty: a warm placeholder */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
  className?: string;
}

const step = (n: number) => ({ "--superpower-hero-step": n }) as CSSProperties;

export function SuperpowerHero({ eyebrow, title, lead, primary, secondary, facts, media, mediaLabel, className }: SuperpowerHeroProps) {
  return (
    <section className={cn("h-svh bg-background lg:h-[calc(100svh-5.125rem)] lg:px-2 lg:pb-2", className)}>
      <div className="dark relative flex h-full flex-col justify-end overflow-clip bg-background text-foreground lg:rounded-lg">
        <SuperpowerMedia media={media} tone="warm" label={mediaLabel} className="absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent from-35% to-background/90" aria-hidden />
        <div className="relative mx-auto w-full max-w-page px-gutter pb-12 lg:pb-16">
          {eyebrow && (
            <div className="superpower-hero-in mb-4 text-[0.8125rem]" style={step(0)}>
              {eyebrow}
            </div>
          )}
          <h1
            className="superpower-hero-in max-w-[13ch] text-[2rem] leading-[1.12] font-normal tracking-[-0.025em] lg:text-[2.8125rem] lg:leading-[1.2]"
            style={step(1)}
          >
            {title}
          </h1>
          {lead && (
            <p className="superpower-hero-in mt-4 max-w-[26rem] text-[1rem] leading-[1.5] text-foreground/80 lg:text-[1.0625rem]" style={step(2)}>
              {lead}
            </p>
          )}
          <div className="superpower-hero-in mt-7 flex flex-wrap gap-3" style={step(3)}>
            <SuperpowerButton href={primary.href} variant="brand">
              {primary.label}
            </SuperpowerButton>
            {secondary && (
              <SuperpowerButton href={secondary.href} variant="glass">
                {secondary.label}
              </SuperpowerButton>
            )}
          </div>
          {facts && facts.length > 0 && (
            <div className="superpower-hero-in mt-7" style={step(4)}>
              <SuperpowerFacts items={facts} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
