import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MeowHeading } from "@foundry/meow-heading";

export interface MeowPlatformCard {
  /** the product's name */
  title: string;
  /** one or two lines about it */
  text: ReactNode;
  /** an image of the product; a grey panel when empty */
  media?: ReactNode;
}

export interface MeowPlatformRow {
  /** up to three cards */
  cards: MeowPlatformCard[];
  /** small print under the row */
  fineprint?: ReactNode;
}

export interface MeowPlatformProps {
  /** the section title */
  title: ReactNode;
  /** rows of three cards */
  rows: MeowPlatformRow[];
  className?: string;
}

/** A section title over rows of three product cards, each with a grey media panel. */
export function MeowPlatform({ title, rows, className }: MeowPlatformProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pb-12 lg:pb-14">
        <div className="border-t border-border pt-8 lg:pt-16">
          <MeowHeading title={title} />
        </div>
        {rows.map((row, r) => (
          <div key={r} className={cn("mt-8", r > 0 && "lg:mt-10")}>
            <ul className="grid gap-x-5 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
              {row.cards.map((card) => (
                <li key={card.title} className="flex flex-col border-border first:border-t first:pt-9 md:border-t md:pt-9">
                  <h3 className="text-base/6 font-semibold">{card.title}</h3>
                  <p className="mt-2 text-base/6 tracking-[0.005em] text-muted-foreground">{card.text}</p>
                  <div className="relative mt-5 aspect-[371/319] w-full overflow-clip rounded-lg bg-muted">{card.media}</div>
                </li>
              ))}
            </ul>
            {row.fineprint && <p className="mt-6 text-[0.8125rem]/[1.125rem] tracking-[0.01em] text-foreground">{row.fineprint}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
