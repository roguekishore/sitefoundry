import { cn } from "@foundry/foundry-utils";
import { PuzzleButton } from "@foundry/puzzle-button";

export interface PuzzleChoice {
  /** the first-person need, quotes included */
  quote: string;
  /** the word before the answer, e.g. "Best fit:" */
  lead: string;
  /** the answer, set in bold */
  answer: string;
}

export interface PuzzleChooserProps {
  eyebrow?: string;
  title: string;
  /** the outline button at the right */
  cta?: { label: string; href: string };
  /** four numbered choices */
  choices: PuzzleChoice[];
  className?: string;
}

/** "Which plan is yours?" — four numbered needs, each with its answer. */
export function PuzzleChooser({ eyebrow, title, cta, choices, className }: PuzzleChooserProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[78.5rem] px-gutter py-10 lg:py-[3.375rem]">
        <div className="rounded-[calc(var(--radius)*1.25)] bg-card px-7 pt-7 pb-7 text-card-foreground lg:rounded-2xl lg:px-9 lg:pt-9 lg:pb-9">
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
            <div>
              {eyebrow && <p className="font-mono text-sm/5 tracking-[0.06em] text-muted-foreground uppercase">{eyebrow}</p>}
              <h2 className="mt-2 font-display text-[1.75rem]/[1.2] font-medium text-balance lg:text-4xl/[1.2]">{title}</h2>
            </div>
            {cta && (
              <PuzzleButton href={cta.href} variant="outline" className="h-11 w-full text-[0.9375rem] lg:h-14 lg:w-auto lg:px-8 lg:text-lg">
                {cta.label}
              </PuzzleButton>
            )}
          </div>
          <ol className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:mt-3 lg:grid-cols-4 lg:gap-[1.125rem]">
            {choices.map((c, i) => (
              <li
                key={c.quote}
                className="flex flex-col rounded-lg border border-foreground/20 bg-card px-4 pt-4 pb-4 shadow-[0_2px_20px_0_color-mix(in_oklab,var(--highlight)_14%,transparent)] lg:px-5 lg:pt-5 lg:pb-6"
              >
                <span className="font-mono text-sm/5 text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-lg/[1.5] font-medium lg:mt-4">{c.quote}</p>
                <p className="mt-3 text-[0.9375rem]/[1.55] lg:mt-auto lg:pt-6">
                  {c.lead} <strong className="font-semibold">{c.answer}</strong>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
