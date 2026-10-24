import { Fragment, type CSSProperties, type ElementType } from "react";
import { cn } from "@foundry/foundry-utils";
import "./castelion-lines.css";

export interface CastelionLinesProps {
  /** the text, one entry per desktop line (phones let the entries flow and wrap) */
  lines: string[];
  /** the element to render, e.g. "h2" or "p" */
  as?: ElementType;
  /** mask: each line slides up out of a clip (titles) · fade: each line rises 28px and fades in (copy) */
  variant?: "mask" | "fade";
  /** where the stagger starts counting, to continue it from text above */
  startIndex?: number;
  className?: string;
}

/** Text revealed line by line as it scrolls into view. */
export function CastelionLines({ lines, as: Tag = "p", variant = "mask", startIndex = 0, className }: CastelionLinesProps) {
  return (
    <Tag className={cn("castelion-lines", className)} data-variant={variant}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br className="max-lg:hidden" />}
          {i > 0 && " "}
          <span
            className={cn(
              "castelion-lines-line inline-block align-top",
              variant === "mask" && "-mb-[0.14em] overflow-clip pb-[0.14em]",
            )}
            style={{ "--castelion-line-i": startIndex + i } as CSSProperties}
          >
            <span className="castelion-lines-inner block">{line}</span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
