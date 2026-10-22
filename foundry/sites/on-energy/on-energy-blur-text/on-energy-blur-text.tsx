import { Fragment, type CSSProperties, type ElementType } from "react";
import { cn } from "@foundry/foundry-utils";
import "./on-energy-blur-text.css";

export interface OnEnergyBlurTextProps {
  /** the text; a "\n" starts a new line */
  text: string;
  /** the element to render, e.g. "h2", "h3", "p" (default "h2") */
  as?: ElementType;
  className?: string;
}

/**
 * Heading text whose letters sharpen out of a blur one by one, left to right, as it scrolls
 * into view (CSS scroll-driven, no JavaScript). Static HTML and browsers without
 * scroll-driven animations show the text as is.
 */
export function OnEnergyBlurText({ text, as: Tag = "h2", className }: OnEnergyBlurTextProps) {
  let index = 0;
  const lines = text.split("\n");
  return (
    <Tag className={cn(className)} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, l) => (
        <Fragment key={l}>
          {l > 0 && <br />}
          {line.split(" ").map((word, w) => (
            <Fragment key={w}>
              {w > 0 && " "}
              <span aria-hidden className="on-energy-blur-text-word">
                {[...word].map((ch, c) => (
                  <span key={c} className="on-energy-blur-text-letter" style={{ "--on-energy-blur-i": index++ } as CSSProperties}>
                    {ch}
                  </span>
                ))}
              </span>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Tag>
  );
}
