import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { OnEnergyBlurText } from "@foundry/on-energy-blur-text";
import { OnEnergyEyebrow } from "@foundry/on-energy-eyebrow";
import { OnEnergyReveal } from "@foundry/on-energy-reveal";

export interface OnEnergyExpertiseCard {
  /** the card's title */
  title: string;
  /** one short line under it */
  text: string;
  href: string;
  /** a square image; a placeholder square when empty */
  media?: ReactNode;
}

export interface OnEnergyExpertiseProps {
  /** the small mono label over the heading (scrambles in) */
  eyebrow?: string;
  /** the heading on the left; a "\n" breaks the line. Its letters blur in */
  title: string;
  /** the lead paragraph at the top of the right half */
  lead?: string;
  /** link cards stacked under the lead */
  cards: OnEnergyExpertiseCard[];
  /** screen-reader label for each card's arrow tile */
  arrowLabel?: string;
  className?: string;
}

/**
 * A dark-grey band: a mono eyebrow and a light two-line heading on the left; on the right a
 * lead paragraph and charcoal link cards (square image, title, line of copy, a small yellow
 * arrow tile). A card turns yellow on hover, its arrow tile black.
 */
export function OnEnergyExpertise({ eyebrow, title, lead, cards, arrowLabel = "Open", className }: OnEnergyExpertiseProps) {
  return (
    <section className={cn("bg-card text-card-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-y-16 px-gutter pt-[7.75rem] pb-32 lg:grid-cols-2 lg:gap-x-[1.6vw] lg:pt-[7.5rem] lg:pb-36">
        <div>
          {eyebrow && <OnEnergyEyebrow label={eyebrow} className="text-card-foreground/75" />}
          <OnEnergyBlurText
            text={title}
            className="mt-3 font-display text-[1.82rem]/[1.142] font-light tracking-[-0.04em] lg:mt-4 lg:text-4xl/[1.167]"
          />
        </div>

        <div className="lg:pt-6">
          {lead && (
            <OnEnergyReveal as="p" className="text-xl/[1.25] font-light tracking-[-0.02em] text-card-foreground/75 lg:text-2xl/[1.167]">
              {lead}
            </OnEnergyReveal>
          )}
          <ul className="mt-16 flex flex-col gap-2">
            {cards.map((card, i) => (
              <OnEnergyReveal as="li" key={card.title} rise={40} delay={i * 4}>
                <a
                  href={card.href}
                  className="group/card relative flex gap-3 rounded-[1rem] bg-secondary p-1.5 text-secondary-foreground transition-colors duration-200 hover:bg-primary motion-reduce:transition-none lg:gap-8 lg:p-4"
                >
                  <span className="size-[4.8rem] shrink-0 overflow-clip rounded-[0.5625rem] lg:size-[11.875rem]">
                    {card.media ?? <span className="block size-full bg-foreground/15" />}
                  </span>
                  <span className="flex flex-col gap-1 py-2 pr-10 lg:gap-4 lg:py-4">
                    <span className="text-[0.91rem]/[1.375] font-normal tracking-[-0.02em] transition-colors duration-200 group-hover/card:text-primary-foreground lg:text-lg/[1.25]">{card.title}</span>
                    <span className="text-[0.91rem]/[1.375] font-light tracking-[-0.02em] text-secondary-foreground/70 transition-colors duration-200 group-hover/card:text-primary-foreground/70 lg:text-lg/[1.33]">
                      {card.text}
                    </span>
                  </span>
                  <span
                    aria-label={arrowLabel}
                    className="absolute right-1.5 bottom-1.5 flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors duration-200 group-hover/card:bg-primary-foreground group-hover/card:text-primary lg:right-4 lg:bottom-4 [&_svg]:size-4 [&_svg]:[stroke-dasharray:0.01_2.5] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-width:2]"
                  >
                    <ArrowUpRight aria-hidden />
                  </span>
                </a>
              </OnEnergyReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
