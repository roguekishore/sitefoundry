import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CursorArrowLink } from "@foundry/cursor-arrow-link";
import { CursorMedia } from "@foundry/cursor-media";
import { CursorSectionTitle } from "@foundry/cursor-section-title";

export interface CursorFrontierCard {
  /** the card's title, in ink */
  title: string;
  /** a sentence or two in 60% ink */
  description: string;
  /** the orange link; up-right when it leaves for another page */
  link: { label: string; href: string; arrow?: "right" | "up-right" };
  /** a square image or product shot; a placeholder wash when empty */
  media?: ReactNode;
  /** accessible name of the empty placeholder */
  mediaLabel?: string;
}

export interface CursorFrontierProps {
  /** the section title */
  title: string;
  /** three cards */
  cards: CursorFrontierCard[];
  className?: string;
}

/** Section title and three text-and-square-media cards. */
export function CursorFrontier({ title, cards, className }: CursorFrontierProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter">
        <CursorSectionTitle>{title}</CursorSectionTitle>
        <ul className="grid gap-2.5 lg:grid-cols-3">
          {cards.map((c) => (
            <li key={c.title} className="rounded-lg border border-border bg-card p-4">
              <h3 className="text-[0.9375rem] leading-[1.5] lg:text-base">{c.title}</h3>
              <p className="text-[0.9375rem] leading-[1.5] text-muted-foreground lg:text-base">{c.description}</p>
              <CursorArrowLink href={c.link.href} arrow={c.link.arrow ?? "right"} className="mt-4 text-[0.9375rem] leading-6 lg:text-base">
                {c.link.label}
              </CursorArrowLink>
              <CursorMedia label={c.mediaLabel} className="mt-4.5 aspect-square rounded-lg">
                {c.media}
              </CursorMedia>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
