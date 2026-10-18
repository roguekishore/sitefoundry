import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MercuryButton } from "@foundry/mercury-button";
import { MercuryHeading } from "@foundry/mercury-heading";

export interface MercuryCtaAction {
  label: string;
  href: string;
  /** shows the outward arrow */
  external?: boolean;
}

export interface MercuryCtaCard {
  /** the card's title */
  title: ReactNode;
  /** a sentence or two under it */
  text: ReactNode;
  /** the quiet pill at the bottom */
  action: MercuryCtaAction;
}

export interface MercuryCtaProps {
  /** the centred statement; pass a list of lines to choose the breaks */
  title: string | string[];
  /** the periwinkle pill */
  primary: MercuryCtaAction;
  /** the quiet pill beside it */
  secondary?: MercuryCtaAction;
  /** cards under the buttons, usually two (e.g. one per audience) */
  cards?: MercuryCtaCard[];
  className?: string;
}

/**
 * The closing call to action: a big centred statement with two pills, then a pair of dark
 * cards, each with a title, a muted sentence and a quiet pill.
 */
export function MercuryCta({ title, primary, secondary, cards, className }: MercuryCtaProps) {
  return (
    <section className={cn("py-[calc(var(--section-y)*0.6)] lg:py-[calc(var(--section-y)*0.75)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <MercuryHeading size="statement" align="center" title={title} className="mx-auto max-w-[30rem] [&>h2]:lg:text-[3.084rem]" />
        <div className="mt-6 flex flex-wrap justify-center gap-2 lg:mt-8">
          <MercuryButton href={primary.href} external={primary.external}>
            {primary.label}
          </MercuryButton>
          {secondary && (
            <MercuryButton variant="secondary" href={secondary.href} external={secondary.external}>
              {secondary.label}
            </MercuryButton>
          )}
        </div>

        {cards && cards.length > 0 && (
          <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-[4.5rem]">
            {cards.map((card, i) => (
              <li key={i} className="flex flex-col items-start rounded-xl bg-card p-4 pb-5 lg:p-8">
                <h3 className="font-display text-[1.3125rem] leading-[1.2] font-[520] text-card-foreground lg:text-[1.75rem]">{card.title}</h3>
                <p className="mt-3 text-[0.875rem] leading-[1.4] text-muted-foreground lg:mt-4 lg:text-lg lg:leading-[1.35]">{card.text}</p>
                <MercuryButton variant="secondary" href={card.action.href} external={card.action.external} className="mt-8 lg:mt-10">
                  {card.action.label}
                </MercuryButton>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
