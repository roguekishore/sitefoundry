import { useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AspensearchArrows } from "@foundry/aspensearch-arrows";
import { AspensearchHalftone } from "@foundry/aspensearch-halftone";
import { AspensearchLabel } from "@foundry/aspensearch-label";
import { AspensearchRevealText } from "@foundry/aspensearch-reveal-text";
import "./aspensearch-testimonials.css";

export interface AspensearchTestimonial {
  /** the quote; separate paragraphs with a blank line */
  quote: string;
  /** who said it */
  name: string;
  /** their role, shown in mono under the name */
  role: string;
  /** facts for the ink tile, e.g. [{ label: "Position", value: "Quant developer" }] */
  facts: { label: string; value: string }[];
  /** their portrait; empty: a grey placeholder frame */
  photo?: ReactNode;
}

export interface AspensearchTestimonialsProps {
  /** the "■ LABEL" tag */
  label: string;
  /** the opening quote glyph, e.g. "“" */
  quoteMark: string;
  /** the quotes, shown one at a time */
  items: AspensearchTestimonial[];
  /** seconds each quote stays before the next one (the bar fills meanwhile) */
  interval?: number;
  /** screen-reader names of the arrows */
  prevLabel: string;
  nextLabel: string;
  /** media for the window under the facts tile (desktop); empty: halftone placeholder */
  media?: ReactNode;
  /** anchor id for header links */
  id?: string;
  className?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * One quote at a time on a hairline grid. Desktop: a narrow column with the label, a progress
 * bar over two arrow buttons and the portrait; a wide column with the 38px quote and the name,
 * role and counter at its foot; an ink facts tile above a halftone window. Phones: label and
 * counter, the quote, name with a small portrait, an ink facts strip and the arrows. The bar
 * fills over the interval and moves on by itself; each new quote rises in.
 */
export function AspensearchTestimonials({ label, quoteMark, items, interval = 9, prevLabel, nextLabel, media, id, className }: AspensearchTestimonialsProps) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);
  const item = items[index];
  const counter = `${pad(index + 1)} - ${pad(count)}`;

  const bar = (
    <span
      key={index}
      aria-hidden
      onAnimationEnd={() => go(1)}
      className="aspensearch-testimonials-bar absolute top-0 left-0 h-[3px] bg-foreground"
      style={{ "--aspensearch-testimonials-interval": `${interval}s` } as CSSProperties}
    />
  );
  const facts = (
    <dl className="grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-1">
      {item.facts.map((f) => (
        <div key={f.label}>
          <dt className="text-sm/none font-medium">{f.label}</dt>
          <dd className="mt-1.5 font-mono text-xs/none tracking-normal text-background/65 uppercase">{f.value}</dd>
        </div>
      ))}
    </dl>
  );

  return (
    <section id={id} className={cn("group/quotes grid border-t border-border bg-background font-sans tracking-[-0.04em] text-foreground lg:grid-cols-4", className)}>
      {/* Narrow column: label, bar + arrows, portrait (desktop). */}
      <div className="hidden lg:flex lg:flex-col">
        <div className="h-[25vw] px-5 pt-5">
          <AspensearchLabel>{label}</AspensearchLabel>
        </div>
        <div className="relative border-y border-border">
          {bar}
          <AspensearchArrows onPrev={() => go(-1)} onNext={() => go(1)} prevLabel={prevLabel} nextLabel={nextLabel} />
        </div>
        <div className="flex-1 bg-muted">{item.photo}</div>
      </div>

      {/* The quote. */}
      <div className="flex flex-col px-3 pt-6 pb-6 lg:col-span-2 lg:min-h-[58.3vw] lg:border-x lg:border-border lg:px-5 lg:pt-5 lg:pb-5">
        <div className="flex items-center justify-between lg:hidden">
          <AspensearchLabel>{label}</AspensearchLabel>
          <span className="font-mono text-xs/none tracking-normal text-muted-foreground">{counter}</span>
        </div>
        <p aria-hidden className="mt-12 font-display text-3xl/none font-semibold lg:mt-0">
          {quoteMark}
        </p>
        <div key={index} className="aspensearch-testimonials-quote mt-6 flex flex-col gap-[1.1em] text-2xl/[1.1] lg:mt-12 lg:text-[2.63vw]/[1.1]">
          {item.quote.split(/\n\s*\n/).map((p, i) => (
            <AspensearchRevealText key={i} text={p} />
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between gap-4 pt-16">
          <div>
            <p className="text-base/tight">{item.name}</p>
            <p className="mt-1.5 font-mono text-xs/none tracking-normal text-muted-foreground uppercase">{item.role}</p>
          </div>
          <div className="size-[6.25rem] shrink-0 overflow-clip bg-muted lg:hidden">{item.photo}</div>
          <span className="hidden font-mono text-xs/none tracking-normal text-muted-foreground lg:block">{counter}</span>
        </div>
      </div>

      {/* Ink facts tile, then a window (desktop) / facts strip and arrows (phones). */}
      <div className="flex flex-col">
        <div className="bg-foreground px-5 py-5 text-background lg:h-[29.2vw]">{facts}</div>
        <AspensearchHalftone media={media} className="hidden flex-1 lg:block" />
        <div className="relative border-b border-border lg:hidden">
          {bar}
          <AspensearchArrows onPrev={() => go(-1)} onNext={() => go(1)} prevLabel={prevLabel} nextLabel={nextLabel} />
        </div>
      </div>
    </section>
  );
}
