import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GranolaWordmarkProps {
  /** the company name, set in type (no logo) */
  name: string;
  /** a small mark before the name (e.g. a lucide icon); inline mode only */
  mark?: ReactNode;
  /** where it links; without it the wordmark is plain text */
  href?: string;
  /** inline: header size · fill: stretched to the full width of its container (footer) */
  mode?: "inline" | "fill";
  className?: string;
}

export function GranolaWordmark({ name, mark, href, mode = "inline", className }: GranolaWordmarkProps) {
  const body =
    mode === "fill" ? (
      // SVG text stretched with textLength, so the name always spans the container exactly.
      <svg viewBox="0 0 1000 230" role="img" aria-label={name} className="block h-auto w-full overflow-visible">
        <text
          x="0"
          y="182"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          className="fill-current font-sans font-bold"
          style={{ fontSize: 240, letterSpacing: "-0.04em" }}
        >
          {name}
        </text>
      </svg>
    ) : (
      <span className="inline-flex items-center gap-1 font-sans text-[1.375rem] leading-none font-bold tracking-[-0.04em] [&_svg]:size-[1.15em] [&_svg]:stroke-[2.6]">
        {mark}
        {name}
      </span>
    );

  if (href) {
    return (
      <a href={href} className={cn("inline-block text-foreground", mode === "fill" && "block", className)}>
        {body}
      </a>
    );
  }
  return <div className={cn("text-foreground", mode === "inline" && "inline-block", className)}>{body}</div>;
}
