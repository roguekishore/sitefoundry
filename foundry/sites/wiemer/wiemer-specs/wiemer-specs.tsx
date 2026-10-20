import { useLayoutEffect, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { WiemerSplitText, wiemerReveal } from "@foundry/wiemer-reveal";
import { cn } from "@foundry/foundry-utils";

export interface WiemerSpecsTab {
  /** the tab's name, set in uppercase mono */
  label: string;
  /** the width label on the top dimension bar, e.g. "409 mm" */
  width: string;
  /** the height label on the right dimension bar */
  height: string;
  /** the drawing's proportion, width / height (e.g. 409 / 304) */
  ratio: number;
  /** the drawing (an <img> or <svg>); empty leaves the outlined frame */
  drawing?: ReactNode;
}

export interface WiemerSpecsProps {
  /** the huge centred heading */
  title: string;
  /** one tab per part */
  tabs: WiemerSpecsTab[];
  /** heading of the note at the bottom left */
  noteTitle: string;
  /** the note */
  note: string;
  /** label/value rows at the bottom right */
  rows: { label: string; value: string }[];
  /** anchor id */
  id?: string;
  className?: string;
}

// useLayoutEffect warns during server rendering; fall back to useEffect there.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Orange spec sheet with tabbed dimension drawings and a spec table. */
export function WiemerSpecs({ title, tabs, noteTitle, note, rows, id, className }: WiemerSpecsProps) {
  const [active, setActive] = useState(0);
  const [pill, setPill] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = tabs[active];

  useIsoLayoutEffect(() => {
    const measure = () => {
      const b = buttons.current[active];
      if (b) setPill({ x: b.offsetLeft, y: b.offsetTop, w: b.offsetWidth, h: b.offsetHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <section id={id} className={cn("overflow-clip bg-primary py-section text-primary-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <WiemerSplitText text={title} className="text-center font-display text-[64px] leading-[1.1] font-medium tracking-[-0.025em] md:text-[9vw]" />

        {/* tab bar */}
        <div className="mt-8 flex justify-center md:mt-[4.5vw]">
          <div role="tablist" className="relative flex w-full flex-wrap justify-center gap-y-1 rounded-xl bg-primary-foreground/8 p-4 md:w-auto md:rounded-lg md:p-1.5">
            {pill && (
              <span
                aria-hidden="true"
                className="absolute rounded-md bg-primary-foreground transition-all duration-[600ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none"
                style={{ left: pill.x, top: pill.y, width: pill.w, height: pill.h }}
              />
            )}
            {tabs.map((t, i) => (
              <button
                key={t.label}
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "relative h-9 rounded-md px-4 font-mono text-xs uppercase transition-colors duration-300",
                  i === active ? "font-bold text-primary" : "text-primary-foreground/60 hover:text-primary-foreground",
                  i === active && !pill && "bg-primary-foreground",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* drawing with dimension bars */}
        <figure
          className="mx-auto mt-10 grid w-[min(100%,calc(var(--wiemer-ratio)*62svh))] grid-cols-[1fr_auto] md:mt-[3.5vw] md:w-[min(56vw,calc(var(--wiemer-ratio)*58svh))]"
          style={{ "--wiemer-ratio": tab.ratio } as CSSProperties}
        >
          <div className="flex flex-col">
            <span className="text-center font-mono text-[10px] leading-none font-bold md:text-[15px]">{tab.width}</span>
            <span className="mt-2 h-0.5 bg-primary-foreground md:mt-3 md:h-1" />
            <span className="h-6 border-x border-dotted border-primary-foreground md:h-14" />
          </div>
          <span />
          <div
            role="tabpanel"
            className="overflow-clip rounded-lg border border-primary-foreground [&>img]:size-full [&>img]:object-contain [&>svg]:size-full"
            style={{ aspectRatio: tab.ratio }}
          >
            {tab.drawing}
          </div>
          <div className="flex items-stretch">
            <span className="w-6 border-y border-dotted border-primary-foreground md:w-14" />
            <span className="w-0.5 bg-primary-foreground md:w-1" />
            <span className="pl-1.5 text-center font-mono text-[10px] leading-none font-bold [writing-mode:vertical-rl] md:pl-3 md:text-[15px]">{tab.height}</span>
          </div>
        </figure>

        {/* note and spec rows */}
        <div className="mt-8 grid gap-x-3.5 gap-y-12 border-t border-primary-foreground/20 pt-6 md:mt-[12vw] md:grid-cols-12">
          <div className="md:col-span-6">
            <WiemerSplitText as="h3" size="sm" text={noteTitle} className="text-[max(20px,1.6vw)] leading-[1.2] font-medium tracking-[-0.03em]" />
            <p className={cn(wiemerReveal("rise"), "mt-2.5 text-[max(16px,1.2vw)] leading-[1.3] font-medium tracking-[-0.015em]")}>{note}</p>
          </div>
          <dl className="divide-y divide-primary-foreground/20 md:col-span-6 lg:col-span-4 lg:col-start-9 md:-mt-2">
            {rows.map((r) => (
              <div key={r.label} className="flex justify-between gap-6 py-4 text-[max(16px,1.2vw)] leading-[1.3] font-medium tracking-[-0.015em] first:pt-2">
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
