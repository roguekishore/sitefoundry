import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ModerntreasuryButton } from "@foundry/moderntreasury-button";
import { ModerntreasuryMedia } from "@foundry/moderntreasury-media";
import "./moderntreasury-hero.css";

export interface ModerntreasuryHeroProps {
  /** the headline */
  title: string;
  /** the muted lead under it */
  lead: string;
  /** the solid ink button */
  primary: { label: string; href: string };
  /** the outlined button beside it */
  secondary?: { label: string; href: string };
  /** the wide diagram or video under the buttons; an empty slot when not given */
  media?: ReactNode;
  /** what the media shows, for screen readers, while the slot is empty */
  mediaLabel?: string;
  className?: string;
}

/** Modern Treasury's hero: centred headline, lead, two square buttons, a wide media strip. */
export function ModerntreasuryHero({ title, lead, primary, secondary, media, mediaLabel, className }: ModerntreasuryHeroProps) {
  return (
    <section className={cn("relative overflow-clip bg-background text-foreground", className)}>
      <div aria-hidden className="moderntreasury-hero-grid pointer-events-none absolute inset-x-0 top-0 h-[36rem] lg:h-[44rem]" />
      <div className="relative mx-auto flex max-w-page flex-col items-center px-gutter pt-14 pb-2 text-center lg:pt-[5.5rem]">
        <h1 className="max-w-[18rem] font-display text-[2.9375rem] leading-[1.06] font-normal tracking-[-0.04em] text-balance sm:max-w-none lg:text-[4.4375rem]">
          {title}
        </h1>
        <p className="mt-4 max-w-[42rem] text-lg leading-[1.5] text-muted-foreground">{lead}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <ModerntreasuryButton href={primary.href} arrow>
            {primary.label}
          </ModerntreasuryButton>
          {secondary && (
            <ModerntreasuryButton href={secondary.href} variant="outline" arrow>
              {secondary.label}
            </ModerntreasuryButton>
          )}
        </div>
        <ModerntreasuryMedia label={mediaLabel} className="mt-8 aspect-[4/3] w-full max-w-[64rem] md:aspect-[2.76/1] lg:mt-5">
          {media}
        </ModerntreasuryMedia>
      </div>
    </section>
  );
}
