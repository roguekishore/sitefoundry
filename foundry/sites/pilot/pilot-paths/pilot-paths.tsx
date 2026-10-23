import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PilotBrushNote } from "@foundry/pilot-brush-note";
import { PilotButton } from "@foundry/pilot-button";
import { PilotLines } from "@foundry/pilot-heading";
import { PilotPlaceholder } from "@foundry/pilot-placeholder";

/** a run of text, or an inline link */
export type PilotRichPart = string | { label: string; href: string };

export interface PilotPathsProps {
  /** the heading; \n sets the desktop line break */
  title: string;
  /** the tall white card with the yellow disc */
  main: { title: string; text: string; cta: { label: string; href: string }; media?: ReactNode };
  /** the aubergine card */
  explore: { title: string; text: string; cta: { label: string; href: string }; art?: ReactNode };
  /** the pale lilac card; its text may hold inline links */
  begin: { title: string; text: PilotRichPart[] };
  /** the white closing lines; \n starts a new paragraph */
  note?: string;
  className?: string;
}

const dots =
  "bg-[radial-gradient(circle,color-mix(in_oklab,var(--highlight-foreground)_18%,transparent)_1px,transparent_1.5px)] bg-[size:1.5625rem_1.5625rem]";

/** Pilot's three ways in: a white card, an aubergine card and a lilac card on the violet band. */
export function PilotPaths({ title, main, explore, begin, note, className }: PilotPathsProps) {
  return (
    <section className={cn("bg-primary text-primary-foreground", className)}>
      <div className="mx-auto max-w-page border-primary-foreground/15 pt-16 pb-16 lg:border-x lg:pt-[7.5rem] lg:pb-28">
        <h2 className="mx-auto max-w-[40rem] px-gutter text-center font-display text-[2.25rem] leading-[1.05] font-bold tracking-[-0.02em] lg:text-[2.5rem]">
          <PilotLines text={title} />
        </h2>

        <div className="mx-gutter mt-14 grid lg:mx-0 lg:mt-20 lg:grid-cols-2">
          <div className="relative flex flex-col overflow-clip bg-card text-card-foreground lg:min-h-[33.75rem]">
            <div className="relative z-10 p-6 lg:p-10">
              <h3 className="font-display text-2xl leading-[1.2] font-medium lg:text-[2rem]">{main.title}</h3>
              <p className="mt-4 max-w-[23rem] text-base leading-6">{main.text}</p>
              <PilotButton href={main.cta.href} variant="solid" size="sm" className="mt-6 lg:mt-10">
                {main.cta.label}
              </PilotButton>
            </div>
            <div className="relative mt-auto ml-auto h-36 w-[60%] lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[62%] lg:w-auto">
              <div aria-hidden className={cn("absolute top-0 -right-[30%] -left-[5%] aspect-square rounded-full bg-highlight lg:right-[-10%] lg:left-[5.5%]", dots)} />
              <div className="absolute right-[12%] bottom-0 aspect-[340/396] w-[45%] lg:right-[17%] lg:h-[110%] lg:w-auto">
                {main.media ?? <PilotPlaceholder tone="photo" className="size-full rounded-t-[45%]" />}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative flex-1 overflow-clip bg-secondary p-6 text-secondary-foreground lg:min-h-[23.125rem] lg:p-10">
              <div className="absolute right-0 bottom-0 aspect-[345/190] w-[70%] lg:w-[54%]">
                {explore.art ?? <div aria-hidden className="size-full bg-radial-[at_100%_100%] from-glow/45 via-glow/10 via-55% to-transparent to-75%" />}
              </div>
              <div className="relative">
                <h3 className="font-display text-2xl leading-[1.2] font-medium lg:text-[2rem]">{explore.title}</h3>
                <p className="mt-4 max-w-[23rem] text-base leading-6">{explore.text}</p>
                <PilotButton href={explore.cta.href} variant="outline-light" size="sm" className="mt-6 mb-28 lg:mt-10 lg:mb-0">
                  {explore.cta.label}
                </PilotButton>
              </div>
            </div>
            <div className="bg-background">
              <div className="bg-glow/15 p-6 text-primary lg:min-h-[10.625rem] lg:px-10 lg:pt-12">
                <h3 className="font-display text-xl leading-[1.2] font-medium lg:text-2xl">{begin.title}</h3>
                <p className="mt-3 max-w-[25rem] text-sm leading-[1.5] tracking-[0.01em]">
                  {begin.text.map((part, i) =>
                    typeof part === "string" ? (
                      <span key={i}>{part}</span>
                    ) : (
                      <a key={i} href={part.href} className="underline decoration-glow underline-offset-4 transition-colors duration-150 hover:text-foreground motion-reduce:transition-none">
                        {part.label}
                      </a>
                    ),
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {note && <PilotBrushNote stroke="glow" text={note} className="mx-auto mt-14 max-w-[54rem] px-gutter lg:mt-28" />}
      </div>
    </section>
  );
}
