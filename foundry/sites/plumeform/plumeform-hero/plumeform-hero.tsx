import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformBand } from "@foundry/plumeform-band";
import { PlumeformButton } from "@foundry/plumeform-button";
import "./plumeform-hero.css";

export interface PlumeformHeroProps {
  /** the big centred headline */
  title: ReactNode;
  /** the paragraph under it */
  lead: ReactNode;
  /** the pill button */
  cta: { label: string; href: string };
  /** small label at the frame's top left, e.g. "A live quiz" */
  frameLabel?: string;
  /** small note at the frame's top right */
  frameNote?: string;
  /** what the frame shows (an embedded demo, a video, a screenshot); empty shows a paper placeholder */
  media?: ReactNode;
  /** art behind the band (the original's WebGL fluted glass); empty shows a soft glow */
  backdrop?: ReactNode;
  className?: string;
}

/**
 * Dark hero: centred extra-bold headline, lead and pill button over a glowing backdrop, then a
 * big rounded frame ringed by a spinning honey-to-mint halo. The frame starts slightly
 * scaled down and grows as the page scrolls, running over the next block's top edge.
 */
export function PlumeformHero({ title, lead, cta, frameLabel, frameNote, media, backdrop, className }: PlumeformHeroProps) {
  return (
    <PlumeformBand
      className={cn("z-10 overflow-visible pt-[calc(3.75rem+2.75rem)] lg:pt-[calc(3.75rem+4.5rem)]", className)}
      backdrop={
        <div className="plumeform-hero-aurora">
          {backdrop ?? (
            <div className="size-full bg-[radial-gradient(60%_45%_at_50%_30%,color-mix(in_oklab,var(--glow)_55%,transparent),transparent_75%),radial-gradient(35%_50%_at_90%_60%,color-mix(in_oklab,var(--glow)_30%,transparent),transparent_70%),radial-gradient(35%_50%_at_8%_70%,color-mix(in_oklab,var(--glow)_25%,transparent),transparent_70%)]" />
          )}
        </div>
      }
    >
      <div className="mx-auto max-w-page px-gutter text-center">
        <h1 className="plumeform-hero-rise-in-place mx-auto max-w-[50rem] font-display text-[3.75rem] leading-[1.06] font-extrabold tracking-[-0.03em] text-balance lg:text-[4.5rem] lg:leading-[1.15]">
          {title}
        </h1>
        <p
          className="plumeform-hero-rise-in-place mx-auto mt-7 max-w-[48rem] text-lg leading-8 text-muted-foreground lg:text-xl"
          style={{ animationDelay: "80ms" }}
        >
          {lead}
        </p>
        <div className="plumeform-hero-rise mt-9" style={{ animationDelay: "160ms" }}>
          <PlumeformButton href={cta.href} arrow className="h-10 px-6 text-[0.9375rem]">
            {cta.label}
          </PlumeformButton>
        </div>

        {/* The frame: the outer box sets the layout size, the inner one rises in on load and
            grows with the scroll. The negative bottom margin lets the band end at the frame's
            scaled-down bottom, so the frame overruns the next block as it grows. */}
        <div
          className="plumeform-hero-rise relative mx-auto mt-11 -mb-[calc(40%-7rem)] w-full max-w-[21rem] sm:max-w-[44rem] lg:-mb-[calc(9%-1.75rem)] lg:max-w-[68.75rem]"
          style={{ animationDelay: "240ms" }}
        >
          <div
            className="plumeform-hero-grow relative [--plumeform-hero-from:0.8] [--plumeform-hero-to:0.94] lg:[--plumeform-hero-from:0.84] lg:[--plumeform-hero-to:0.92]"
          >
            <span aria-hidden className="plumeform-hero-glow pointer-events-none absolute -inset-10 -z-10 rounded-full bg-glow/30 blur-3xl" />
            <div className="relative isolate overflow-clip rounded-[2.0625rem] p-[3px] shadow-[0_40px_90px_-40px_color-mix(in_oklab,var(--glow)_70%,transparent)]">
              <span
                aria-hidden
                className="plumeform-hero-halo absolute top-1/2 left-1/2 -z-10 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,var(--chart-4),var(--highlight),var(--chart-2),var(--highlight),var(--chart-4))]"
              />
              <div className="relative aspect-[338/680] overflow-clip rounded-[1.875rem] bg-foreground text-background sm:aspect-[4/3] lg:aspect-[1100/675]">
                {(frameLabel || frameNote) && (
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-3 px-5 pt-3.5 text-[0.6875rem]">
                    <span className="font-semibold">{frameLabel}</span>
                    <span className="opacity-70">{frameNote}</span>
                  </div>
                )}
                {media && <div className="size-full [&>*]:size-full [&>*]:object-cover">{media}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PlumeformBand>
  );
}
