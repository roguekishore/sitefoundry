import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepButton } from "@foundry/eightsleep-button";
import { EightsleepExpandCards, type EightsleepExpandCard } from "@foundry/eightsleep-expand-cards";
import { EightsleepHeading } from "@foundry/eightsleep-heading";

export interface EightsleepSystemProps {
  /** the section title */
  title: ReactNode;
  /** an optional line under it */
  sub?: ReactNode;
  /** the parts, usually three */
  items: EightsleepExpandCard[];
  /** the black button under the cards */
  cta?: { label: ReactNode; href: string };
  /** screen-reader labels for the card toggles */
  openLabel?: string;
  closeLabel?: string;
  className?: string;
}

export function EightsleepSystem({ title, sub, items, cta, openLabel, closeLabel, className }: EightsleepSystemProps) {
  return (
    <section className={cn("bg-muted py-section text-foreground lg:py-[100px] lg:pb-[120px]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-16">
        <EightsleepHeading title={title} sub={sub} />
        <EightsleepExpandCards items={items} phoneCaption="below" radius="2xl" openLabel={openLabel} closeLabel={closeLabel} className="mt-12 lg:mt-14" />
        {cta && (
          <div className="mt-14 flex justify-center lg:mt-12">
            <EightsleepButton href={cta.href}>{cta.label}</EightsleepButton>
          </div>
        )}
      </div>
    </section>
  );
}
