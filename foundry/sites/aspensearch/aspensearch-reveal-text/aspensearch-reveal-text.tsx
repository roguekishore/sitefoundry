import { Fragment, type CSSProperties, type ElementType } from "react";
import { cn } from "@foundry/foundry-utils";
import "./aspensearch-reveal-text.css";

export interface AspensearchRevealTextProps {
  /** the text; it is split into words, and the words of one line rise together as that line scrolls into view */
  text: string;
  /** the element to render, e.g. "p", "h2", "span" (default "p") */
  as?: ElementType;
  /** copy: lines rise from their own height over a short scroll · display: big words rise further and slower */
  variant?: "copy" | "display";
  /** pushes the start of the reveal later, in % of the scroll range (staggers stacked display lines) */
  delay?: number;
  className?: string;
}

/**
 * Text that reveals line by line while scrolling, like the original's split-line reveals:
 * each word sits in its own clipping box on a CSS view timeline, so words sharing a line
 * enter the window together and rise, clipped, into place. No JavaScript; static HTML and
 * browsers without scroll-driven animations show the text as is.
 */
export function AspensearchRevealText({ text, as: Tag = "p", variant = "copy", delay = 0, className }: AspensearchRevealTextProps) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <Tag className={cn("aspensearch-reveal", variant === "display" && "aspensearch-reveal-display", className)} style={{ "--aspensearch-reveal-delay": `${delay}%` } as CSSProperties}>
      {words.map((word, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="aspensearch-reveal-word">
            <span>{word}</span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
