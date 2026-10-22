import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BevelCard, type BevelTint } from "@foundry/bevel-card";
import { bevelLead, bevelTitle } from "@foundry/bevel-heading";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";
import "./bevel-intelligence.css";

export interface BevelPersona {
  /** the persona's name, shown in a small pill under it */
  name: ReactNode;
  /** its avatar (image or video); a glowing round placeholder when empty */
  media?: ReactNode;
}

export interface BevelIntelligenceCard {
  /** the big title (two lines) */
  title: ReactNode;
  /** the grey paragraph under it */
  text: ReactNode;
  /** the phone screenshot for this card; a phone-shaped placeholder when empty */
  media?: ReactNode;
  /** a small image floating beside the phone (a chat bubble…); a white tile when empty */
  float?: ReactNode;
  /** the glow blooming low on the right of the card */
  tint?: BevelTint;
}

export interface BevelIntelligenceProps {
  /** three personas; the one at activePersona is lit, the others dimmed */
  personas?: BevelPersona[];
  /** which persona is lit (0-based) */
  activePersona?: number;
  /** the section title; wrap the first line in a span with text-background/60 for the two-tone look */
  title: ReactNode;
  /** the line under it */
  lead?: ReactNode;
  /** the feature cards, each with its own phone screen */
  cards: BevelIntelligenceCard[];
  className?: string;
}

/**
 * A charcoal band: three glowing persona avatars (the middle one under a soft spotlight), a
 * two-tone title, then tall pale cards with a coloured bloom. On desktop one phone seems to
 * stay pinned in the middle of the window while the cards scroll past, and each card shows
 * its own screen through it; on phones each card holds its phone below the text.
 */
export function BevelIntelligence({ personas = [], activePersona = 1, title, lead, cards, className }: BevelIntelligenceProps) {
  return (
    <section className={cn("overflow-x-clip bg-foreground pt-section pb-32 text-background lg:pt-[calc(var(--section-y)*2)] lg:pb-[12.5rem]", className)}>
      {personas.length > 0 && (
        <div className="relative mx-auto flex w-max justify-center gap-6 lg:gap-[3.75rem]">
          <div aria-hidden className="pointer-events-none absolute -top-[5rem] left-1/2 h-[14rem] w-[12rem] -translate-x-1/2 blur-lg lg:-top-[10rem] lg:h-[17rem]">
            <div className="size-full bg-linear-to-b from-transparent via-glow/15 to-glow/35 [clip-path:polygon(40%_0,60%_0,100%_100%,0_100%)]" />
          </div>
          {personas.map((persona, i) => (
            <div key={i} className={cn("relative flex w-[8.75rem] flex-col items-center", i !== activePersona && "opacity-55")}>
              <div className="size-[8.25rem] overflow-clip rounded-full lg:size-[8.75rem]">
                {persona.media ?? <BevelPlaceholder tone="glow" className={cn("size-full rounded-full", i !== activePersona && "blur-[3px]")} />}
              </div>
              <span
                className={cn(
                  "mt-1 flex h-9 items-center rounded-full px-6 text-base font-semibold ring-1",
                  i === activePersona ? "bg-background/10 text-background ring-background/25" : "text-background/60 ring-background/12",
                )}
              >
                {persona.name}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mx-auto mt-14 max-w-[40rem] px-gutter text-center">
        <h2 className={cn(bevelTitle.lg, "text-balance")}>{title}</h2>
        {lead && <p className={cn(bevelLead, "mt-4 text-balance text-background/60")}>{lead}</p>}
      </div>

      <ul
        className="mx-auto mt-14 grid max-w-page gap-4 px-gutter lg:mt-20 lg:gap-8 lg:px-[calc(var(--page-gutter)*2)]"
        style={{ "--bevel-n": cards.length, "--bevel-stride": "40.75rem" } as CSSProperties}
      >
        {cards.map((card, i) => (
          <li key={i} style={{ "--bevel-i": i } as CSSProperties}>
            <BevelCard tint={card.tint ?? "lavender"} wash="bloom" className="bevel-intel-card flex h-[44rem] flex-col lg:h-[38.75rem] lg:justify-center">
              <div className="px-10 pt-10 lg:w-[42%] lg:p-0 lg:pl-20">
                <h3 className={cn(bevelTitle.lg, "max-w-[12ch]")}>{card.title}</h3>
                <p className={cn(bevelLead, "mt-4 max-w-[17rem] lg:max-w-[29rem]")}>{card.text}</p>
              </div>
              {/* desktop: a tall track spanning the whole list (plus a screen either side), aligned the same in every card,
                  so the sticky phone sits at the same spot in the window in all of them and each card clips its own */}
              <div className="relative mx-auto mt-12 w-[14.75rem] lg:absolute lg:top-[calc(-1*var(--bevel-i)*var(--bevel-stride)-100svh)] lg:left-[62.7%] lg:mt-0 lg:h-[calc(var(--bevel-n)*var(--bevel-stride)+200svh)] lg:w-[21.25rem]">
                <div className="relative aspect-[1/2] lg:sticky lg:top-[calc(50svh-20rem)]">
                  {card.media ?? <BevelPlaceholder tone="phone" className="size-full rounded-[3rem]" />}
                  <div className="bevel-intel-float absolute top-[9%] -right-[14%] w-[72%] lg:-right-[19%] lg:w-[84%]">
                    {card.float ?? <BevelPlaceholder tone="tile" className="h-12 w-full rounded-2xl lg:h-16" />}
                  </div>
                </div>
              </div>
            </BevelCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
