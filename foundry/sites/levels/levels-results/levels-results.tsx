import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LevelsHeading } from "@foundry/levels-heading";
import { LevelsLink } from "@foundry/levels-link";

export interface LevelsResultsStat {
  /** the big number, e.g. "78%" */
  value: string;
  /** the white label under it */
  label: ReactNode;
  /** small text under the label */
  body?: ReactNode;
}

export interface LevelsResultsProps {
  /** small tracked capitals above the title */
  eyebrow?: string;
  /** the section title */
  title: ReactNode;
  /** grey text under the title */
  lead?: ReactNode;
  /** the bordered card beside the heading */
  evidence?: {
    /** tracked capitals at the top */
    eyebrow?: string;
    /** the paragraph */
    text: ReactNode;
    /** green arrow links */
    links?: { label: string; href: string }[];
  };
  /** the dark stat cards (three on the original) */
  stats: LevelsResultsStat[];
  /** grey fine print under the cards */
  footnote?: ReactNode;
  /** id for in-page links */
  id?: string;
  className?: string;
}

/** Heading and evidence card over a row of dark stat cards. */
export function LevelsResults({ eyebrow, title, lead, evidence, stats, footnote, id, className }: LevelsResultsProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter py-[calc(var(--section-y)*0.75)] lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <div className="grid items-end gap-y-12 lg:grid-cols-[minmax(0,29.5rem)_minmax(0,1fr)] lg:gap-x-11">
          <LevelsHeading eyebrow={eyebrow} title={title} lead={lead} className="[&>p:last-child]:lg:text-lg" />
          {evidence ? (
            <div className="rounded-lg border border-border bg-secondary px-8 py-10">
              {evidence.eyebrow ? (
                <p className="text-sm leading-5 font-semibold tracking-[0.16em] text-muted-foreground uppercase">{evidence.eyebrow}</p>
              ) : null}
              <p className="mt-5 text-lg leading-8 text-secondary-foreground">{evidence.text}</p>
              {evidence.links?.length ? (
                <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {evidence.links.map((link) => (
                    <LevelsLink key={link.label} href={link.href}>
                      {link.label}
                    </LevelsLink>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <li key={i} className="dark rounded-lg bg-background p-8 text-foreground">
              <p className="font-display text-[4rem] leading-none font-normal tracking-[-0.05em] text-glow lg:text-[4.75rem]">
                {stat.value}
              </p>
              <p className="mt-9 font-display text-[1.375rem] leading-8 font-[550] tracking-[-0.02em]">{stat.label}</p>
              {stat.body ? <p className="mt-4 max-w-[20rem] text-sm leading-7 text-foreground/76">{stat.body}</p> : null}
            </li>
          ))}
        </ul>

        {footnote ? <p className="mt-8 text-sm leading-6 text-muted-foreground">{footnote}</p> : null}
      </div>
    </section>
  );
}
