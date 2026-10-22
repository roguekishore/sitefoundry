import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./on-energy-hero.css";

export interface OnEnergyHeroProps {
  /** the headline; a "\n" breaks the line */
  title: string;
  /** a short line of copy in the bottom-left corner (desktop only, as on the original) */
  lede?: string;
  /** the yellow promo card in the bottom-right corner (full width at the bottom on phones) */
  promo?: {
    /** small mono label after a dot */
    label: string;
    /** two or three lines of copy */
    text: string;
    href: string;
    /** a small square image of the product; a placeholder square when empty */
    media?: ReactNode;
  };
  /** the full-bleed background (video or image, cover); a placeholder surface when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-window hero: full-bleed media, a big light headline at mid-height on the left, a
 * small lede in the bottom-left corner and a yellow promo card in the bottom-right. As the
 * hero scrolls away the media drifts down (parallax) and a veil of the page colour fades in.
 */
export function OnEnergyHero({ title, lede, promo, media, className }: OnEnergyHeroProps) {
  return (
    <section className={cn("on-energy-hero relative h-svh overflow-clip bg-background text-foreground", className)}>
      <div className="on-energy-hero-media absolute inset-0">
        {media ?? <div className="size-full bg-linear-to-b from-muted via-muted/70 to-background" />}
      </div>
      <div aria-hidden className="on-energy-hero-veil absolute inset-0 bg-background opacity-0" />

      <div className="relative flex h-full flex-col justify-center px-gutter">
        <h1 className="font-display text-[2.34rem]/[1.167] font-light tracking-[-0.02em] whitespace-pre-line lg:text-[4rem]/[1.125] lg:tracking-[-0.04em]">
          {title}
        </h1>
      </div>

      {lede && (
        <p className="absolute bottom-10 left-gutter hidden max-w-[22rem] text-base/[1.375] font-light tracking-[-0.02em] lg:block">{lede}</p>
      )}

      {promo && (
        <a
          href={promo.href}
          className="absolute inset-x-4 bottom-4 flex h-[7.375rem] gap-4 rounded-[1rem] bg-primary p-1.5 pl-4 text-primary-foreground transition-[filter] duration-200 hover:brightness-95 lg:left-auto lg:w-[21.625rem]"
        >
          <span className="flex flex-1 flex-col justify-start gap-2.5 py-2.5">
            <span className="flex items-center gap-2 font-mono text-xs uppercase">
              <span aria-hidden className="size-1.5 rounded-full bg-current" />
              {promo.label}
            </span>
            <span className="text-[0.875rem]/[1.375] font-light lg:text-base/[1.375]">{promo.text}</span>
          </span>
          <span className="aspect-square h-full shrink-0 overflow-clip rounded-[0.5625rem]">
            {promo.media ?? <span className="block size-full bg-primary-foreground/15" />}
          </span>
        </a>
      )}
    </section>
  );
}
