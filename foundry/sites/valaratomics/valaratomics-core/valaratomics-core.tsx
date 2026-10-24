import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { ValaratomicsIntro } from "@foundry/valaratomics-intro";
import { ValaratomicsPlaceholder } from "@foundry/valaratomics-placeholder";

export interface ValaratomicsCoreItem {
  /** the small label above, e.g. "Fuel" */
  eyebrow: string;
  /** the big word, e.g. "Pebble" */
  name: string;
  /** the video or image shown in the panel while this item is active; empty shows a placeholder */
  media?: ReactNode;
}

export interface ValaratomicsCoreProps {
  /** the section heading */
  title: string;
  /** the paragraph beside it */
  body: string;
  /** the parts the panel cycles through (three in the original) */
  items: ValaratomicsCoreItem[];
  /** seconds each item stays before the next one takes over */
  interval?: number;
  className?: string;
}

const TAB_WIDTH = 30; // % of the panel width
const NOTCH = "1.375rem"; // how far the tab reaches below the panel
const EASE = "ease-[cubic-bezier(0.92,0,0.08,1)]";

/**
 * Intro, then a wide black panel that grows a short tab down towards the active label below
 * it (the media fills panel and tab, clipped to one shape). The panel auto-advances through the items: the tab slides across, the media
 * crossfades, the active label turns black with a gold eyebrow and the others dim to half.
 * On phones the label row is wider than the screen and slides so the active one shows.
 */
export function ValaratomicsCore({ title, body, items, interval = 4, className }: ValaratomicsCoreProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const last = Math.max(items.length - 1, 1);
  const step = active / last; // 0 at the first item, 1 at the last

  useEffect(() => {
    if (reduce || paused || items.length < 2) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % items.length), interval * 1000);
    return () => clearTimeout(id);
  }, [active, reduce, paused, interval, items.length]);

  // One shape for panel + tab: the panel's bottom edge sits 22px above the box's bottom, and
  // the tab (30% wide, bevelled on its inner sides) reaches down to it under the active label.
  // Same number of points in every state, so the clip-path animates between them.
  const L = `calc(${100 - TAB_WIDTH}% * ${step})`;
  const R = `calc(${L} + ${TAB_WIDTH}%)`;
  const inL = active === 0 ? "0px" : "1.5rem";
  const inR = active === items.length - 1 ? "0px" : "1.5rem";
  const shape: CSSProperties = {
    clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${NOTCH}), ${R} calc(100% - ${NOTCH}), calc(${R} - ${inR}) 100%, calc(${L} + ${inL}) 100%, ${L} calc(100% - ${NOTCH}), 0 calc(100% - ${NOTCH}))`,
  };

  return (
    <section className={cn("bg-background px-gutter py-section text-foreground", className)}>
      <div className="mx-auto max-w-page">
        <ValaratomicsIntro title={title} body={body} />

        <div className="mt-9 lg:mt-section" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div
            style={shape}
            className={cn(
              "dark relative aspect-[363/440] rounded-sm bg-background lg:aspect-auto lg:h-[27.5rem]",
              "transition-[clip-path] duration-500 motion-reduce:transition-none",
              EASE,
            )}
          >
            {items.map((item, i) => (
              <div
                key={item.name}
                aria-hidden={i !== active}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500 ease-in-out motion-reduce:transition-none [&>*]:size-full [&_img]:object-cover [&_video]:object-cover",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              >
                {item.media ?? <ValaratomicsPlaceholder tone="photo" />}
              </div>
            ))}
          </div>

          <div className="mt-9 overflow-x-clip [container-type:inline-size]">
            <ul
              style={{ "--valaratomics-core-step": step } as CSSProperties}
              className={cn(
                "flex w-max gap-12 [translate:calc((100cqw-100%)*var(--valaratomics-core-step))_0] transition-[translate] duration-500 motion-reduce:transition-none",
                "lg:w-full lg:justify-between lg:gap-0 lg:[translate:none]",
                EASE,
              )}
            >
              {items.map((item, i) => (
                <li key={item.name}>
                  <button
                    type="button"
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex flex-col items-start gap-2 text-left transition-[opacity,filter] duration-500 ease-in-out motion-reduce:transition-none",
                      i === active ? "opacity-100" : "opacity-50 hover:opacity-70",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-sm leading-none font-medium uppercase transition-colors duration-500 lg:text-lg lg:leading-none",
                        i === active ? "text-primary" : "text-foreground/40",
                      )}
                    >
                      {item.eyebrow}
                    </span>
                    <span className="font-sans text-[2rem] leading-none font-semibold tracking-[-0.03em] uppercase lg:text-5xl lg:leading-none">
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
