import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HalodentalVagueFlashMarkProps {
  /** brand wordmark text */
  name: string;
  /** optional custom emblem; defaults to two tilted geometric capsules */
  emblem?: ReactNode;
  /** link target when interactive */
  href?: string;
  className?: string;
}

function DefaultEmblem() {
  return (
    <svg aria-hidden viewBox="0 0 68 38" className="h-[1.9375rem] w-[3.35rem] shrink-0 fill-current lg:h-10 lg:w-[4.25rem]">
      <ellipse cx="21" cy="19" rx="18" ry="8.5" transform="rotate(-38 21 19)" />
      <ellipse cx="45" cy="19" rx="18" ry="8.5" transform="rotate(-38 45 19)" />
    </svg>
  );
}

/**
 * Paired tilted capsule emblem + clean regular-weight wordmark.
 */
export function HalodentalVagueFlashMark({ name, emblem, href, className }: HalodentalVagueFlashMarkProps) {
  const inner = (
    <>
      {emblem ?? <DefaultEmblem />}
      <span className="font-display text-[2rem] leading-none font-normal tracking-[-0.02em] lg:text-[2.625rem]">
        {name}
      </span>
    </>
  );
  const classes = cn("inline-flex items-center gap-3 text-foreground lg:gap-4", className);
  return href ? (
    <a href={href} aria-label={name} className={classes}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
