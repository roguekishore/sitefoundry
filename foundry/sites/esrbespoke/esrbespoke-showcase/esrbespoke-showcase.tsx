import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./esrbespoke-showcase.css";

export interface EsrbespokeShowcaseSlide {
  /** the picture (fills like object-fit: cover). Empty: a placeholder */
  media?: ReactNode;
  /** what the picture shows, for screen readers */
  label: string;
}

export interface EsrbespokeShowcaseProps {
  /** the pictures, in order; the tile always shows the one after the current */
  slides: EsrbespokeShowcaseSlide[];
  /** the tag on the tile */
  nextLabel: string;
  className?: string;
}

const ease = "ease-[cubic-bezier(0.19,1,0.22,1)]";

/** Full-window slideshow with a NEXT tile in the middle that wipes open on entering view. */
export function EsrbespokeShowcase({ slides, nextLabel, className }: EsrbespokeShowcaseProps) {
  const [current, setCurrent] = useState(0);
  const next = slides.length ? (current + 1) % slides.length : 0;

  return (
    <section className={cn("esrbespoke-showcase dark relative aspect-[4/5] overflow-clip bg-background text-foreground lg:aspect-auto lg:h-svh", className)}>
      {slides.map((slide, i) => (
        <div
          key={i}
          role="img"
          aria-label={slide.label}
          aria-hidden={i !== current}
          className={cn(
            "absolute inset-0 transition-opacity duration-800 motion-reduce:transition-none [&>*]:h-full [&>*]:w-full [&>img]:object-cover",
            ease,
            i === current ? "opacity-100" : "opacity-0",
          )}
        >
          {slide.media ?? <div className="h-full w-full bg-muted" />}
        </div>
      ))}
      {slides.length > 1 && (
        <button
          type="button"
          onClick={() => setCurrent(next)}
          aria-label={`${nextLabel}: ${slides[next].label}`}
          className="esrbespoke-showcase-tile group absolute top-[40%] right-gutter h-[6rem] w-[5.125rem] overflow-clip lg:top-1/2 lg:right-auto lg:left-1/2 lg:size-[13.375rem]"
        >
          <span className={cn("absolute inset-0 transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none [&>*]:h-full [&>*]:w-full [&>img]:object-cover", ease)}>
            {slides[next].media ?? <span className="block h-full w-full bg-foreground/25" />}
          </span>
          <span className="absolute top-4 left-4 hidden h-6 items-center bg-background px-2 font-mono text-[0.8125rem] leading-none font-semibold tracking-[0.08em] text-foreground uppercase font-stretch-[88%] lg:flex">
            {nextLabel}
          </span>
        </button>
      )}
    </section>
  );
}
