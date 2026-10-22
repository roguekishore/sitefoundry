import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RampButton } from "@foundry/ramp-button";
import { RampHeading } from "@foundry/ramp-heading";

export interface RampPlatformCard {
  /** the title's first words, in ink */
  lead: string;
  /** the rest of the title, in grey */
  rest?: string;
  href: string;
  /** the product art under the title; empty shows a placeholder pane */
  media?: ReactNode;
}

export interface RampPlatformProps {
  /** the statement's first sentence, in ink */
  lead: string;
  /** the second sentence, in grey on its own line */
  rest?: string;
  /** the acid-lime button */
  primary?: { label: string; href: string };
  /** the grey button */
  secondary?: { label: string; href: string };
  /** the first two become the wide cards, the rest the tall ones */
  cards: RampPlatformCard[];
  className?: string;
}

function Card({ card, wide }: { card: RampPlatformCard; wide: boolean }) {
  return (
    <a
      href={card.href}
      className={cn(
        "group relative flex flex-col overflow-clip rounded-lg border border-border bg-muted",
        wide ? "aspect-[356/518] sm:aspect-[4/3]" : "aspect-[4/5]",
      )}
    >
      <div className="flex items-start justify-between gap-6 p-6 lg:p-8">
        <RampHeading as="h3" size="card" lead={card.lead} rest={card.rest} className="max-w-[18rem]" />
        <span
          aria-hidden
          className="grid size-[2.125rem] shrink-0 place-items-center rounded-[calc(var(--radius)-6px)] border border-border bg-card text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background motion-reduce:transition-none"
        >
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none" strokeWidth={1.75} />
        </span>
      </div>
      <div className="relative mx-6 mt-2 flex-1 transition-transform duration-[400ms] ease-out group-hover:-translate-y-1 motion-reduce:transition-none lg:mx-8">
        {card.media ?? (
          <div aria-hidden className="absolute inset-x-0 top-0 -bottom-px rounded-t-lg border border-b-0 border-border bg-gradient-to-b from-card to-card/40" />
        )}
      </div>
    </a>
  );
}

/** Ramp's platform overview: a statement, two buttons and a 2 + 3 bento of product cards. */
export function RampPlatform({ lead, rest, primary, secondary, cards, className }: RampPlatformProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter py-section lg:px-[calc(var(--page-gutter)*4)] lg:py-[calc(var(--section-y)*1.5)]">
        <RampHeading lead={lead} rest={rest} breakBeforeRest className="max-w-[60rem]" />
        {(primary || secondary) && (
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
            {primary && <RampButton href={primary.href}>{primary.label}</RampButton>}
            {secondary && (
              <RampButton href={secondary.href} variant="secondary">
                {secondary.label}
              </RampButton>
            )}
          </div>
        )}
        <div className="mt-10 grid gap-6 lg:mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {cards.slice(0, 2).map((c) => (
              <Card key={c.lead} card={c} wide />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.slice(2).map((c) => (
              <Card key={c.lead} card={c} wide={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
