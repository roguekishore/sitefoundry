import { useRef, useState, type CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJouleMark } from "@foundry/zetta-joule-mark";
import { ZettaJouleSplitHeading } from "@foundry/zetta-joule-split-heading";

export interface ZettaJouleHeatTab {
  /** tab label */
  label: string;
  /** the dashed floating ranges shown for this tab */
  ranges: { label: string; from: number; to: number }[];
}

export interface ZettaJouleHeatBar {
  /** what the bar is */
  label: string;
  /** text after the label, e.g. "750 °C" */
  valueLabel: string;
  /** the number that sets the bar length (same unit as the axis) */
  value: number;
}

export interface ZettaJouleHeatProps {
  /** heading ("\n" is kept as a line break) */
  heading: string;
  /** paragraph on the right */
  body: string;
  /** the tabs; the first is open at the start. On phones they become a select box */
  tabs: ZettaJouleHeatTab[];
  /** your own bar, drawn first in sky blue with the wordmark in it */
  brand: { name: string } & ZettaJouleHeatBar;
  /** the comparison bars (shorter, dark, with a blue end marker) */
  bars: ZettaJouleHeatBar[];
  /** the unit shown on the axis, e.g. "°C" */
  unit: string;
  /** the axis goes from 0 to this value */
  axisMax: number;
  /** the distance between axis ticks */
  axisStep: number;
  /** accessible name of the tab selector on phones */
  tabsLabel: string;
  className?: string;
}

/** Position of a value along the plot: a 24px margin on both sides, the rest split evenly. */
const plotLeft = "calc(1.5rem + (100% - 3rem) * var(--from))";

export function ZettaJouleHeat({ heading, body, tabs, brand, bars, unit, axisMax, axisStep, tabsLabel, className }: ZettaJouleHeatProps) {
  const [active, setActive] = useState(0);
  const [scroll, setScroll] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const ticks = Array.from({ length: Math.floor(axisMax / axisStep) + 1 }, (_, i) => i * axisStep);
  const frac = (v: number) => ({ "--from": v / axisMax }) as CSSProperties;

  const onScroll = () => {
    const el = track.current;
    if (el && el.scrollWidth > el.clientWidth) setScroll((el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100);
  };
  const onSlide = (pct: number) => {
    const el = track.current;
    setScroll(pct);
    if (el) el.scrollLeft = (pct / 100) * (el.scrollWidth - el.clientWidth);
  };

  const barBase = "relative flex h-10 items-center px-4 text-base tracking-[-0.01em] text-foreground";

  return (
    <section className={cn("dark bg-background pt-20 pb-14 text-foreground lg:pt-section", className)}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)+5rem)] px-gutter lg:px-10">
        <ZettaJouleSplitHeading heading={heading} body={body} bodyTone="strong" keepBreaks />

        <div className="mt-12 lg:mt-14">
          {/* tabs: underlined row on desktop, a select box on phones */}
          <div role="tablist" aria-label={tabsLabel} className="hidden gap-10 border-b border-border lg:flex">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "-mb-px border-b-4 pb-4 text-base tracking-[-0.01em] transition-colors duration-200",
                  i === active ? "border-glow text-foreground" : "border-transparent text-muted-foreground hover:text-foreground/90",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="relative border-b border-border lg:hidden">
            <select
              aria-label={tabsLabel}
              value={active}
              onChange={(e) => setActive(Number(e.target.value))}
              className="w-full appearance-none bg-transparent py-4 pr-8 text-base tracking-[-0.01em] text-foreground"
            >
              {tabs.map((t, i) => (
                <option key={t.label} value={i} className="bg-background">
                  {t.label}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-1 size-4 -translate-y-1/2 text-foreground" strokeWidth={1.5} />
          </div>

          {/* the chart: a sideways-scrolling strip on phones, the full width on desktop */}
          <div ref={track} onScroll={onScroll} className="-mx-gutter mt-10 overflow-x-auto px-gutter [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
            <div className="relative w-[78rem] lg:w-full">
              {ticks.map((v) => (
                <span key={v} aria-hidden className="absolute inset-y-0 w-px border-l border-dotted border-foreground/10" style={{ ...frac(v), left: plotLeft }} />
              ))}
              <div className="relative h-[12.8rem]">
                {tabs[active].ranges.map((r, i) => (
                  <div key={r.label} className="absolute inset-x-0 h-10" style={{ ...frac(r.from), top: `${i * 3.25}rem`, "--w": (r.to - r.from) / axisMax } as CSSProperties}>
                    <span aria-hidden className="absolute inset-y-0 rounded-sm border border-dashed border-glow bg-glow/15" style={{ left: plotLeft, width: "calc((100% - 3rem) * var(--w))" }} />
                    <span className="absolute top-1/2 -translate-y-1/2 text-sm leading-[1.3] tracking-[-0.01em] whitespace-nowrap" style={{ left: "calc(1.5rem + (100% - 3rem) * (var(--from) + var(--w)) + 0.75rem)" }}>
                      {r.label}
                      <span className="block">
                        {r.from} {unit} - {r.to} {unit}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <ul className="relative flex flex-col gap-3">
                <li className={cn(barBase, "bg-glow text-highlight-foreground")} style={{ width: `calc(1.5rem + (100% - 3rem) * ${brand.value / axisMax})` }}>
                  <ZettaJouleMark name={brand.name} className="mr-2 text-base" />
                  {brand.label}
                  <span className="ml-2">{brand.valueLabel}</span>
                </li>
                {bars.map((b) => (
                  <li key={b.label} className={cn(barBase, "bg-secondary")} style={{ width: `calc(1.5rem + (100% - 3rem) * ${b.value / axisMax})` }}>
                    {b.label}
                    <span className="ml-2">{b.valueLabel}</span>
                    <span aria-hidden className="absolute inset-y-0 right-0 w-[3px] bg-glow" />
                  </li>
                ))}
              </ul>
              <div aria-hidden className="relative mt-8 h-8 border-t border-border">
                {ticks.map((v) => (
                  <span key={v} className="absolute top-0 flex -translate-x-1/2 flex-col items-center" style={{ ...frac(v), left: plotLeft }}>
                    <span className="h-2 w-px bg-border" />
                    <span className="mt-3 text-xs leading-none whitespace-nowrap">
                      {v} {unit}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={scroll}
            aria-label={tabsLabel}
            onChange={(e) => onSlide(Number(e.target.value))}
            className="mt-10 block h-3 w-full cursor-pointer appearance-none bg-transparent lg:hidden [&::-moz-range-thumb]:size-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-glow [&::-moz-range-track]:h-px [&::-moz-range-track]:bg-glow [&::-webkit-slider-runnable-track]:h-px [&::-webkit-slider-runnable-track]:bg-glow [&::-webkit-slider-thumb]:-mt-[5px] [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-glow"
          />
        </div>
      </div>
    </section>
  );
}
