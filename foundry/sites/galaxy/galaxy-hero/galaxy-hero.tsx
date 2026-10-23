import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GalaxyButton, type GalaxyTone } from "@foundry/galaxy-button";
import { GalaxyPlaceholder } from "@foundry/galaxy-placeholder";

/** A piece of a headline line: words (optionally in a signal colour) or an inline art tile. */
export type GalaxyHeroPart =
  | {
      /** the words, spaces included */
      text: string;
      /** colour these words: highlight (green), chart-1 (orange), chart-2 (blue) */
      tone?: GalaxyTone;
    }
  | {
      /** an inline square art tile about one letter-height tall */
      tile: true;
      /** the art (an <img> or small <video>); a muted tile when empty */
      media?: ReactNode;
    };

export interface GalaxyHeroAction {
  /** the button text */
  label: string;
  /** where it goes */
  href: string;
  /** the ring colour */
  tone: GalaxyTone;
}

export interface GalaxyHeroProps {
  /** the headline on desktop, one array of parts per line */
  lines: GalaxyHeroPart[][];
  /** the headline on phones (other line breaks); falls back to lines */
  mobileLines?: GalaxyHeroPart[][];
  /** the paragraph under the headline */
  lead: string;
  /** the outlined pills (two on the original) */
  actions: GalaxyHeroAction[];
  /** the full-bleed backdrop (canvas, video); a faint glow wash when empty */
  backdrop?: ReactNode;
  className?: string;
}

const tones: Record<GalaxyTone, string> = {
  highlight: "text-highlight",
  "chart-1": "text-chart-1",
  "chart-2": "text-chart-2",
};

function Headline({ lines, className }: { lines: GalaxyHeroPart[][]; className?: string }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line.map((part, j) =>
            "tile" in part ? (
              <span
                key={j}
                aria-hidden
                className="mx-[0.14em] inline-block size-[0.8em] translate-y-[0.06em] overflow-clip rounded-md align-baseline lg:size-[1em] lg:translate-y-[0.14em]"
              >
                {part.media ?? <GalaxyPlaceholder />}
              </span>
            ) : (
              <span key={j} className={part.tone && tones[part.tone]}>
                {part.text}
              </span>
            ),
          )}
        </span>
      ))}
    </span>
  );
}

export function GalaxyHero({ lines, mobileLines, lead, actions, backdrop, className }: GalaxyHeroProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background text-foreground", className)}>
      <div className="absolute inset-0 -z-10">{backdrop ?? <GalaxyPlaceholder tone="glow" />}</div>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter pt-10 pb-14 text-center lg:pt-[5.25rem] lg:pb-24">
        <h1 className="font-display text-[2.875rem] leading-none font-[560] tracking-[-0.04em] [font-stretch:var(--galaxy-stretch,100%)] lg:text-[6rem] lg:leading-[1.04]">
          <Headline lines={mobileLines ?? lines} className="lg:hidden" />
          <Headline lines={lines} className="max-lg:hidden" />
        </h1>
        <p className="mt-6 max-w-[40rem] text-base leading-6 lg:mt-8 lg:text-lg lg:leading-[1.5]">{lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:mt-12 lg:gap-6">
          {actions.map((action) => (
            <GalaxyButton key={action.label} href={action.href} variant="outline" tone={action.tone}>
              {action.label}
            </GalaxyButton>
          ))}
        </div>
      </div>
    </section>
  );
}
