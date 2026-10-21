import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./rioproperty-arrow-link.css";

export interface RiopropertyArrowLinkProps {
  /** the label, set in the wide display face in capitals */
  children: ReactNode;
  /** where it goes; without it the link is a <button> */
  href?: string;
  /** for a <button>: the form button type */
  type?: "button" | "submit";
  /** primary: violet (on paper); highlight: yellow (on violet or indigo) */
  tone?: "primary" | "highlight";
  /** fade in with the scroll as it enters the window, as the original's links do */
  reveal?: boolean;
  className?: string;
}

// The original's hover timing: 0.75s on a long, snappy ease.
const ease = "duration-[750ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none";

export function RiopropertyArrowLink({ children, href, type = "button", tone = "primary", reveal = false, className }: RiopropertyArrowLinkProps) {
  const classes = cn(
    "group/arrow inline-flex items-center gap-2.5 font-display text-[0.9375rem] leading-none font-semibold uppercase lg:text-base",
    tone === "primary" ? "text-primary" : "text-highlight",
    reveal && "rioproperty-arrow-link-reveal",
    className,
  );
  const inner = (
    <>
      <span className="relative py-1">
        {children}
        {/* the underline draws in from the left on hover */}
        <span
          aria-hidden
          className={cn("absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-[scale] group-hover/arrow:scale-x-100 group-focus-visible/arrow:scale-x-100", ease)}
        />
      </span>
      <ArrowUpRight
        aria-hidden
        strokeWidth={1.25}
        className={cn("size-4 transition-[translate] group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5", ease)}
      />
    </>
  );
  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={classes}>
      {inner}
    </button>
  );
}
