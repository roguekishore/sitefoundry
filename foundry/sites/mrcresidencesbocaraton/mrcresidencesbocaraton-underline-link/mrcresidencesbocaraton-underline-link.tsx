import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MrcresidencesbocaratonUnderlineLinkProps {
  href: string;
  /** the label */
  children: ReactNode;
  /** shrink: line at rest, draws back on hover. grow: no line at rest, draws in on hover */
  behaviour?: "shrink" | "grow";
  /** the line's duration in ms (the original uses 500 for content links, 300 for the nav) */
  duration?: 300 | 500;
  /** classes for the line itself (position, thickness) */
  lineClassName?: string;
  className?: string;
}

export function MrcresidencesbocaratonUnderlineLink({
  href,
  children,
  behaviour = "shrink",
  duration = 500,
  lineClassName,
  className,
}: MrcresidencesbocaratonUnderlineLinkProps) {
  return (
    <a href={href} className={cn("group/link relative inline-block", className)}>
      {children}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 -bottom-1 h-px bg-current transition-[scale] ease-in-out motion-reduce:transition-none",
          duration === 300 ? "duration-300" : "duration-500",
          behaviour === "shrink"
            ? "origin-left scale-x-100 group-hover/link:origin-right group-hover/link:scale-x-0"
            : "origin-right scale-x-0 group-hover/link:origin-left group-hover/link:scale-x-100",
          lineClassName,
        )}
      />
    </a>
  );
}
