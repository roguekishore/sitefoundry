import { useState, type CSSProperties, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AspensearchArrows } from "@foundry/aspensearch-arrows";
import { AspensearchHalftone } from "@foundry/aspensearch-halftone";
import { AspensearchLabel } from "@foundry/aspensearch-label";
import { AspensearchRevealText } from "@foundry/aspensearch-reveal-text";
import "./aspensearch-team.css";

export interface AspensearchTeamMember {
  /** full name; each word gets its own line in the mint bar */
  name: string;
  /** role, in the mono tag on the card's corner */
  role: string;
  /** where the card links to */
  href?: string;
  /** portrait; empty: a grey placeholder frame */
  photo?: ReactNode;
}

export interface AspensearchTeamProps {
  /** the giant word top left, e.g. "Partners" */
  word: string;
  /** the 38px line in the top-right tile; "\n" breaks it */
  subheading: string;
  /** the "■ LABEL" tag */
  label: string;
  /** the paragraph in the right half */
  text: string;
  /** the people, as cards (four show at a time on desktop) */
  members: AspensearchTeamMember[];
  /** screen-reader names of the arrows */
  prevLabel: string;
  nextLabel: string;
  /** media behind the cards (desktop); empty: halftone placeholder */
  media?: ReactNode;
  /** anchor id for header links */
  id?: string;
  className?: string;
}

// How far each card drifts (in vw, either side of its place) as the strip scrolls past,
// cycling: the original's uneven parallax.
const SHIFTS = [6.25, 17.2, 10.9, 21.8, 12.5, 7.8, 18.7, 14];
const VISIBLE = 4;

/**
 * The people. A giant word and a two-line subheading, a label, arrow buttons and a paragraph,
 * then portrait cards: a mono role tag on the corner, a portrait frame and a mint name bar with
 * an arrow. Desktop shows four cards side by side over a halftone backdrop, each drifting up at
 * its own speed as the page scrolls (scrubbed parallax); the arrows slide the row one card at
 * a time. Phones stack the cards full width.
 */
export function AspensearchTeam({ word, subheading, label, text, members, prevLabel, nextLabel, media, id, className }: AspensearchTeamProps) {
  const [index, setIndex] = useState(0);
  const last = Math.max(0, members.length - VISIBLE);

  return (
    <section id={id} className={cn("border-t border-border bg-background font-sans tracking-[-0.04em] text-foreground", className)}>
      <div className="grid lg:grid-cols-4">
        <div className="px-3 pt-6 lg:col-span-2 lg:h-[29.2vw] lg:px-5 lg:pt-0">
          <AspensearchLabel className="lg:hidden">{label}</AspensearchLabel>
          <AspensearchRevealText as="h2" variant="display" text={word} className="mt-12 font-display text-[13.8vw]/none lg:mt-0 lg:text-[12.5vw]/none" />
        </div>
        <div className="flex items-end px-3 pt-12 lg:col-span-2 lg:border-l lg:border-border lg:px-5 lg:pt-0 lg:pb-5">
          <p className="text-2xl/[1.1] whitespace-pre-line lg:text-[2.63vw]/[1.1]">{subheading}</p>
        </div>

        <div className="hidden px-5 pt-5 lg:block lg:border-t lg:border-border">
          <AspensearchLabel>{label}</AspensearchLabel>
        </div>
        <div className="hidden lg:block lg:border-t lg:border-border">
          <AspensearchArrows
            prevLabel={prevLabel}
            nextLabel={nextLabel}
            onPrev={() => setIndex((i) => Math.max(0, i - 1))}
            onNext={() => setIndex((i) => Math.min(last, i + 1))}
            prevDisabled={index === 0}
            nextDisabled={index >= last}
            className="border-b border-l border-border"
          />
        </div>
        <div className="px-3 pt-12 pb-6 lg:col-span-2 lg:h-[23vw] lg:border-t lg:border-l lg:border-border lg:px-5 lg:pt-7">
          <AspensearchRevealText text={text} className="max-w-[22rem] text-base/[1.3]" />
        </div>
      </div>

      {/* The cards: a clipped row on desktop (sideways only), stacked on phones. */}
      <div className="relative isolate lg:overflow-x-clip">
        <AspensearchHalftone media={media} className="absolute inset-x-0 top-[6vw] bottom-0 -z-10 hidden lg:block" />
        <div className="aspensearch-team-strip lg:pb-[6vw]">
          <ul
            className="flex flex-col transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:flex-row lg:[transform:translateX(var(--aspensearch-team-x))]"
            style={{ "--aspensearch-team-x": `${-index * (100 / VISIBLE)}%` } as CSSProperties}
          >
            {members.map((m, i) => (
              <li
                key={m.name}
                className="aspensearch-team-card shrink-0 lg:w-1/4"
                style={{ "--aspensearch-team-shift": `${SHIFTS[i % SHIFTS.length]}vw` } as CSSProperties}
              >
                <a href={m.href ?? "#"} className="group relative flex aspect-[4/5] flex-col border-t border-border bg-background lg:border-x lg:border-r-0">
                  <span className="absolute top-0 right-0 z-10 border-b border-l border-border bg-background px-2.5 py-2.5 font-mono text-xs/none tracking-normal uppercase">
                    {m.role}
                  </span>
                  <div className="relative flex-1 overflow-clip bg-muted">{m.photo}</div>
                  <div className="flex h-[7.8rem] shrink-0 items-end justify-between bg-highlight px-3 pb-5 text-highlight-foreground lg:px-5">
                    <span className="w-min text-2xl/[1.1]">{m.name}</span>
                    <ArrowRight
                      aria-hidden
                      className="size-8 shrink-0 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 motion-reduce:transition-none"
                      strokeWidth={1.25}
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
