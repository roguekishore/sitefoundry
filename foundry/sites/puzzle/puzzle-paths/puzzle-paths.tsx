import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleButton } from "@foundry/puzzle-button";
import { PuzzleHeading } from "@foundry/puzzle-heading";

export interface PuzzlePath {
  /** the small pill at the top */
  tag: string;
  title: string;
  text: string;
  /** the short list */
  points: string[];
  /** the price line in the footer; may hold <strong> */
  price: ReactNode;
  /** the button in the footer */
  cta: { label: string; href: string };
  /** light: white card with ticks · brand: deep violet card with bullets */
  tone?: "light" | "brand";
}

export interface PuzzlePathsProps {
  eyebrow?: string;
  /** the headline; may hold <br /> */
  title: ReactNode;
  /** two cards */
  paths: PuzzlePath[];
  className?: string;
}

/** Two ways to buy, side by side. */
export function PuzzlePaths({ eyebrow, title, paths, className }: PuzzlePathsProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[78.5rem] px-gutter pb-10 lg:pb-14">
        <PuzzleHeading eyebrow={eyebrow} eyebrowSize="lg" title={title} className="max-w-[18rem] sm:max-w-none" />
        <div className="mt-8 grid gap-3.5 lg:mt-10 lg:grid-cols-2 lg:gap-[1.125rem]">
          {paths.map((p) => {
            const brand = p.tone === "brand";
            return (
              <article
                key={p.title}
                className={cn(
                  "flex flex-col rounded-lg px-6 pt-6 pb-6 lg:px-8 lg:pt-8 lg:pb-8",
                  brand ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground",
                )}
              >
                <p
                  className={cn(
                    "self-start rounded-full px-2 py-2 text-xs/none lg:px-2.5 lg:py-3 lg:text-[0.8125rem]/none",
                    brand ? "bg-accent text-accent-foreground" : "bg-glow/55 text-foreground",
                  )}
                >
                  {p.tag}
                </p>
                <h3 className="mt-4 font-display text-[1.5rem]/[1.25] font-medium lg:mt-5 lg:text-[1.75rem]/[1.3]">{p.title}</h3>
                <p className={cn("mt-3 text-base/[1.65] lg:mt-4", brand ? "text-primary-foreground/70" : "text-card-foreground")}>{p.text}</p>
                <ul className="mt-3 flex flex-col gap-2.5 text-base/[1.55] lg:mt-4 lg:gap-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      {brand ? (
                        <span aria-hidden className="size-1 shrink-0 rounded-full bg-current" />
                      ) : (
                        <Check aria-hidden className="size-3.5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                      )}
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col items-center gap-4 text-center lg:mt-auto lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:pt-10 lg:text-left">
                  <p className={cn("text-sm/[1.75] lg:text-[0.9375rem]/[1.75]", brand ? "text-primary-foreground/80 [&_strong]:text-primary-foreground" : "text-muted-foreground [&_strong]:text-foreground/80")}>
                    {p.price}
                  </p>
                  <PuzzleButton
                    href={p.cta.href}
                    variant={brand ? "light" : "card"}
                    size="lg"
                    arrow
                    className="h-11 w-full text-[0.9375rem] lg:h-14 lg:w-auto lg:text-lg"
                  >
                    {p.cta.label}
                  </PuzzleButton>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
