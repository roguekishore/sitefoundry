import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PilotBrushNote } from "@foundry/pilot-brush-note";
import { PilotHeading } from "@foundry/pilot-heading";
import { PilotPlaceholder } from "@foundry/pilot-placeholder";

export interface PilotScenario {
  /** the small gold label, e.g. "Hiring ahead" */
  label: string;
  /** the founder's question, in quotes */
  quote: string;
  /** the photo in the arc; a placeholder when empty */
  media?: ReactNode;
}

export interface PilotScenariosProps {
  /** the heading; \n sets the desktop line breaks */
  title: string;
  /** the paragraph under it */
  lede?: string;
  /** the bold line above the grid */
  lead?: string;
  /** the four cells */
  items: PilotScenario[];
  /** the closing statement */
  note?: string;
  className?: string;
}

const arc = "rounded-tl-[100%_100%]";

/** Pilot's growth scenarios: a 2×2 hairline grid of questions with arc-cropped photos. */
export function PilotScenarios({ title, lede, lead, items, note, className }: PilotScenariosProps) {
  return (
    <section className={cn("bg-highlight/25 text-foreground", className)}>
      <div className="mx-auto max-w-page border-chart-5/15 pt-16 pb-16 lg:border-x lg:pt-[7.5rem] lg:pb-28">
        <div className="px-gutter lg:px-[1.5625rem]">
          <PilotHeading align="left" title={title} lede={lede} className="max-w-[46rem]" />
          {lead && <p className="mt-12 text-xl leading-[1.3] font-semibold lg:mt-24 lg:text-[1.375rem]">{lead}</p>}
        </div>

        <ul className="mx-gutter mt-10 grid border border-chart-5/15 lg:mx-0 lg:grid-cols-2 lg:border-x-0 lg:border-b-0">
          {items.map((it, i) => (
            <li
              key={it.label}
              className={cn(
                "relative flex flex-col overflow-clip border-chart-5/15 pt-7 lg:min-h-[20.75rem] lg:border-b",
                i > 0 && "border-t lg:border-t-0",
                i % 2 === 1 && "lg:border-l",
              )}
            >
              <div className="px-6">
                <p className="relative text-xs leading-[1.5] tracking-[0.12em] text-chart-5 uppercase before:absolute before:top-0 before:-left-6 before:h-4 before:w-0.5 before:bg-chart-5">
                  {it.label}
                </p>
                <p className="mt-3 text-lg leading-[1.5] lg:max-w-[18.5rem] lg:text-xl">{it.quote}</p>
              </div>
              <div className="relative mt-6 ml-auto aspect-[466/269] w-[90%] lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[66%]">
                <div aria-hidden className={cn("absolute inset-0 bg-linear-to-r from-highlight/0 via-highlight/70 to-highlight", arc)} />
                <div className={cn("absolute inset-x-0 top-3 bottom-0 overflow-clip", arc)}>
                  {it.media ?? <PilotPlaceholder tone="photo" className="size-full" />}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {note && <PilotBrushNote stroke="highlight" text={note} className="mx-auto mt-14 max-w-[48rem] px-gutter lg:mt-24" />}
      </div>
    </section>
  );
}
