import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CastelionLines } from "@foundry/castelion-lines";
import { CastelionPlaceholder } from "@foundry/castelion-placeholder";
import "./castelion-hero.css";

export interface CastelionHeroProps {
  /** the big title of the mission row, one entry per desktop line */
  title: string[];
  /** the bold lead beside it (under it on phones), one entry per desktop line */
  lead: string[];
  /** the motto further down, one entry per desktop line */
  motto: string[];
  /** a video or image that fills the window and stays pinned (empty: a darkened dusk wash) */
  media?: ReactNode;
  /** what the film shows, for screen readers while the slot is empty */
  mediaLabel?: string;
  className?: string;
}

/** how many blind stripes close over the film */
const BLINDS = 12;

const pageTitle = "font-display text-[clamp(2.625rem,1.6rem+4.19vw,5.375rem)]/[1.31] font-bold tracking-[0.02em]";

/** Pinned-film hero: mission and motto scroll over it, cream blinds close it off. */
export function CastelionHero({ title, lead, motto, media, mediaLabel, className }: CastelionHeroProps) {
  return (
    <section className={cn("castelion-hero relative h-[300svh]", className)}>
      {/* the film, pinned for the whole section */}
      <div className="absolute inset-0">
        <div className="dark sticky top-0 h-svh overflow-clip bg-background">
          <CastelionPlaceholder media={media} tone="dusk" label={mediaLabel} className="absolute inset-0" />
          <div aria-hidden className="absolute inset-0 bg-linear-to-b from-card/55 via-card/20 to-card/10" />
        </div>
      </div>

      {/* the text, scrolling over the film */}
      <div className="dark relative h-full text-foreground">
        <div className="absolute inset-x-0 top-[158svh] lg:top-[155svh]">
          <div className="mx-auto grid max-w-page gap-11 px-gutter lg:grid-cols-[47.4%_1fr] lg:items-center lg:gap-0">
            <CastelionLines as="h2" lines={title} className={pageTitle} />
            <CastelionLines
              lines={lead}
              variant="fade"
              startIndex={1}
              className="max-w-[37.5rem] text-[clamp(1.125rem,1.032rem+0.381vw,1.375rem)]/[1.26] font-bold tracking-[0.02em]"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 top-[256svh] lg:top-[242svh]">
          <div className="mx-auto max-w-page px-gutter">
            <CastelionLines as="h2" lines={motto} className={pageTitle} />
          </div>
        </div>
      </div>

      {/* the blinds, pinned with the film, in the page colour */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 h-svh overflow-clip">
          <div className="castelion-hero-blinds flex h-full flex-col">
            {Array.from({ length: BLINDS }, (_, i) => {
              const t = i / (BLINDS - 1);
              return (
                <div key={i} className="flex-1">
                  <div
                    className="castelion-hero-blind size-full bg-background"
                    style={
                      {
                        "--castelion-blind-from": (0.14 + 0.26 * t).toFixed(3),
                        "--castelion-blind-mid": (0.42 + 0.4 * t).toFixed(3),
                      } as CSSProperties
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
