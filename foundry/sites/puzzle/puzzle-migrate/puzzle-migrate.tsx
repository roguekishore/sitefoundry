import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleButton } from "@foundry/puzzle-button";
import { PuzzleHeading } from "@foundry/puzzle-heading";
import { PuzzlePlaceholder } from "@foundry/puzzle-placeholder";

export interface PuzzleMigrateCard {
  title: string;
  points: string[];
  /** ends the card with a photo frame */
  withMedia?: boolean;
  /** the photo; empty (with withMedia) shows a placeholder */
  media?: ReactNode;
}

export interface PuzzleMigrateProps {
  /** the headline; may hold <br /> */
  title: ReactNode;
  text?: ReactNode;
  /** the first is dark with an arrow, the second outlined; icon is a small lucide icon */
  actions: { label: string; href: string; icon?: ReactNode }[];
  /** the timeline's labels (three read best); hidden on phones */
  steps?: string[];
  /** which step is current, counting from 0 */
  activeStep?: number;
  /** one card per step */
  cards: PuzzleMigrateCard[];
  className?: string;
}

/** From sign-up to results: buttons, a three-step line, three cards. */
export function PuzzleMigrate({ title, text, actions, steps, activeStep = 1, cards, className }: PuzzleMigrateProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[71rem] px-gutter pt-14 pb-11 lg:pt-14 lg:pb-14">
        <PuzzleHeading title={title} text={text} className="[&_p]:text-foreground lg:max-w-[56rem] [&_p]:max-w-[30rem]" />
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center lg:mt-6 lg:gap-2.5">
          {actions.map((a, i) => (
            <PuzzleButton key={a.label} href={a.href} variant={i === 0 ? "card" : "outline"} className="h-11 gap-2.5 text-[0.9375rem] lg:h-[3.5625rem] lg:px-8 lg:text-lg">
              {a.icon && <span className="[&_svg]:size-5">{a.icon}</span>}
              {a.label}
            </PuzzleButton>
          ))}
        </div>

        {steps && (
          <ol className="relative mx-auto mt-14 hidden max-w-[56rem] justify-between lg:flex">
            <span aria-hidden className="absolute inset-x-20 bottom-[0.3125rem] h-px bg-foreground/15" />
            {steps.map((s, i) => (
              <li key={s} className="relative flex w-40 flex-col items-center gap-6">
                <span
                  className={cn(
                    "rounded-full border bg-card px-[1.125rem] py-3 text-base/none",
                    i === activeStep ? "border-primary text-primary" : "border-transparent text-muted-foreground",
                  )}
                >
                  {s}
                </span>
                <span aria-hidden className={cn("size-3 rounded-full border", i === activeStep ? "border-highlight bg-highlight" : "border-foreground/25 bg-card")} />
              </li>
            ))}
          </ol>
        )}

        <ul className="mt-10 grid gap-3.5 lg:mt-[5.25rem] lg:grid-cols-3 lg:gap-5">
          {cards.map((c) => (
            <li key={c.title} className="flex flex-col overflow-clip rounded-lg border border-border lg:min-h-[26.5rem]">
              <div className="px-6 pt-6 pb-6 lg:px-8 lg:pt-8 lg:pb-9">
                <h3 className="font-display text-2xl/[1.3] font-normal lg:text-[1.75rem]/[1.3]">{c.title}</h3>
                <ul className="mt-4 list-disc pl-5 text-[0.9375rem]/[1.55] marker:text-foreground lg:mt-6 lg:text-[0.9375rem]/[1.6]">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              {c.withMedia && <div className="mt-auto aspect-[1.68]">{c.media ?? <PuzzlePlaceholder className="size-full" />}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
