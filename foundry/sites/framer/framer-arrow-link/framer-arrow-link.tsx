import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface FramerArrowLinkProps {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
  /** sm: 14px (card actions) · lg: 18px (cell labels) · xs: 12px */
  size?: "xs" | "sm" | "lg";
  /** -1 keeps a duplicate (e.g. a ticker's second copy) out of the tab order */
  tabIndex?: number;
  className?: string;
}

const sizes = {
  xs: "gap-0.5 text-xs [&_svg]:size-3",
  sm: "gap-1 text-sm [&_svg]:size-3.5",
  lg: "gap-1.5 text-lg tracking-[-0.01em] [&_svg]:size-4.5",
};

/** Text link with an arrow that slides 2px right on hover. */
export function FramerArrowLink({ label, href, size = "sm", tabIndex, className }: FramerArrowLinkProps) {
  return (
    <a href={href} tabIndex={tabIndex} className={cn("group/arrow inline-flex items-center text-foreground", sizes[size], className)}>
      {label}
      <ArrowRight
        aria-hidden
        strokeWidth={2}
        className="transition-transform duration-200 ease-out group-hover/arrow:translate-x-0.5 motion-reduce:transition-none"
      />
    </a>
  );
}
