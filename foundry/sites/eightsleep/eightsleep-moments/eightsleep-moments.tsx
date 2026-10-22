import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepButton } from "@foundry/eightsleep-button";
import { EightsleepExpandCards, type EightsleepExpandCard } from "@foundry/eightsleep-expand-cards";

export interface EightsleepMomentsProps {
  /** usually three moments */
  items: EightsleepExpandCard[];
  /** the black button under the cards */
  cta?: { label: ReactNode; href: string };
  /** screen-reader labels for the card toggles */
  openLabel?: string;
  closeLabel?: string;
  className?: string;
}

export function EightsleepMoments({ items, cta, openLabel, closeLabel, className }: EightsleepMomentsProps) {
  return (
    <section className={cn("bg-muted pt-10 pb-section text-foreground lg:pt-16 lg:pb-[110px]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-16">
        <EightsleepExpandCards items={items} phoneCaption="over" radius="xl" openLabel={openLabel} closeLabel={closeLabel} />
        {cta && (
          <div className="mt-10 flex justify-center lg:mt-12">
            <EightsleepButton href={cta.href}>{cta.label}</EightsleepButton>
          </div>
        )}
      </div>
    </section>
  );
}
