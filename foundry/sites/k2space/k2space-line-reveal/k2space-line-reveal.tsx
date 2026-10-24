import { Fragment } from "react";
import { cn } from "@foundry/foundry-utils";
import "./k2space-line-reveal.css";

export interface K2spaceLineRevealProps {
  /** the words; "\n" starts a new line */
  text: string;
  /** the element to render */
  as?: "h1" | "h2" | "h3" | "p" | "div";
  /** how far each line rises while it fades in */
  rise?: "sm" | "md" | "lg";
  /** apply the "\n" breaks on desktop (1024px+) only; phones wrap naturally */
  desktopBreaksOnly?: boolean;
  /** size, weight, colour */
  className?: string;
}

/**
 * Text that reveals line by line while it scrolls up the window (opacity 0 → 1, rising 17–36px),
 * scrubbed with the scroll like a GSAP split-lines reveal. Each word is an inline-block with its
 * own view timeline; words that share a line share a position, so the line moves as one.
 */
export function K2spaceLineReveal({ text, as: Tag = "h2", rise = "md", desktopBreaksOnly = false, className }: K2spaceLineRevealProps) {
  const lines = text.split("\n");
  return (
    <Tag className={cn("k2space-line-reveal", `k2space-line-reveal-${rise}`, className)}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && (desktopBreaksOnly ? <><br className="max-lg:hidden" /><span className="lg:hidden">{" "}</span></> : <br />)}
          {line
            .split(/\s+/)
            .filter(Boolean)
            .map((word, wi, words) => (
              <Fragment key={wi}>
                <span className="k2space-line-reveal-word">{word}</span>
                {wi < words.length - 1 && " "}
              </Fragment>
            ))}
        </Fragment>
      ))}
    </Tag>
  );
}
