import { Fragment, type CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./wiemer-v2-split-heading.css";

export interface WiemerV2SplitHeadingProps {
  /** the heading's text; a line break ("\n") forces a new line */
  text: string;
  /** which element to render */
  as?: "h1" | "h2" | "h3" | "p";
  /** sizes and colour come from here (the component only sets the motion) */
  className?: string;
}

/**
 * A heading whose letters rise 1.2em from under their line and fade in, one after another
 * from left to right, as it scrolls into view. CSS only: the static HTML is the plain text.
 */
export function WiemerV2SplitHeading({ text, as: Tag = "h2", className }: WiemerV2SplitHeadingProps) {
  const total = Math.max(1, text.replace(/\s/g, "").length - 1);
  let n = 0;
  return (
    <Tag aria-label={text.replace(/\n/g, " ")} className={cn("wiemer-v2-split-heading", className)}>
      <span aria-hidden="true">
        {text.split("\n").map((line, l) => (
          <Fragment key={l}>
            {l > 0 && <br />}
            {line.split(" ").map((word, w) => (
              <Fragment key={w}>
                {w > 0 && " "}
                <span className="inline-block overflow-clip whitespace-nowrap [overflow-clip-margin:0.2em]">
                  {[...word].map((char, c) => (
                    <span key={c} className="wiemer-v2-split-heading-char inline-block" style={{ "--wiemer-v2-p": n++ / total } as CSSProperties}>
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
