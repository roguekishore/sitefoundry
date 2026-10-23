import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LevelsButton } from "@foundry/levels-button";
import { LevelsHeading } from "@foundry/levels-heading";
import { LevelsIconTile } from "@foundry/levels-icon-tile";
import { LevelsLink } from "@foundry/levels-link";
import { LevelsPlaceholder, type LevelsPlaceholderProps } from "@foundry/levels-placeholder";

export interface LevelsSystemRow {
  /** icon in the pale green tile, e.g. a lucide icon element */
  icon: ReactNode;
  /** small tracked capitals above the title */
  eyebrow: string;
  /** the row title */
  title: ReactNode;
  /** grey paragraph under the title */
  lead: ReactNode;
  /** the dotted list, two columns from tablet up */
  points: ReactNode[];
  /** the image or screens beside the text; fills a 1.25 frame. Empty: a placeholder */
  media?: ReactNode;
  /** placeholder tone when media is empty (film for app screens, photo for photos) */
  mediaTone?: LevelsPlaceholderProps["tone"];
  /** screen-reader label for the placeholder */
  mediaLabel?: string;
}

export interface LevelsSystemProps {
  /** small tracked capitals above the heading */
  eyebrow?: string;
  /** the section title */
  title: ReactNode;
  /** grey text under the title */
  lead?: ReactNode;
  /** the feature rows (three on the original) */
  rows: LevelsSystemRow[];
  /** the pale green strip under the rows */
  privacy?: {
    /** the one-line promise beside the shield */
    statement: ReactNode;
    /** the tracked tag chips */
    tags: string[];
    /** the green link on the right */
    link?: { label: string; href: string };
  };
  /** the centred ink button at the end */
  action?: { label: string; href: string };
  /** id for in-page links */
  id?: string;
  className?: string;
}

/** Heading, alternating text/media rows, privacy strip and a closing button. */
export function LevelsSystem({ eyebrow, title, lead, rows, privacy, action, id, className }: LevelsSystemProps) {
  return (
    <section id={id} className={cn("bg-secondary px-gutter py-[calc(var(--section-y)*0.75)] lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <LevelsHeading eyebrow={eyebrow} title={title} lead={lead} className="max-w-[48rem]" />

        <div className="mt-3 lg:mt-8">
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid items-center gap-y-10 border-border py-12 not-first:border-t last:pb-0 lg:grid-cols-2 lg:gap-x-10"
            >
              <div>
                <LevelsIconTile>{row.icon}</LevelsIconTile>
                <LevelsHeading as="h3" size="row" eyebrow={row.eyebrow} title={row.title} className="mt-6" />
                <p className="mt-5 max-w-[37rem] text-base leading-8 text-pretty text-muted-foreground lg:mt-6 lg:text-lg lg:leading-8">
                  {row.lead}
                </p>
                <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:mt-12">
                  {row.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-6 text-secondary-foreground">
                      <span aria-hidden className="mt-[0.5625rem] size-1.5 shrink-0 rounded-full bg-highlight" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={cn(
                  "aspect-[1.25] overflow-clip rounded-lg [&>*]:size-full [&>img]:object-cover",
                  i % 2 === 1 && "lg:order-first",
                )}
              >
                {row.media ?? <LevelsPlaceholder tone={row.mediaTone ?? "film"} label={row.mediaLabel} />}
              </div>
            </div>
          ))}
        </div>

        {privacy ? (
          <div className="mt-7 flex flex-col gap-6 rounded-lg border border-foreground/10 bg-accent p-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-7">
            <div>
              <p className="flex gap-3 text-sm leading-7 text-secondary-foreground">
                <ShieldCheck aria-hidden className="mt-1 size-5 shrink-0 text-highlight" strokeWidth={1.75} />
                <span>{privacy.statement}</span>
              </p>
              <ul className="mt-4 flex flex-col items-start gap-2 pl-8 sm:flex-row sm:flex-wrap">
                {privacy.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-foreground/12 px-3 py-1 text-xs leading-5 font-semibold tracking-[0.16em] text-muted-foreground uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            {privacy.link ? (
              <LevelsLink href={privacy.link.href} size="sm" className="pl-6 lg:pl-0 lg:pr-2">
                {privacy.link.label}
              </LevelsLink>
            ) : null}
          </div>
        ) : null}

        {action ? (
          <div className="mt-14 flex justify-center">
            <LevelsButton href={action.href} size="lg">
              {action.label}
            </LevelsButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}
