import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MeowButton } from "@foundry/meow-button";
import { MeowHeading } from "@foundry/meow-heading";

export interface MeowFeatureRow {
  /** the row's title */
  title: string;
  /** the paragraph under it */
  text: ReactNode;
  /** short bullet lines */
  points?: string[];
  /** the arrow link at the end */
  link?: { label: string; href: string };
  /** an image of the feature; a grey panel when empty */
  media?: ReactNode;
}

export interface MeowFeatureRowsProps {
  /** the section title */
  title: ReactNode;
  /** small print under the title */
  fineprint?: ReactNode;
  /** the rows; text and panel swap sides every row */
  rows: MeowFeatureRow[];
  className?: string;
}

/** Alternating text-and-panel rows under a section title. */
export function MeowFeatureRows({ title, fineprint, rows, className }: MeowFeatureRowsProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pb-12 lg:pb-16">
        <MeowHeading title={title} fineprint={fineprint} />
        <div className="mt-8 flex flex-col gap-y-8 lg:mt-16 lg:gap-y-16">
          {rows.map((row, i) => (
            <article key={row.title} className="grid items-center gap-x-5 gap-y-8 lg:grid-cols-2">
              <div className={cn("relative aspect-[350/380] w-full lg:aspect-[566/380] overflow-clip rounded-lg bg-muted", i % 2 === 0 && "lg:order-2")}>{row.media}</div>
              <div className="min-w-0 lg:px-11">
                <h3 className="font-display text-lg/6 font-semibold tracking-[-0.01em] lg:text-[1.75rem]/9 lg:tracking-[-0.02em]">{row.title}</h3>
                <p className="mt-6 max-w-[29rem] text-base/6 text-muted-foreground">{row.text}</p>
                {row.points?.length ? (
                  <ul className="mt-6 flex flex-col gap-3 lg:gap-3">
                    {row.points.map((pt) => (
                      <li key={pt} className="flex gap-4 text-base/6 text-muted-foreground">
                        <span aria-hidden className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-foreground" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {row.link && (
                  <MeowButton variant="link" arrow href={row.link.href} className="mt-8 text-[0.9375rem]">
                    {row.link.label}
                  </MeowButton>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
