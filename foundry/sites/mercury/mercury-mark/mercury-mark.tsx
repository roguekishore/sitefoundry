import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MercuryMarkProps {
  /** the brand name, set in letter-spaced capitals */
  name: string;
  /** your own emblem; leave out for the fine-line star-in-a-ring */
  emblem?: ReactNode;
  /** link target (usually the home page) */
  href?: string;
  className?: string;
}

/** Our stand-in emblem: a ring, a tilted orbit and a four-point star, all in hairline strokes. */
function Emblem() {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className="size-full fill-none stroke-current" strokeWidth={1.3}>
      <circle cx="16" cy="16" r="14.5" />
      <ellipse cx="16" cy="16" rx="11" ry="5" transform="rotate(-30 16 16)" />
      <path d="M16 7.5c.6 5.2 3.3 7.9 8.5 8.5-5.2.6-7.9 3.3-8.5 8.5-.6-5.2-3.3-7.9-8.5-8.5 5.2-.6 7.9-3.3 8.5-8.5Z" />
    </svg>
  );
}

/** Emblem + wordmark, as Mercury sets its logo: the name small, uppercase and spaced wide. */
export function MercuryMark({ name, emblem, href, className }: MercuryMarkProps) {
  const inner = (
    <>
      <span className="size-8 shrink-0 [&>svg]:size-full">{emblem ?? <Emblem />}</span>
      <span className="text-[0.9375rem] font-[520] tracking-[0.24em] uppercase">{name}</span>
    </>
  );
  const classes = cn("inline-flex items-center gap-3 text-foreground", className);
  return href ? (
    <a href={href} className={classes} aria-label={name}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
