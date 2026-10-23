import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface LevelsButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** sm: 36px (header) · md: 44–48px (panels, plan cards) · lg: 52px (hero, closing band) */
  size?: "sm" | "md" | "lg";
  /** add a small arrow after the label that nudges right on hover */
  arrow?: boolean;
  /** stretch to the full width of the parent */
  block?: boolean;
  /** button type when it renders a button */
  type?: "button" | "submit";
  className?: string;
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm lg:h-12",
  lg: "h-[3.25rem] px-7 text-base",
};

/** The site's button: primary fill (ink on light grounds, white inside .dark bands), 8px corners, 150ms hover. */
export function LevelsButton({ children, href, size = "md", arrow, block, type = "button", className }: LevelsButtonProps) {
  const classes = cn(
    "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary font-semibold whitespace-nowrap text-primary-foreground hover:bg-primary/90",
    "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/button:translate-x-0.5 motion-reduce:transition-none"
          strokeWidth={2}
        />
      ) : null}
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <button type={type} className={classes}>
      {inner}
    </button>
  );
}
