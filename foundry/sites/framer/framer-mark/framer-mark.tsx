import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface FramerMarkProps {
  /** the company name */
  brand: string;
  /** the icon before the name (an svg or lucide icon) */
  mark: ReactNode;
  /** where it links */
  href?: string;
  /** show the icon only (the name stays for screen readers) */
  hideName?: boolean;
  className?: string;
}

/** Icon + bold name. */
export function FramerMark({ brand, mark, href = "/", hideName, className }: FramerMarkProps) {
  return (
    <a href={href} className={cn("inline-flex items-center gap-2 text-foreground", className)}>
      <span aria-hidden className="flex size-5 items-center justify-center [&_svg]:size-5">
        {mark}
      </span>
      <span className={cn("text-[0.9375rem] font-semibold tracking-[-0.01em]", hideName && "sr-only")}>{brand}</span>
    </a>
  );
}
