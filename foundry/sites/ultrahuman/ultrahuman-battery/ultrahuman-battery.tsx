// foundry-allow-text: the 0–9 strips behind each rolling digit are decorative glyphs.
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanPlaceholder } from "@foundry/ultrahuman-placeholder";
import "./ultrahuman-battery.css";

export interface UltrahumanBatteryProps {
  /** the title shown first, which fades away as the figure arrives */
  title: string;
  /** the small label before the figure, e.g. "Up to" */
  before: string;
  /** the figure itself; its digits roll up from 0 while scrolling in, e.g. "12" */
  value: string;
  /** the word after the figure, e.g. "Days" */
  unit: string;
  /** the small label after the figure, e.g. "Per charge" */
  after: string;
  /** the product render filling the lower half (contain); a placeholder when empty */
  media?: ReactNode;
  /** the light-arc art drawn above the render; a soft glow band when empty */
  arc?: ReactNode;
  /** describes the render for screen readers when the placeholder shows */
  mediaLabel?: string;
  className?: string;
}

const strip = Array.from({ length: 10 }, (_, n) => n);

/** One big battery figure over a product render: the title gives way to "label — figure — label",
 *  the labels slide in from the sides (from above and below on phones), the figure grows in and
 *  its digits roll up, and a glow arc sweeps in from the left. */
export function UltrahumanBattery({ title, before, value, unit, after, media, arc, mediaLabel, className }: UltrahumanBatteryProps) {
  return (
    <section className={cn("ultrahuman-battery relative flex flex-col overflow-clip bg-background text-foreground lg:h-svh", className)}>
      <div className="grid place-items-center px-gutter pt-12 lg:absolute lg:inset-x-0 lg:top-[26%] lg:-translate-y-1/2 lg:pt-0">
        <h2 className="ultrahuman-battery-title text-center text-[1.75rem] leading-[1.18] tracking-[-0.035em] text-balance [grid-area:1/1] lg:text-[2.5rem] lg:leading-[3rem] lg:tracking-[-0.025em]">
          {title}
        </h2>
        <p className="flex flex-col items-center gap-4 text-center uppercase [grid-area:1/1] lg:flex-row lg:gap-0">
          <span className="ultrahuman-battery-before text-sm leading-none tracking-[-0.01em] text-foreground/50 lg:mr-16 lg:text-base">{before}</span>
          <span className="ultrahuman-battery-stat flex items-baseline text-5xl leading-none tracking-[-0.06em] lg:text-[3.5rem]">
            <span className="sr-only">{value}</span>
            <span aria-hidden className="ultrahuman-battery-digits flex">
              {value.split("").map((char, i) =>
                /\d/.test(char) ? (
                  <span key={i} className="relative inline-block h-[1em] overflow-clip">
                    <span className="invisible">{char}</span>
                    <span
                      className="ultrahuman-battery-strip absolute inset-x-0 top-0 flex flex-col"
                      style={{ "--ultrahuman-battery-digit": char } as CSSProperties}
                    >
                      {strip.map((n) => (
                        <span key={n} className="block h-[1em] text-center">
                          {n}
                        </span>
                      ))}
                    </span>
                  </span>
                ) : (
                  <span key={i}>{char}</span>
                ),
              )}
            </span>
            <span className="ml-[0.25em]">{unit}</span>
          </span>
          <span className="ultrahuman-battery-after text-sm leading-none tracking-[-0.01em] text-foreground/50 lg:ml-12 lg:text-base">{after}</span>
        </p>
      </div>

      <div className="relative mt-11 h-[20rem] lg:absolute lg:inset-x-0 lg:top-[37%] lg:bottom-0 lg:mt-0 lg:h-auto">
        <div className="ultrahuman-battery-arc absolute top-0 left-1/2 aspect-[460/168] w-[118%] -translate-x-1/2 lg:aspect-[1440/209] lg:w-full">
          {arc ?? <UltrahumanPlaceholder tone="glow" />}
        </div>
        <div className="absolute inset-x-0 bottom-0 aspect-[390/236] lg:aspect-[1450/441]">
          {media ?? <UltrahumanPlaceholder tone="soft" label={mediaLabel} />}
        </div>
      </div>
    </section>
  );
}
