import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SaronicButton, type SaronicButtonProps } from "@foundry/saronic-button";
import { SaronicPlaceholder } from "@foundry/saronic-placeholder";
import "./saronic-hero.css";

export interface SaronicHeroAction {
  /** the button text */
  label: ReactNode;
  /** a shorter text for phones */
  shortLabel?: ReactNode;
  href: string;
  /** the icon after the label */
  icon?: SaronicButtonProps["icon"];
  /** primary (lime) or secondary (veil) */
  variant?: "primary" | "secondary";
}

export interface SaronicHeroProps {
  /** the mono line above the headline */
  eyebrow: ReactNode;
  /** the headline (about three lines on desktop) */
  title: ReactNode;
  /** up to two buttons */
  actions?: SaronicHeroAction[];
  /** a giant wordmark spread across the top on desktop (the company name) */
  wordmark?: string;
  /** the full-bleed video or photo behind everything */
  media?: ReactNode;
  /** the hero sits under a 48/64px bar (the announcement strip): it is that much shorter so it still ends at the window bottom */
  belowBar?: boolean;
  className?: string;
}

/**
 * A window-tall hero over full-bleed footage with a slate wash. Desktop spreads a giant
 * stretched wordmark across the top and sets the copy in a column from 60% of the width,
 * 80px off the bottom; phones put the copy at the bottom. On load the eyebrow, headline and
 * buttons rise in, staggered. As the hero scrolls away the footage stays pinned and dims to
 * 20% while the wordmark and copy fade out.
 */
export function SaronicHero({ eyebrow, title, actions = [], wordmark, media, belowBar = false, className }: SaronicHeroProps) {
  return (
    <section
      className={cn(
        "saronic-hero dark relative isolate flex overflow-clip bg-background text-foreground",
        belowBar ? "h-[calc(100svh-3rem)] lg:h-[calc(100svh-4rem)]" : "h-svh",
        className,
      )}
    >
      <div className="saronic-hero-media absolute inset-0 -z-10">
        <SaronicPlaceholder media={media} className="absolute inset-0" />
        <div aria-hidden className="saronic-hero-wash absolute inset-0" />
      </div>

      {wordmark && (
        <div className="saronic-hero-fade absolute inset-x-6 top-[calc(4rem+2.5vw)] hidden lg:block">
          <svg viewBox="0 0 1392 132" className="block h-auto w-full" role="img" aria-label={wordmark}>
            <text
              x="0"
              y="130"
              textLength="1392"
              lengthAdjust="spacingAndGlyphs"
              fill="currentColor"
              className="font-display text-[180px] font-extrabold uppercase"
            >
              {wordmark}
            </text>
          </svg>
        </div>
      )}

      <div className="saronic-hero-fade mt-auto w-full px-gutter pb-10 lg:pr-20 lg:pb-20 lg:pl-[60%]">
        <p className="saronic-hero-rise font-mono text-base/[1.5] tracking-[0.04em] uppercase lg:text-[1.49vw]/[1.5]">{eyebrow}</p>
        <h1 className="saronic-hero-rise mt-3 font-display text-2xl/[1.2] font-medium tracking-[-0.02em] [word-spacing:-0.08em] [animation-delay:0.1s] lg:mt-4 lg:text-[2.43vw]/[1.2]">
          {title}
        </h1>
        {actions.length > 0 && (
          <div className="saronic-hero-rise mt-10 flex flex-wrap gap-4 [animation-delay:0.2s] lg:mt-16">
            {actions.map((action, i) => (
              <SaronicButton
                key={i}
                href={action.href}
                shortLabel={action.shortLabel}
                icon={action.icon ?? (i === 0 ? "down" : "arrow")}
                variant={action.variant ?? (i === 0 ? "primary" : "secondary")}
                className={i === 0 ? "min-w-45" : undefined}
              >
                {action.label}
              </SaronicButton>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
