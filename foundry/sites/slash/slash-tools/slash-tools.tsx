import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SlashFeatureCard } from "@foundry/slash-feature-card";
import { SlashHeading, type SlashHeadingPart } from "@foundry/slash-heading";

export interface SlashTool {
  /** the white lead-in ("Sub-accounts.") */
  title: string;
  /** the grey rest of the sentence */
  body: string;
  /** the card's art; a soft wash stands in when empty */
  media?: ReactNode;
  /** share of the row's width on desktop (cards in a row split it by weight; default 1) */
  weight?: number;
}

export interface SlashToolsRow {
  /** the cards in this row */
  cards: SlashTool[];
  /** height of the art area in this row on desktop (CSS length) */
  mediaHeight?: string;
}

export interface SlashToolsProps {
  /** the heading, as runs; `{ italic: "clever" }` sets a run in italic */
  heading: SlashHeadingPart[];
  /** the grey line under it */
  sub?: string;
  /** rows of cards, each split by weight on desktop */
  rows: SlashToolsRow[];
  className?: string;
}

/** A big centred serif heading over rows of dark tool cards of uneven widths. */
export function SlashTools({ heading, sub, rows, className }: SlashToolsProps) {
  return (
    <section className={cn("bg-background pt-section text-foreground lg:pt-[calc(var(--section-y)*2)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <SlashHeading parts={heading} sub={sub} size="xl" headingClassName="max-w-[18rem] lg:max-w-[36rem]" />
        <div className="mt-12 flex flex-col gap-4 lg:mt-12 lg:gap-3">
          {rows.map((row, r) => (
            <div key={r} className="flex flex-col gap-4 lg:flex-row lg:gap-3">
              {row.cards.map((card) => (
                <SlashFeatureCard
                  key={card.title}
                  layout="inline"
                  title={card.title}
                  body={card.body}
                  media={card.media}
                  mediaHeight={row.mediaHeight ?? "16.5rem"}
                  mediaHeightSm="15rem"
                  style={{ ["--slash-tools-weight" as string]: card.weight ?? 1 }}
                  className="lg:min-w-0 lg:basis-0 lg:grow-(--slash-tools-weight)"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
