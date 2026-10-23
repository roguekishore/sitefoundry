import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BrexHeading } from "@foundry/brex-heading";
import { BrexPlaceholder } from "@foundry/brex-placeholder";

export interface BrexProductCard {
  title: string;
  /** one or two grey lines */
  text: string;
  href: string;
  /** the illustration under the text. A placeholder when empty */
  media?: ReactNode;
}

export interface BrexProductsProps {
  title: string;
  subtitle?: string;
  /** five cards fill the row on desktop */
  cards: BrexProductCard[];
  className?: string;
}

/** Headline plus a row of product cards. */
export function BrexProducts({ title, subtitle, cards, className }: BrexProductsProps) {
  return (
    <section className={cn("bg-background px-gutter pt-16 pb-14 lg:px-[calc(var(--page-gutter)*3)] lg:pb-20", className)}>
      <BrexHeading title={title} subtitle={subtitle} />
      <ul className="mx-auto mt-12 grid max-w-page gap-4 md:grid-cols-3 lg:grid-cols-5">
        {cards.map((card) => (
          <li key={card.title} className="flex">
            <a
              href={card.href}
              className="flex min-h-[20.25rem] w-full flex-col overflow-clip rounded-xl bg-muted/60 px-8 pt-8 shadow-foreground/15 transition-shadow duration-[250ms] ease-out hover:shadow-[0_4px_16px_0] motion-reduce:transition-none"
            >
              <h3 className="font-display text-2xl/[1.8125rem] font-medium tracking-[-0.02em] text-foreground">{card.title}</h3>
              <p className="mt-3 text-base/[1.3125rem] text-muted-foreground">{card.text}</p>
              <div className="relative -mx-4 mt-6 min-h-24 flex-1">
                {card.media ?? <BrexPlaceholder tone="panel" className="absolute inset-x-0 bottom-0 top-0 rounded-t-lg" />}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
