import { Fragment, type CSSProperties, type ElementType } from "react";
import { cn } from "@foundry/foundry-utils";
import "./wiemer-reveal.css";

/**
 * fade: opacity 0→1 · rise: fade + a 24px lift (paragraphs) · fadeout: opacity 1→0 while
 * leaving through the top · drift: a parallax slide inside a frame named by wiemerDriftFrame
 */
export type WiemerRevealEffect = "fade" | "rise" | "fadeout" | "drift";

/** The class for an effect, to put straight on an element. */
export function wiemerReveal(effect: WiemerRevealEffect) {
  return `wiemer-reveal-${effect}`;
}

/** Class for the overflow-clip frame a drifting picture moves inside. */
export const wiemerDriftFrame = "wiemer-drift-frame";

/** Inline style: start a reveal `delay` px of scrolling later, and/or set a drift distance. */
export function wiemerRevealStyle(delay = 0, drift?: number): CSSProperties {
  return { "--wiemer-delay": `${delay}px`, ...(drift !== undefined && { "--wiemer-drift": `${drift}px` }) } as CSSProperties;
}

export interface WiemerSplitTextProps {
  /** the text; a line break ("\n") forces a new line */
  text: string;
  /** the element to render, e.g. "h1", "h2", "p" */
  as?: ElementType;
  /** lg: letters rise a full line out of a mask (display headings) · sm: letters rise 30px, quicker stagger (sublines) */
  size?: "lg" | "sm";
  className?: string;
}

/**
 * Text whose letters rise into place one after another as it scrolls into view. Static
 * HTML shows the text normally; screen readers get the plain text.
 */
export function WiemerSplitText({ text, as: Tag = "h2", size = "lg", className }: WiemerSplitTextProps) {
  let i = 0;
  const vars = (size === "lg" ? {} : { "--wiemer-rise": "30px", "--wiemer-step": "3px", "--wiemer-run": "200px" }) as CSSProperties;
  return (
    <Tag className={cn("wiemer-split", className)} style={vars}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split("\n").map((line, l) => (
          <Fragment key={l}>
            {l > 0 && <br />}
            {line.split(" ").map((word, w) => (
              <Fragment key={w}>
                {w > 0 && " "}
                <span className="-mb-[0.14em] inline-block overflow-clip pb-[0.14em] align-top">
                  {Array.from(word).map((char, c) => (
                    <span key={c} className="wiemer-split-char inline-block" style={{ "--i": i++ } as CSSProperties}>
                      {char}
                    </span>
                  ))}
                </span>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}
