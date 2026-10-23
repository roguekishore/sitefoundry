import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LevelsHeading } from "@foundry/levels-heading";
import { LevelsIconTile } from "@foundry/levels-icon-tile";
import { LevelsLink } from "@foundry/levels-link";
import { LevelsPlaceholder } from "@foundry/levels-placeholder";

export interface LevelsPatternsCard {
  /** the card title */
  title: ReactNode;
  /** grey paragraph */
  body: ReactNode;
  /** green-dotted points */
  points: ReactNode[];
  /** media on top; fills a 4:3 frame. Empty: a placeholder */
  media?: ReactNode;
  /** screen-reader label for the placeholder */
  mediaLabel?: string;
}

export interface LevelsPatternsFeature {
  /** icon in the pale green tile, e.g. a lucide icon element */
  icon: ReactNode;
  /** short title */
  title: ReactNode;
  /** one or two lines of grey text */
  body: ReactNode;
}

export interface LevelsPatternsProps {
  /** small tracked capitals above the title */
  eyebrow?: string;
  /** the section title */
  title: ReactNode;
  /** grey text under the title */
  lead?: ReactNode;
  /** the tall cards with media (three on the original) */
  cards: LevelsPatternsCard[];
  /** the small icon cards (six on the original) */
  features?: LevelsPatternsFeature[];
  /** the centred green link at the end */
  link?: { label: string; href: string };
  /** id for in-page links */
  id?: string;
  className?: string;
}

/** Heading, three media cards, six icon cards and a link. */
export function LevelsPatterns({ eyebrow, title, lead, cards, features, link, id, className }: LevelsPatternsProps) {
  return (
    <section id={id} className={cn("bg-muted px-gutter py-[calc(var(--section-y)*0.75)] lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <LevelsHeading eyebrow={eyebrow} title={title} lead={lead} />

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {cards.map((card, i) => (
            <li key={i} className="group overflow-clip rounded-lg border border-border bg-card">
              <div className="aspect-[1.33] overflow-clip">
                <div className="size-full transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02] motion-reduce:transition-none [&>*]:size-full [&>img]:object-cover">
                  {card.media ?? <LevelsPlaceholder tone="film" label={card.mediaLabel} />}
                </div>
              </div>
              <div className="px-8 pt-8 pb-9">
                <h3 className="font-display text-[1.75rem] leading-[1.55] font-[550] tracking-[-0.03em] text-card-foreground">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{card.body}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {card.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-6 text-secondary-foreground">
                      <span aria-hidden className="mt-[0.5625rem] size-1.5 shrink-0 rounded-full bg-highlight" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {features?.length ? (
          <ul className="mt-6 grid gap-[1.125rem] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <li key={i} className="rounded-lg border border-border bg-card p-6">
                <LevelsIconTile>{feature.icon}</LevelsIconTile>
                <h3 className="mt-7 font-display text-xl leading-7 font-[550] tracking-[-0.02em] text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{feature.body}</p>
              </li>
            ))}
          </ul>
        ) : null}

        {link ? (
          <div className="mt-12 flex justify-center">
            <LevelsLink href={link.href}>{link.label}</LevelsLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
