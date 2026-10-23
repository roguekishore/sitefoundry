import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleButton } from "@foundry/puzzle-button";

export interface PuzzlePlatformCard {
  eyebrow?: string;
  /** the headline; may hold <br /> */
  title: ReactNode;
  text: string;
  /** small pills under the text */
  pills?: string[];
  cta: { label: string; href: string };
  /** mint or white */
  tone?: "mint" | "card";
}

export interface PuzzlePlatformProps {
  /** two cards */
  cards: PuzzlePlatformCard[];
  className?: string;
}

/** A mint card and a white card, side by side. */
export function PuzzlePlatform({ cards, className }: PuzzlePlatformProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-[78.5rem] gap-7 px-gutter py-10 lg:grid-cols-[1fr_1fr] lg:gap-9 lg:py-[3.375rem]">
        {cards.map((c) => (
          <article
            key={c.text}
            className={cn(
              "flex flex-col rounded-lg px-6 pt-7 pb-6 lg:min-h-[24.75rem] lg:px-8 lg:pt-10 lg:pb-8",
              c.tone === "mint" ? "bg-glow/30 text-foreground" : "bg-card text-card-foreground",
            )}
          >
            {c.eyebrow && <p className="font-mono text-sm/5 tracking-[0.06em] text-muted-foreground uppercase">{c.eyebrow}</p>}
            <h2 className="mt-4 font-display text-[1.625rem]/[1.15] font-medium lg:mt-6 lg:text-[1.75rem]/[1.3]">{c.title}</h2>
            <p className="mt-6 max-w-[29rem] text-base/[1.6] text-muted-foreground lg:mt-6 lg:text-[1.0125rem]/[1.65]">{c.text}</p>
            {c.pills && (
              <ul className="mt-4 flex flex-wrap gap-2 lg:mt-6">
                {c.pills.map((p) => (
                  <li key={p} className="rounded-full bg-muted px-2 py-2 text-sm/none text-foreground lg:px-2 lg:py-2.5">
                    {p}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-5 lg:mt-auto lg:pt-6">
              <PuzzleButton href={c.cta.href} variant="card" size="lg" arrow className="h-11 w-full text-[0.9375rem] lg:h-14 lg:w-auto lg:text-lg">
                {c.cta.label}
              </PuzzleButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
