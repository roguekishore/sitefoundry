import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AspensearchButton } from "@foundry/aspensearch-button";
import { AspensearchRevealText } from "@foundry/aspensearch-reveal-text";

export interface AspensearchServicesLine {
  /** one line of the shouted heading */
  text: string;
  /** pushes this line to the right edge (the original staggers its middle line) */
  alignRight?: boolean;
}

export interface AspensearchService {
  /** the small mono index, e.g. "01" */
  index: string;
  /** the practice's name; put a line break in with "\n" */
  title: string;
  /** a short paragraph about it */
  text: string;
  /** the mono capital list with mint bullets */
  points: string[];
  /** the line drawing in the 176px square; empty: a dashed placeholder square */
  media?: ReactNode;
}

export interface AspensearchServicesProps {
  /** the shouted all-caps heading, one entry per line */
  heading: AspensearchServicesLine[];
  /** the paragraph under the heading */
  intro: string;
  /** the ink button under the paragraph */
  action: { label: string; href: string };
  /** the practices, one dark row each */
  services: AspensearchService[];
  className?: string;
}

/**
 * Practice areas. Phones: the shouted heading, an indented paragraph and a button, then dark
 * rows (index and a square line-art slot, title, paragraph, mono list with mint bullets).
 * Desktop: a two-row grey tile holds the heading on the left half (middle line pushed right)
 * with the paragraph and button in its bottom-right corner; the right half is a dark column
 * of rows. Heading lines rise far out of their clips as they enter view, copy line by line.
 */
export function AspensearchServices({ heading, intro, action, services, className }: AspensearchServicesProps) {
  return (
    <section className={cn("grid border-t border-border bg-background font-sans tracking-[-0.04em] text-foreground lg:grid-cols-2 lg:items-start", className)}>
      <div className="flex flex-col px-3 pt-5 pb-5 lg:h-[58.3vw] lg:bg-muted lg:px-5 lg:pt-4">
        {heading.map((line, i) => (
          <AspensearchRevealText
            key={i}
            as="p"
            variant="display"
            delay={i * 5}
            text={line.text}
            className={cn("font-display text-[13.8vw]/[0.8] whitespace-nowrap uppercase lg:text-[8.6vw]/[0.77]", line.alignRight && "text-right")}
          />
        ))}
        <div className="mt-14 flex flex-col pl-3 lg:mt-auto lg:pl-[50%]">
          <AspensearchRevealText text={intro} className="text-base/[1.3] lg:pr-2" />
          <AspensearchButton href={action.href} className="mt-48 self-end lg:mt-16 lg:self-start">
            {action.label}
          </AspensearchButton>
        </div>
      </div>

      <div className="bg-foreground text-background">
        {services.map((s, i) => (
          <article
            key={s.index}
            className={cn(
              "grid grid-cols-2 px-3 pt-5 pb-6 lg:min-h-[29.2vw] lg:grid-cols-[2.375rem_1fr_1fr] lg:grid-rows-[auto_1fr] lg:px-10 lg:pt-10 lg:pb-10",
              i > 0 && "border-t border-background/15",
            )}
          >
            <p className="font-mono text-sm/none text-background/50 lg:pt-1">{s.index}</p>
            <div className="justify-self-end lg:col-start-2 lg:row-start-2 lg:self-end lg:justify-self-start">
              {s.media ?? <div aria-hidden className="size-44 border border-dashed border-background/30" />}
            </div>
            <h3 className="col-span-2 mt-20 text-2xl/[1.1] whitespace-pre-line lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mt-0 lg:text-[2.63vw]/[1.1]">
              {s.title}
            </h3>
            <AspensearchRevealText text={s.text} className="col-span-2 mt-8 text-base/[1.3] lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:mt-0" />
            <ul className="col-span-2 mt-6 flex flex-col gap-2 font-mono text-sm/none tracking-normal uppercase lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:mt-10 lg:self-end">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span aria-hidden className="size-2 shrink-0 bg-highlight" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
