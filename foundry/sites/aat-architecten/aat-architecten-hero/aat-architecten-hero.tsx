import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./aat-architecten-hero.css";

export interface AatArchitectenHeroProps {
  /** the one statement, a sentence or two */
  statement: string;
  /** the small cue at the bottom-left (e.g. "scroll") */
  scrollLabel?: string;
  /** the photo (an <img> with object-cover fills the frame); empty: a muted placeholder */
  media?: ReactNode;
  /** seconds before the photo wipes in on load (0.9 follows aat-architecten-loader) */
  revealDelay?: number;
  className?: string;
}

export function AatArchitectenHero({ statement, scrollLabel, media, revealDelay = 0.9, className }: AatArchitectenHeroProps) {
  return (
    <section className={cn("bg-background pb-section text-foreground", className)}>
      <div className="relative mx-auto max-w-page px-gutter pt-10 pb-10 lg:h-svh lg:pt-[10.5rem] lg:pb-0">
        <h1 className="max-w-[40rem] text-[clamp(24px,1.8vw+1rem,40px)] leading-[1.25] font-normal lg:max-w-[calc(61vw-2*var(--page-gutter)-2.5rem)]">
          {statement}
        </h1>

        <div className="relative mt-[4.75rem] lg:static lg:mt-0">
          {/* the photo: right of centre on phones; from 1024px flush with the window's right edge and
              almost window-tall (below the header at 1024–1279px, where the links would reach it) */}
          <div
            style={{ "--aat-hero-delay": `${revealDelay}s` } as CSSProperties}
            className="aat-architecten-hero-frame ml-[16.7%] w-[78.6%] lg:absolute lg:top-[6.875rem] lg:right-0 lg:ml-0 lg:h-[calc(100svh-9.375rem)] lg:w-[39vw] lg:max-w-[35rem] xl:top-0 xl:h-[calc(100svh-2.5rem)]"
          >
            <div className="aat-architecten-hero-crop aspect-[269/342] overflow-clip bg-muted lg:aspect-auto lg:h-full [&>img]:size-full [&>img]:object-cover">
              {media}
            </div>
          </div>
          {scrollLabel && (
            <span className="absolute bottom-0 left-0 text-base leading-none lg:bottom-10 lg:left-gutter">{scrollLabel}</span>
          )}
        </div>
      </div>
    </section>
  );
}
