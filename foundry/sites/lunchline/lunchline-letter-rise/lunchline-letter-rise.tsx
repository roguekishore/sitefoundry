import { Fragment, type CSSProperties, type ElementType } from "react";
import { cn } from "@foundry/foundry-utils";
import "./lunchline-letter-rise.css";

export interface LunchlineLetterRiseProps {
  /** the text; split into words (each its own mask) and letters */
  text: string;
  /** the element to render: h2 by default */
  as?: ElementType;
  /** "scroll": the letters rise as the heading scrolls into view, scrubbed with the scroll;
      "load": they rise once when the page loads (for the first screen) */
  mode?: "scroll" | "load";
  /** load mode only: wait this long (ms) before the first letter moves */
  delay?: number;
  /** how far the first letter starts below its place, in em; each next letter starts 15%
      further down, up to `maxDrop` */
  drop?: number;
  /** the furthest any letter starts below its place, in em (about one line hides it fully) */
  maxDrop?: number;
  /** size, leading, weight and colour go here */
  className?: string;
}

export function LunchlineLetterRise({
  text,
  as: Tag = "h2",
  mode = "scroll",
  delay = 0,
  drop = 0.11,
  maxDrop = 1.05,
  className,
}: LunchlineLetterRiseProps) {
  const words = text.split(/\s+/).filter(Boolean);
  let index = 0;
  return (
    <Tag
      aria-label={text}
      data-mode={mode}
      className={cn("lunchline-letter-rise", className)}
      style={{ "--lunchline-letter-rise-delay": `${delay}ms` } as CSSProperties}
    >
      {words.map((word, w) => (
        <Fragment key={w}>
          <span aria-hidden className="lunchline-letter-rise-mask">
            {Array.from(word).map((letter, l) => {
              const i = index++;
              const d = Math.min(drop * Math.pow(1.15, i), maxDrop);
              return (
                <span key={l} className="lunchline-letter-rise-ch" style={{ "--i": i, "--d": `${d.toFixed(3)}em` } as CSSProperties}>
                  {letter}
                </span>
              );
            })}
          </span>
          {w < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}
