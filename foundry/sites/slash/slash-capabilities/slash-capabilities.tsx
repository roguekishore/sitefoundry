import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SlashFeatureCard } from "@foundry/slash-feature-card";
import { SlashHeading, type SlashHeadingPart } from "@foundry/slash-heading";

export interface SlashCapability {
  /** the white lead-in ("Open API.") */
  title: string;
  /** the grey rest of the sentence */
  body: string;
  /** a footnote mark after the lead-in */
  note?: string;
  /** the card's art; a soft wash stands in when empty */
  media?: ReactNode;
}

export interface SlashCapabilitiesProps {
  /** the heading, as runs; `{ italic: "modern" }` sets a run in italic */
  heading: SlashHeadingPart[];
  /** the grey line under it */
  sub?: string;
  /** three cards (any count works; they wrap three to a row) */
  items: SlashCapability[];
  className?: string;
}

/** A centred serif heading over three tall dark cards, each with art on top and one sentence led by a white phrase. */
export function SlashCapabilities({ heading, sub, items, className }: SlashCapabilitiesProps) {
  return (
    <section className={cn("bg-background pt-section text-foreground lg:pt-[calc(var(--section-y)*2+1.75rem)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <SlashHeading parts={heading} sub={sub} size="lg" headingClassName="max-w-[20rem] lg:max-w-[34rem]" />
        <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <SlashFeatureCard key={item.title} layout="inline" {...item} mediaHeight="19.75rem" mediaHeightSm="16rem" />
          ))}
        </div>
      </div>
    </section>
  );
}
