import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NekoButton } from "@foundry/neko-button";
import { NekoSlot } from "@foundry/neko-slot";
import "./neko-hero.css";

export interface NekoHeroProps {
  /** the big headline */
  title: string;
  /** the charcoal button at the foot */
  cta: { label: string; href: string };
  /** desktop only: the full-bleed picture of the first screen, before the card shrinks */
  media?: ReactNode;
  /** the picture the card settles on (the only one on phones), cropped like object-fit: cover */
  settledMedia?: ReactNode;
  className?: string;
}

export function NekoHero({ title, cta, media, settledMedia, className }: NekoHeroProps) {
  return (
    <section className={cn("neko-hero relative h-svh bg-background lg:h-[175svh]", className)}>
      <div className="sticky top-0 h-svh overflow-clip">
        <div className="neko-hero-card absolute inset-0 overflow-clip lg:inset-x-gutter lg:top-0 lg:bottom-6 lg:rounded-b-[4rem]">
          <NekoSlot media={media} className="absolute inset-0 hidden lg:block" />
          <NekoSlot media={settledMedia} tone="lemon" className="neko-hero-second absolute inset-0" />

          <h1 className="neko-hero-title absolute inset-x-0 top-[44%] -translate-y-1/2 px-gutter text-center font-display text-[3.375rem] leading-[1.05] tracking-[-0.025em] text-foreground text-balance lg:top-1/2 lg:text-[6.25rem] lg:leading-[1]">
            {title}
          </h1>
        </div>
        <div className="absolute inset-x-0 bottom-12 flex justify-center px-gutter">
          <NekoButton href={cta.href}>{cta.label}</NekoButton>
        </div>
      </div>
    </section>
  );
}
