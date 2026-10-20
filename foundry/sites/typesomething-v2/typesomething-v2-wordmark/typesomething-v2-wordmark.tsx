import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./typesomething-v2-wordmark.css";

export interface TypesomethingV2WordmarkProps {
  /** the bold first half, in the text colour (e.g. "Quiet") */
  lead: string;
  /** the light second half, in the brand lime (e.g. "page") */
  tail: string;
  /** text after the tail in the text colour, e.g. a full stop */
  suffix?: string;
  /** show the blinking "_" cursor after the name */
  cursor?: boolean;
  /** the tail types itself out, holds and erases on a loop */
  animated?: boolean;
  /** a small mark after the name (icon or img) */
  mark?: ReactNode;
  className?: string;
}

/** Bold + light two-word wordmark. Renders inline, so it can sit inside a heading. */
export function TypesomethingV2Wordmark({ lead, tail, suffix, cursor, animated, mark, className }: TypesomethingV2WordmarkProps) {
  // steps(n) moves the clip one letter at a time; the clip width is n × an average letter
  const style = animated
    ? ({ "--ts-chars": tail.length, animationTimingFunction: `steps(${tail.length}, end)` } as CSSProperties)
    : undefined;
  return (
    <span className={cn("inline-flex items-baseline whitespace-nowrap", className)}>
      <span className="font-bold tracking-[-0.02em]">{lead}</span>
      <span className={cn("font-light text-primary", animated && "typesomething-v2-wordmark-tail")} style={style}>
        {tail}
      </span>
      {suffix && <span>{suffix}</span>}
      {cursor && (
        <span aria-hidden className="typesomething-v2-wordmark-cursor font-light text-primary">
          _
        </span>
      )}
      {mark && <span className="ml-[0.3em] inline-flex self-center [&_svg]:size-[0.9em]">{mark}</span>}
    </span>
  );
}
