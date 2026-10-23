import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OndoPlaceholder } from "@foundry/ondo-placeholder";
import "./ondo-hero.css";

export interface OndoHeroProps {
  /** the headline's first half, left of (above) the frame */
  lead: string;
  /** the headline's second half, right of (below) the frame */
  trail: string;
  /** the serif sentence under the frame */
  text: string;
  /** a small hint shown while the hero loads in (e.g. "Scroll to explore") */
  hint?: string;
  /** the three frames, outer to inner (square videos or images). Plain surfaces when empty */
  frames?: [ReactNode?, ReactNode?, ReactNode?];
  className?: string;
}

const serif = "font-[family-name:var(--ondo-serif,var(--typeface-display))]";

// outer, middle, inner: size as a share of the frame, corner radius, the scale they load in
// from (so all three start about the same screen-filling size), placeholder tone
const layers = [
  { size: "size-full", radius: "rounded-[2rem] xl:rounded-[2.5rem]", from: "[--ondo-hero-from:1.9]", tone: "muted" as const },
  { size: "size-[86%]", radius: "rounded-[1.75rem] xl:rounded-[2.25rem]", from: "[--ondo-hero-from:2.2]", tone: "deep" as const },
  { size: "size-[61%]", radius: "rounded-[1.375rem] xl:rounded-[1.75rem]", from: "[--ondo-hero-from:2.9]", tone: "muted" as const },
];

const word =
  "relative z-0 block font-display text-[2.75rem] leading-[1.1] font-medium tracking-[-0.035em] whitespace-nowrap text-foreground xl:text-[3.5rem]";

/** Split headline around a nested-frame "tunnel", 125% of the window tall. */
export function OndoHero({ lead, trail, text, hint, frames, className }: OndoHeroProps) {
  return (
    <section className={cn("relative min-h-[125svh] overflow-x-clip bg-background", className)}>
      <h1 className="sr-only">{`${lead} ${trail}`}</h1>
      <div className="flex min-h-[125svh] flex-col items-center justify-center px-gutter pb-16 lg:pb-0">
        <div
          aria-hidden
          className="flex w-full flex-col items-center gap-10 [--ondo-hero-dx:0px] [--ondo-hero-dy:175px] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:[--ondo-hero-dx:260px] lg:[--ondo-hero-dy:0px] xl:gap-12"
        >
          <span className={cn(word, "ondo-hero-word-a lg:justify-self-end")}>{lead}</span>
          <div className="relative z-10 grid size-[18.75rem] shrink-0 place-items-center lg:size-[22rem] xl:size-[28.3rem]">
            {layers.map((layer, i) => (
              <div
                key={i}
                className={cn(
                  "ondo-hero-frame absolute overflow-clip [transform-origin:center]",
                  layer.size,
                  layer.radius,
                  layer.from,
                  i > 0 && "shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)]",
                )}
              >
                {frames?.[i] ?? <OndoPlaceholder tone={layer.tone} />}
              </div>
            ))}
          </div>
          <span className={cn(word, "ondo-hero-word-b lg:justify-self-start")}>{trail}</span>
        </div>
      </div>
      {hint && (
        <p aria-hidden className="ondo-hero-hint absolute inset-x-0 bottom-[9.5rem] text-center text-xs font-medium text-muted-foreground">
          {hint}
        </p>
      )}
      <p
        className={cn(
          "ondo-hero-text absolute inset-x-0 bottom-[8.75rem] mx-auto max-w-[22rem] px-gutter text-center text-base leading-[1.32] text-foreground lg:max-w-[29.5rem] lg:text-xl lg:leading-[1.32]",
          serif,
        )}
      >
        {text}
      </p>
    </section>
  );
}
