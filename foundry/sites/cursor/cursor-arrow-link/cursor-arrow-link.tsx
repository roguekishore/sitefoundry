import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface CursorArrowLinkProps {
  /** the label */
  children: ReactNode;
  href: string;
  /** right: more on this site · up-right: leaves for another page · down: a download · none */
  arrow?: "right" | "up-right" | "down" | "none";
  className?: string;
}

const icons = { right: ArrowRight, "up-right": ArrowUpRight, down: ArrowDown };

/** Orange text with a thin arrow after it; softens to 75% on hover. */
export function CursorArrowLink({ children, href, arrow = "right", className }: CursorArrowLinkProps) {
  const Icon = arrow === "none" ? null : icons[arrow];
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-[0.25em] text-highlight transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-highlight/75 motion-reduce:transition-none",
        className,
      )}
    >
      {children}
      {Icon && <Icon aria-hidden className="size-[0.95em] shrink-0" strokeWidth={1.75} />}
    </a>
  );
}
