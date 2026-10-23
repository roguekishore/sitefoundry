import { Fragment, type CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./thirdway-heading.css";

export interface ThirdwayHeadingProps {
  /** the heading; "\n" starts a new line, and each line rises into place in turn */
  text: string;
  /** the heading element (default h2) */
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
}

/** A large neo-grotesk heading (40px phones, 72px desktop) whose lines lift and fade in as it scrolls into view. */
export function ThirdwayHeading({ text, as: Tag = "h2", className }: ThirdwayHeadingProps) {
  const lines = text.split("\n");
  return (
    <Tag className={cn("text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] font-[560] tracking-[-0.06em] [word-spacing:-0.07em] text-balance", className)}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          <span className="thirdway-heading-line inline-block" style={{ "--i": i } as CSSProperties}>
            {line}
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
