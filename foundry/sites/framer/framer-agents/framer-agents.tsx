import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FramerArrowLink } from "@foundry/framer-arrow-link";
import { FramerButton } from "@foundry/framer-button";
import { FramerSectionHead } from "@foundry/framer-heading";
import { FramerPlaceholder } from "@foundry/framer-placeholder";
import "./framer-agents.css";

export interface FramerAgentCard {
  /** short white title under the media */
  title: string;
  /** two or three lines of grey copy */
  body: string;
  /** the arrow link at the card's bottom right (under the copy on phones) */
  link: { label: string; href: string };
  /** the card's media (a screenshot or film); empty shows a placeholder well */
  media?: ReactNode;
  /** screen-reader label for the placeholder */
  mediaLabel?: string;
}

export interface FramerAgentsProps {
  /** section title; "\n" breaks on desktop only */
  title: string;
  /** the small dark button at the head's bottom right */
  action: { label: string; href: string };
  /** the tall cards beside the pinned panel (three on the original) */
  cards: FramerAgentCard[];
  /** the narrow panel pinned beside the cards (desktop only); empty shows a placeholder */
  aside?: ReactNode;
  /** screen-reader label for the side panel placeholder */
  asideLabel?: string;
  /** the wider closing card and the panel beside it (desktop only) */
  closing?: { card: FramerAgentCard; panel?: ReactNode; panelLabel?: string };
  className?: string;
}

function Card({ card, wide, className }: { card: FramerAgentCard; wide?: boolean; className?: string }) {
  return (
    <article
      className={cn(
        "framer-agents-card flex flex-col rounded-[calc(var(--radius)*2.5)] border border-border bg-background p-[5px] lg:p-2.5",
        className,
      )}
    >
      <div className="aspect-[1.56] overflow-clip rounded-[calc(var(--radius)+2px)] lg:aspect-auto lg:h-[29.8rem] lg:rounded-2xl">
        {card.media ?? <FramerPlaceholder label={card.mediaLabel} />}
      </div>
      <div className="flex flex-col items-start gap-4 px-5 pt-5 pb-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:pt-6">
        <div>
          <h3 className="text-lg leading-[1.35] tracking-[-0.01em] text-foreground">{card.title}</h3>
          <p className={cn("text-lg leading-[1.35] tracking-[-0.01em] text-muted-foreground", wide ? "max-w-[39rem]" : "max-w-[31rem]")}>{card.body}</p>
        </div>
        <FramerArrowLink href={card.link.href} label={card.link.label} className="shrink-0" />
      </div>
    </article>
  );
}

/** Tall cards scrolling past a pinned side panel. */
export function FramerAgents({ title, action, cards, aside, asideLabel, closing, className }: FramerAgentsProps) {
  return (
    <section className={cn("bg-background px-gutter py-15 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <FramerSectionHead
          title={title}
          actions={
            <FramerButton href={action.href} variant="secondary">
              {action.label}
            </FramerButton>
          }
        />

        <div className="mt-10 lg:mt-11 lg:grid lg:grid-cols-[1fr_16.25rem] lg:gap-2.5">
          <div className="flex flex-col gap-10 lg:gap-15">
            {cards.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-30 h-[40rem] overflow-clip rounded-[calc(var(--radius)*2.5)] border border-border">
              {aside ?? <FramerPlaceholder tone="panel" label={asideLabel} />}
            </div>
          </div>
        </div>

        {closing && (
          <div className="mt-10 lg:mt-15 lg:grid lg:grid-cols-[75fr_44fr] lg:gap-2.5">
            <Card card={closing.card} wide />
            <div className="framer-agents-card hidden overflow-clip rounded-[calc(var(--radius)*2.5)] border border-border lg:block">
              {closing.panel ?? <FramerPlaceholder tone="panel" label={closing.panelLabel} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
