import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface KononenkogroupLinkProps {
  href: string;
  /** the link's label */
  children: ReactNode;
  /** the current page: underlined at rest, and the underline retracts to the right on hover */
  active?: boolean;
  /** underlined at rest like the active link, without marking it as the current page */
  underlined?: boolean;
  className?: string;
}

// The original's link timing: 0.6s on a long soft ease-out.
const draw = "transition-[scale] duration-[600ms] ease-[cubic-bezier(0.17,0.84,0.44,1)] motion-reduce:transition-none";

/**
 * A plain text link whose 1px underline draws in from the left on hover. The active link is
 * underlined at rest and its underline slides away to the right on hover.
 */
export function KononenkogroupLink({ href, children, active = false, underlined = false, className }: KononenkogroupLinkProps) {
  return (
    <a href={href} aria-current={active ? "page" : undefined} className={cn("group/link relative inline-block", className)}>
      {children}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 bottom-[-0.08em] h-px bg-current",
          draw,
          active || underlined
            ? "origin-right scale-x-100 group-hover/link:scale-x-0"
            : "origin-right scale-x-0 group-hover/link:origin-left group-hover/link:scale-x-100",
        )}
      />
    </a>
  );
}
