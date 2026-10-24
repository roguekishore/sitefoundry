import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface VercelMarkProps {
  /** the company name: shown next to the mark when showName is set, read to screen readers otherwise */
  brand: string;
  /** the mark itself (an svg or lucide icon); sized by the size prop */
  mark: ReactNode;
  /** where it links */
  href?: string;
  /** show the name as a wordmark after the mark */
  showName?: boolean;
  /** md: 22px (header) · sm: 16px (footer) */
  size?: "sm" | "md";
  className?: string;
}

/** Ink brand mark, optionally with its wordmark. */
export function VercelMark({ brand, mark, href = "#", showName, size = "md", className }: VercelMarkProps) {
  return (
    <a
      href={href}
      aria-label={showName ? undefined : brand}
      className={cn(
        "inline-flex items-center gap-2 text-foreground",
        size === "md" ? "[&_svg]:size-[1.375rem]" : "[&_svg]:size-4",
        className,
      )}
    >
      <span aria-hidden className="flex">
        {mark}
      </span>
      {showName ? <span className="text-lg font-semibold tracking-[-0.04em]">{brand}</span> : null}
    </a>
  );
}
