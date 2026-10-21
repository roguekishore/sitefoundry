import type { ReactNode } from "react";
import { LeomeAndPartnersWordReveal } from "@foundry/leome-and-partners-word-reveal";
import { cn } from "@foundry/foundry-utils";
import "./leome-and-partners-hero.css";

export interface LeomeAndPartnersHeroProps {
  /** the headline's first line, above the photo */
  titleTop: string;
  /** the headline's second line, below the photo, in the highlight colour */
  titleBottom: string;
  /**
   * The 3:2 photo between the two lines; give it `className="size-full object-cover"` and
   * `alt=""` (it sits inside the headline). It zooms in slowly as the page scrolls. A
   * placeholder when empty.
   */
  media?: ReactNode;
  /** small labels spread along the bottom edge (practice areas, services…) */
  labels?: string[];
  /** cover the hero with a panel that slides up on load, like the original's intro */
  intro?: boolean;
  /** stay pinned at the top while the following sections slide over it */
  pinned?: boolean;
  className?: string;
}

/**
 * A window-high, centred hero: a large two-line headline split by a 3:2 photo (first line in
 * primary, second in highlight) and a row of small labels along the bottom. On load an intro
 * panel slides up, the words rise out of masks and the labels follow; while scrolling the
 * photo zooms in and the hero stays pinned under the next sections.
 */
export function LeomeAndPartnersHero({
  titleTop,
  titleBottom,
  media,
  labels,
  intro = true,
  pinned = true,
  className,
}: LeomeAndPartnersHeroProps) {
  const start = intro ? 0.75 : 0.1;
  const topWords = titleTop.split(/\s+/).filter(Boolean).length;
  return (
    <section
      className={cn(
        "relative flex h-svh flex-col overflow-clip bg-background px-gutter font-sans text-foreground",
        pinned && "sticky top-0",
        className,
      )}
    >
      <div className="flex flex-1 flex-col items-center justify-center pt-[4.5rem] lg:pt-[6.5rem]">
        <h1 className="flex w-full flex-col items-center text-center font-display text-[3.75rem] leading-[1.2] font-medium tracking-[-0.02em] lg:text-[5.5rem]">
          <span className="block">
            <LeomeAndPartnersWordReveal text={titleTop} trigger="load" delay={start} stagger={0.08} />
          </span>
          <span className="relative my-3 block aspect-[3/2] w-full overflow-clip bg-muted lg:my-4 lg:w-[32rem]">
            <span className="leome-and-partners-hero-media absolute inset-0 block">
              {media ?? <span className="block size-full bg-linear-to-br from-muted via-muted to-glow/25" />}
            </span>
          </span>
          <span className="block text-highlight">
            <LeomeAndPartnersWordReveal text={titleBottom} trigger="load" delay={start + topWords * 0.08} stagger={0.08} />
          </span>
        </h1>
      </div>

      {labels && labels.length > 0 && (
        <ul className="flex justify-between gap-4 pb-6 text-[0.85rem] leading-tight font-medium">
          {labels.map((label, i) => (
            <li
              key={label}
              className="leome-and-partners-hero-label"
              style={{ animationDelay: `${(start + 0.45 + i * 0.06).toFixed(2)}s` }}
            >
              {label}
            </li>
          ))}
        </ul>
      )}

      {intro && <div aria-hidden className="leome-and-partners-hero-intro pointer-events-none absolute inset-0 z-20 bg-card" />}
    </section>
  );
}
