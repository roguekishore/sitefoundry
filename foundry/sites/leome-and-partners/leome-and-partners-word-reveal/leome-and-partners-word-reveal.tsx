import { Fragment } from "react";
import { cn } from "@foundry/foundry-utils";
import "./leome-and-partners-word-reveal.css";

export interface LeomeAndPartnersWordRevealProps {
  /** the text; it is split on spaces and every word rises out of its own mask */
  text: string;
  /**
   * "load": the words rise once as the page loads (use it in the first screen).
   * "view": the words rise as they scroll into view; words on one line move together and
   * the next line follows, which reads as the original's line-by-line reveal.
   */
  trigger?: "load" | "view";
  /** load only: seconds before the first word starts */
  delay?: number;
  /** load only: seconds between one word and the next */
  stagger?: number;
  className?: string;
}

/**
 * Inline text whose words rise out of clipping masks. Put it inside a heading or paragraph;
 * it takes the font, size and colour of its parent. Without scroll-timeline support, or with
 * reduced motion, the text simply stands in place.
 */
export function LeomeAndPartnersWordReveal({
  text,
  trigger = "view",
  delay = 0,
  stagger = 0.06,
  className,
}: LeomeAndPartnersWordRevealProps) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <span className={cn("leome-and-partners-word-reveal", className)} data-trigger={trigger}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="leome-and-partners-word-reveal-mask">
            <span
              className="leome-and-partners-word-reveal-word"
              style={trigger === "load" ? { animationDelay: `${(delay + i * stagger).toFixed(2)}s` } : undefined}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </span>
  );
}
