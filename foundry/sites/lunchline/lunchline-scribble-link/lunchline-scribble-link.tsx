import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LunchlineScribbleLinkProps {
  /** the label, set bold, uppercase and tracked */
  children: ReactNode;
  /** a link target; without it the component renders a button */
  href?: string;
  /** button only: "submit" inside a form */
  type?: "button" | "submit";
  /** opens the link in a new tab */
  external?: boolean;
  className?: string;
}

/** The hand-drawn underline: one loose marker stroke, a second fainter one under it. */
export function LunchlineScribble({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 100 8" preserveAspectRatio="none" className={cn("block h-[0.35em] w-full overflow-visible", className)}>
      <path d="M1 3.6C18 2.2 37 4.6 55 3.4S86 2.6 99 3.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path d="M4 6.4C26 5.4 52 6.8 96 5.6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** A bold, uppercase, tracked link (or submit button) with a hand-drawn underline. Hover
    fades it a little, on the original's ease-out cubic. */
export function LunchlineScribbleLink({ children, href, type = "button", external, className }: LunchlineScribbleLinkProps) {
  const classes = cn(
    "relative inline-block pb-[0.45em] text-left font-sans text-[1.125rem] leading-none font-bold tracking-[0.08em] uppercase transition-opacity duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:opacity-70 motion-reduce:transition-none lg:text-[1.3125rem]",
    className,
  );
  const inner = (
    <>
      {children}
      <LunchlineScribble className="absolute inset-x-0 bottom-0" />
    </>
  );
  if (href) {
    return (
      <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cn(classes, "cursor-pointer")}>
      {inner}
    </button>
  );
}
