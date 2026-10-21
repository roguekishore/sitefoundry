import type { CSSProperties } from "react";
import { CornerDownRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LunchlineLetterRise } from "@foundry/lunchline-letter-rise";
import { LunchlineDrawRule } from "@foundry/lunchline-draw-rule";
import { LunchlineScribble } from "@foundry/lunchline-scribble-link";
import "./lunchline-approach.css";

export interface LunchlineFormulaLine {
  /** the handwritten words */
  text: string;
  /** "aside": smaller, pale and left-aligned (a remark above the sum); "term": a large
      centred line; "sign": a large centred + or = */
  kind?: "aside" | "term" | "sign";
  /** draw a hooked arrow into this line from the left */
  arrow?: boolean;
  /** a tiny note in a loose circle, pinned to the line's top-right */
  note?: string;
  /** underline the line with a double marker stroke (the result) */
  underline?: boolean;
}

export interface LunchlineApproachProps {
  /** the small tracked label above the heading */
  eyebrow: string;
  /** the light heading; its letters rise in as it scrolls into view */
  heading: string;
  /** the lead paragraph under it */
  body: string;
  /** the evergreen board: its typed title, then the handwritten lines that wipe in */
  board: { title: string; lines: LunchlineFormulaLine[] };
  /** section id, for in-page links */
  id?: string;
  className?: string;
}

const hand = "font-[family-name:var(--typeface-hand,var(--typeface-display))]";

export function LunchlineApproach({ eyebrow, heading, body, board, id, className }: LunchlineApproachProps) {
  return (
    <section id={id} className={cn("relative grid bg-background text-foreground lg:grid-cols-2", className)}>
      <LunchlineDrawRule className="z-10" />
      <div className="px-gutter pt-section pb-12 lg:pt-[4.75rem] lg:pb-[5.5rem] lg:pl-[max(var(--page-gutter),calc((100vw_-_var(--page-width))/2_+_var(--page-gutter)))]">
        <p className="text-sm leading-none font-bold tracking-[0.08em] uppercase lg:text-base">{eyebrow}</p>
        <LunchlineLetterRise
          text={heading}
          className="mt-[1.1rem] max-w-[22rem] font-display text-[2.375rem] leading-[1.2] font-light tracking-[-0.01em] lg:mt-5 lg:max-w-[31rem] lg:text-[3.5rem]"
        />
        <p className="mt-8 max-w-[33rem] text-xl leading-[1.2] font-light lg:mt-12 lg:text-[1.75rem] lg:leading-[1.3]">{body}</p>
      </div>

      <div className="overflow-x-clip bg-primary px-gutter pt-11 pb-14 text-primary-foreground lg:px-[3.8rem] lg:pt-[4.1rem] lg:pb-16">
        <p className="text-[2rem] leading-[1.2] font-light tracking-[-0.01em] lg:text-[2.5rem]">{board.title}</p>
        <div className={cn(hand, "mt-1 flex max-w-[34rem] flex-col lg:max-w-[36rem]")}>
          {board.lines.map((line, i) => {
            const kind = line.kind ?? "term";
            return (
              <div
                key={i}
                className={cn(
                  "lunchline-approach-line relative",
                  kind === "aside" ? "text-[2rem] leading-[1] text-highlight lg:text-[2.9rem]" : "text-center text-[3.5rem] leading-[0.95] tracking-[-0.05em] lg:text-[4.1rem]",
                  kind === "sign" && "py-1",
                  line.arrow && "pt-6 pl-10",
                )}
                style={{ "--lunchline-approach-i": i } as CSSProperties}
              >
                {line.arrow && <CornerDownRight aria-hidden className="absolute top-0 left-3 size-12 text-highlight" strokeWidth={1.25} />}
                <span className="relative inline-block">
                  {line.text}
                  {line.note && (
                    <span className="absolute -top-9 -right-3 -rotate-6 rounded-[50%] border border-current px-3 py-1.5 text-[1.35rem] leading-[0.8] tracking-normal whitespace-pre lg:-top-8 lg:-right-20 lg:text-[1.6rem]">
                      {line.note}
                    </span>
                  )}
                  {line.underline && <LunchlineScribble className="mt-1 h-3 text-highlight" />}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
