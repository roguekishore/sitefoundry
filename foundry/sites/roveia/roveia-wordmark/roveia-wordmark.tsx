import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RoveiaWordmarkProps {
  /** the company name, set in the theme's face */
  name: string;
  /** a small mark (e.g. a lucide icon) tucked above the first letter */
  mark?: ReactNode;
  /** link target (usually the home page) */
  href?: string;
  className?: string;
}

/** A plain text wordmark: the name at 500 weight with a tiny mark perched at its top-left. */
export function RoveiaWordmark({ name, mark, href, className }: RoveiaWordmarkProps) {
  const classes = cn("relative inline-flex items-center text-lg font-medium leading-none tracking-[0.01em] text-current", className);
  const inner = (
    <>
      {mark && (
        <span aria-hidden className="absolute -top-2 -left-2 text-muted-foreground [&_svg]:size-2.5">
          {mark}
        </span>
      )}
      {name}
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
