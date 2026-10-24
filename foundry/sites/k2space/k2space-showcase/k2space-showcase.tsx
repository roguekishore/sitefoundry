import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { K2spaceLineReveal } from "@foundry/k2space-line-reveal";
import { K2spaceMedia } from "@foundry/k2space-media";
import "./k2space-showcase.css";

export interface K2spaceMarker {
  /** horizontal position, percent of the frame width (0–100) */
  x: number;
  /** vertical position, percent of the frame height (0–100) */
  y: number;
  /** what the marker points at (shown on hover and read by screen readers) */
  label: string;
}

export interface K2spaceShowcaseProps {
  /** the title; "\n" breaks the line */
  title: string;
  /** the full-bleed render or photo */
  media?: ReactNode;
  /** bracket markers over the media */
  markers?: K2spaceMarker[];
  className?: string;
}

const corner = "absolute size-2.5 border-foreground/90 lg:size-[0.8vw]";

/** A title over one full-bleed render with bracket hotspots placed on it. */
export function K2spaceShowcase({ title, media, markers = [], className }: K2spaceShowcaseProps) {
  return (
    <section
      className={cn(
        "bg-background pt-[186px] text-foreground [font-stretch:var(--k2space-stretch,100%)] lg:pt-[14.6vw]",
        className,
      )}
    >
      <K2spaceLineReveal text={title} className="px-gutter font-display text-[34px]/none font-[560] lg:text-[3.307vw]/none" />
      <div className="relative mt-[70px] aspect-[390/760] [view-timeline:--k2space-showcase_block] sm:aspect-[4/3] lg:mt-[4.86vw] lg:aspect-[2/1]">
        <K2spaceMedia media={media} scrub className="absolute inset-0" />
        {markers.map((marker, i) => (
          <button
            key={i}
            type="button"
            aria-label={marker.label}
            className="k2space-showcase-marker group dark absolute size-14 -translate-x-1/2 -translate-y-1/2 text-foreground lg:size-[3.7vw]"
            style={{ left: `${marker.x}%`, top: `${marker.y}%`, "--k2space-showcase-i": i } as CSSProperties}
          >
            <span aria-hidden className={cn(corner, "top-0 left-0 border-t border-l")} />
            <span aria-hidden className={cn(corner, "top-0 right-0 border-t border-r")} />
            <span aria-hidden className={cn(corner, "bottom-0 left-0 border-b border-l")} />
            <span aria-hidden className={cn(corner, "right-0 bottom-0 border-r border-b")} />
            <span aria-hidden className="absolute top-1/2 left-1/2 size-1.5 -translate-1/2 bg-foreground lg:size-[0.45vw]" />
            <span
              aria-hidden
              className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 bg-primary px-3 py-2 text-sm/none font-medium whitespace-nowrap text-primary-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none lg:text-[max(0.875rem,0.93vw)]/none"
            >
              {marker.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
