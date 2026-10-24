import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";
import { ParsleyhealthPlaceholder } from "@foundry/parsleyhealth-placeholder";
import "./parsleyhealth-experts.css";

export interface ParsleyhealthExpertsProps {
  /** the title */
  title: string;
  /** the lead under it (may hold an underlined link) */
  lead: ReactNode;
  /** the checklist */
  points: string[];
  /** the clinician pictured */
  person?: { name: string; role: string };
  /** the cut-out portrait (an img with a clear background); a placeholder when empty */
  media?: ReactNode;
  /** screen-reader label of the placeholder */
  mediaLabel?: string;
  className?: string;
}

/** Title, lead and checklist with a cut-out portrait on the bottom edge. */
export function ParsleyhealthExperts({ title, lead, points, person, media, mediaLabel, className }: ParsleyhealthExpertsProps) {
  return (
    <section className={cn("overflow-clip bg-background px-gutter pt-8 lg:bg-card lg:px-10 lg:pt-20", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+10rem)]">
        <div className="parsleyhealth-experts-text">
          <ParsleyhealthHeading title={title} titleClassName="max-w-[20rem] lg:max-w-none" />
          <div className="mt-6 max-w-[56rem] border-b border-foreground/15 pb-9 text-base leading-[1.65] text-foreground lg:mt-8 lg:border-0 lg:pb-0 lg:text-[1.3125rem] lg:leading-[1.6] [&_a]:text-secondary [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-4">
            {lead}
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_9.5rem] gap-x-4 lg:grid-cols-2 lg:gap-x-16">
          <div className="parsleyhealth-experts-text flex flex-col pt-8 pb-10 lg:pt-14 lg:pb-20">
            <ul className="flex flex-col gap-6 text-[0.9375rem] leading-[1.55] text-primary lg:max-w-[32rem] lg:gap-4 lg:text-base lg:leading-[1.65]">
              {points.map((point) => (
                <li key={point} className="flex gap-2.5 lg:gap-3">
                  <Check aria-hidden className="mt-1 size-3.5 shrink-0 text-secondary" strokeWidth={1.5} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {person ? (
              <p className="mt-10 text-sm leading-tight text-primary lg:mt-auto lg:pt-16">
                <span className="block font-semibold uppercase">{person.name}</span>
                <span className="mt-0.5 block text-[0.8125rem] lg:text-sm">{person.role}</span>
              </p>
            ) : null}
          </div>
          <div className="parsleyhealth-experts-portrait -mr-gutter flex items-end justify-end self-end lg:mr-0 lg:justify-center">
            <div className="h-[16rem] w-[10rem] lg:aspect-[609/442] lg:h-auto lg:w-full lg:max-w-[38rem] [&>img]:size-full [&>img]:object-contain [&>img]:object-bottom">
              {media ?? <ParsleyhealthPlaceholder tone="tint" label={mediaLabel} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
