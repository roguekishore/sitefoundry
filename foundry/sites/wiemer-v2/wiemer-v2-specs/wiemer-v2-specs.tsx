import { useEffect, useRef, useState, type ReactNode } from "react";
import { wiemerV2Reveal, wiemerV2RevealStyle } from "@foundry/wiemer-v2-reveal";
import { WiemerV2SplitHeading } from "@foundry/wiemer-v2-split-heading";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2SpecsView {
  /** the tab's label (set in small uppercase mono) */
  tab: string;
  /** the width written above the drawing, e.g. "420 mm" */
  width: string;
  /** the height written beside it */
  height: string;
  /** the drawing's width divided by its height, e.g. 420 / 300 */
  aspect: number;
  /** the line drawing itself (an <img> or <svg>); an empty outlined box when missing */
  media?: ReactNode;
}

export interface WiemerV2SpecsRow {
  /** what is measured */
  label: string;
  /** the value */
  value: string;
}

export interface WiemerV2SpecsProps {
  /** the big centred heading */
  heading: string;
  /** one view per tab: a measured drawing */
  views: WiemerV2SpecsView[];
  /** the heading over the note at the bottom left */
  noteTitle: string;
  /** the note's text */
  note: string;
  /** the spec table at the bottom right */
  rows: WiemerV2SpecsRow[];
  className?: string;
}

/**
 * A spec sheet on a full accent band: a very large centred heading, a pill of mono tabs (the
 * dark marker slides to the chosen tab), a measured drawing with a width ruler on top and a
 * height ruler at the side, then a note on the left and a ruled two-column spec table on the right.
 */
export function WiemerV2Specs({ heading, views, noteTitle, note, rows, className }: WiemerV2SpecsProps) {
  const [active, setActive] = useState(0);
  const [marker, setMarker] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = views[active] ?? views[0];

  useEffect(() => {
    const measure = () => {
      const el = tabs.current[active];
      if (el) setMarker({ left: el.offsetLeft, top: el.offsetTop, width: el.offsetWidth, height: el.offsetHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <section className={cn("bg-highlight px-gutter pt-section pb-9 text-highlight-foreground", className)}>
      <div className="mx-auto max-w-page">
        <WiemerV2SplitHeading text={heading} className="text-center font-display text-[4rem] leading-[1.1] font-medium tracking-[-0.02em] lg:text-[9vw] lg:tracking-[-0.008em]" />

        <div className="mt-10 flex justify-center lg:mt-16">
          <div role="tablist" className="relative flex w-full flex-wrap justify-center gap-y-2 rounded-lg bg-highlight-foreground/10 p-3 sm:w-auto sm:rounded-md sm:p-1.5">
            {marker && (
              <span
                aria-hidden="true"
                className="absolute rounded-sm bg-highlight-foreground transition-all duration-300 ease-[cubic-bezier(0.38,0.005,0.215,1)] motion-reduce:transition-none"
                style={marker}
              />
            )}
            {views.map((v, i) => (
              <button
                key={v.tab}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "relative h-9 rounded-sm px-4 font-mono text-xs font-medium uppercase transition-colors duration-300",
                  i === active ? "text-highlight" : "text-highlight-foreground/60 hover:text-highlight-foreground",
                  i === active && !marker && "bg-highlight-foreground",
                )}
              >
                {v.tab}
              </button>
            ))}
          </div>
        </div>

        <figure className="mx-auto mt-12 w-full pr-10 sm:w-[min(100%,36rem)] lg:mt-12 lg:w-[48vw] lg:pr-0">
          <figcaption className="text-center font-mono text-[0.625rem] font-medium lg:text-sm">{view.width}</figcaption>
          <div className="mt-1.5 h-0.5 bg-highlight-foreground lg:h-1" />
          <div className="h-6 border-x border-dotted border-highlight-foreground lg:h-14" />
          <div className="relative" style={{ aspectRatio: view.aspect }}>
            <div className="absolute inset-0 overflow-clip rounded-md border border-highlight-foreground bg-highlight-foreground/5 [&>img]:size-full [&>img]:object-contain [&>svg]:size-full">{view.media}</div>
            <div aria-hidden="true" className="absolute inset-y-0 left-full w-6 border-y border-dotted border-highlight-foreground lg:w-14" />
            <div className="absolute inset-y-0 left-[calc(100%+1.5rem)] w-0.5 bg-highlight-foreground lg:left-[calc(100%+3.5rem)] lg:w-1" />
            <p className="absolute top-1/2 left-[calc(100%+2rem)] -translate-y-1/2 font-mono text-[0.625rem] font-medium [writing-mode:vertical-rl] lg:left-[calc(100%+4.5rem)] lg:text-sm">{view.height}</p>
          </div>
        </figure>

        <div className="mt-8 border-t border-highlight-foreground/20 lg:mt-[11rem] lg:grid lg:grid-cols-3 lg:gap-x-4">
          <div className="pt-4 lg:col-span-2 lg:pt-5">
            <WiemerV2SplitHeading as="h3" text={noteTitle} className="text-xl leading-[1.2] font-medium tracking-[-0.02em] lg:text-[1.6vw]" />
            <p className={cn(wiemerV2Reveal("rise"), "mt-2 max-w-[46vw] text-base leading-[1.3] tracking-[-0.01em] max-lg:max-w-none lg:mt-3 lg:text-[1.2vw]")} style={wiemerV2RevealStyle(0)}>
              {note}
            </p>
          </div>
          <dl className="mt-10 lg:col-start-3 lg:mt-0">
            {rows.map((r) => (
              <div key={r.label} className="flex items-baseline justify-between gap-6 border-b border-highlight-foreground/20 py-4 text-base leading-[1.35] last:border-0 lg:text-[1.2vw]">
                <dt>{r.label}</dt>
                <dd className="text-right">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
