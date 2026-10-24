import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ImpulsespaceButton } from "@foundry/impulsespace-button";
import { ImpulsespacePlaceholder } from "@foundry/impulsespace-placeholder";

export interface ImpulsespaceCareersCard {
  /** the card's title, over the photo */
  title: string;
  /** a short mono label under it */
  label: string;
  /** where the card goes */
  href: string;
  /** the photo; empty: a placeholder */
  media?: ReactNode;
  /** what the photo shows, for screen readers while it is a placeholder */
  mediaLabel?: string;
}

export interface ImpulsespaceCareersProps {
  /** the section heading */
  title: string;
  /** the pill beside the heading */
  cta?: { label: string; href: string };
  /** two photo cards */
  cards: ImpulsespaceCareersCard[];
  /** anchor id for the section */
  id?: string;
  className?: string;
}

/** Heading with a pill, then two big photo cards with captions over a dark shade. */
export function ImpulsespaceCareers({ title, cta, cards, id, className }: ImpulsespaceCareersProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter pt-section pb-12 text-foreground", className)}>
      <div className="flex items-end justify-between gap-6">
        <h2 className="font-display text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.02em]">{title}</h2>
        {cta && <ImpulsespaceButton href={cta.href}>{cta.label}</ImpulsespaceButton>}
      </div>
      <ul className="mt-12 grid gap-8 lg:grid-cols-2">
        {cards.map((card) => (
          <li key={card.title}>
            <a href={card.href} className="group relative isolate block aspect-[0.68] overflow-clip rounded-lg lg:aspect-square">
              <ImpulsespacePlaceholder
                media={card.media}
                label={card.mediaLabel}
                className="dark absolute inset-0 -z-10 scale-[1.04] transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-100 motion-reduce:transition-none"
              />
              <span className="dark absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-background/80 to-transparent p-6 pt-24 text-foreground">
                <span className="grid gap-2">
                  <span className="text-xl leading-[1.2] font-semibold">{card.title}</span>
                  <span className="font-mono text-sm leading-[1.5] tracking-[0.08em] text-muted-foreground uppercase">{card.label}</span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="size-6 shrink-0 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  strokeWidth={1.5}
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
