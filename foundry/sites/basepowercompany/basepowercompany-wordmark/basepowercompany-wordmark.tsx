import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BasepowercompanyWordmarkProps {
  /** the company name */
  name: string;
  /** a small mark before the name (e.g. a lucide icon) */
  mark?: ReactNode;
  /** where it links; without it the wordmark is plain text */
  href?: string;
  className?: string;
}

export function BasepowercompanyWordmark({ name, mark, href, className }: BasepowercompanyWordmarkProps) {
  const classes = cn(
    "inline-flex items-center gap-1.5 font-display text-[1.3125rem] leading-none font-extrabold tracking-[-0.03em] lowercase [&_svg]:size-[1.05em] [&_svg]:stroke-[2.5]",
    className,
  );
  const inner = (
    <>
      {mark}
      <span>{name}</span>
    </>
  );
  return href ? (
    <a href={href} className={classes} aria-label={name}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
