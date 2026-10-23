import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PilotBrushNote } from "@foundry/pilot-brush-note";
import { PilotHeading } from "@foundry/pilot-heading";

const tones = {
  lime: { tag: "bg-chart-4 text-foreground", tint: "from-chart-4", slot: "bg-chart-4" },
  sun: { tag: "bg-highlight text-highlight-foreground", tint: "from-highlight/40", slot: "bg-highlight/50" },
  sky: { tag: "bg-accent text-accent-foreground", tint: "from-accent/40", slot: "bg-accent/50" },
};

export interface PilotAdvisor {
  /** their name, on the big tag */
  name: string;
  /** their background, on the small tag under it */
  role: string;
  /** what they say; \n\n starts a new paragraph */
  quote: string;
  /** the colour of their tags and tint */
  tone: keyof typeof tones;
  /** a cut-out portrait for the bottom-right corner; a tinted placeholder when empty */
  portrait?: ReactNode;
}

export interface PilotAdvisorsProps {
  /** the heading; \n sets the desktop line breaks */
  title: string;
  /** the paragraph under it */
  lede?: string;
  /** the advisors, three across on desktop */
  advisors: PilotAdvisor[];
  /** the violet closing statement */
  note?: string;
  className?: string;
}

/** Pilot's advisors: three framed columns with highlighter tags, a quote and a portrait. */
export function PilotAdvisors({ title, lede, advisors, note, className }: PilotAdvisorsProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page border-border pt-16 pb-16 lg:border-x lg:pt-[7.5rem] lg:pb-28">
        <PilotHeading title={title} lede={lede} className="max-w-[45rem] px-gutter" />

        <ul className="mx-gutter mt-14 grid border border-border lg:mx-0 lg:mt-24 lg:grid-cols-3 lg:border-x-0">
          {advisors.map((a, i) => {
            const t = tones[a.tone];
            return (
              <li
                key={a.name}
                className={cn(
                  "relative flex flex-col bg-linear-to-t to-transparent to-45% pt-6 lg:min-h-[41.75rem]",
                  t.tint,
                  i > 0 && "border-t border-border lg:border-t-0 lg:border-l",
                )}
              >
                <div className="px-6">
                  <p className={cn("inline-block px-1.5 py-1 text-2xl leading-[1.2]", t.tag)}>{a.name}</p>
                  <p className={cn("block max-w-[17.5rem] px-1.5 py-1.5 text-sm leading-[1.3] tracking-[0.02em]", t.tag)}>{a.role}</p>
                  <div className="mt-6 space-y-6 text-lg leading-[1.55] lg:max-w-[20rem] lg:text-xl lg:leading-[1.3]">
                    {a.quote.split("\n\n").map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-auto ml-auto w-[70%] pt-8 lg:w-[63%]">
                  {a.portrait ?? <div aria-hidden className={cn("aspect-[269/228] rounded-t-[45%]", t.slot)} />}
                </div>
              </li>
            );
          })}
        </ul>

        {note && <PilotBrushNote stroke="primary" text={note} className="mx-auto mt-14 max-w-[47rem] px-gutter text-primary lg:mt-24" />}
      </div>
    </section>
  );
}
