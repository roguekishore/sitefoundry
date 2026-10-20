import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface TypesomethingV2ButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: acid lime pill · outline: ink hairline pill on a clear ground */
  variant?: "primary" | "outline";
  /** sm: 40px tall (header) · md: 48px tall (sections) */
  size?: "sm" | "md";
  /** a small arrow after the label */
  arrow?: boolean;
  /** stretch to the container's width (phones) */
  block?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-10 gap-1.5 px-4 text-[0.875rem]",
  md: "h-12 gap-2 px-5 text-base",
};

const variants = {
  primary: "bg-primary text-primary-foreground",
  outline: "border border-foreground bg-transparent text-foreground",
};

export function TypesomethingV2Button({ children, href, variant = "primary", size = "md", arrow, block, onClick, className }: TypesomethingV2ButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-full font-bold whitespace-nowrap",
    // the original: color, background-color, transform 0.16s ease; hover = ink fill + 2px lift
    "transition-[color,background-color,transform] duration-[160ms] ease-[ease] hover:-translate-y-0.5 hover:bg-foreground hover:text-background",
    "focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_30%,transparent)]",
    "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
    sizes[size],
    variants[variant],
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4" strokeWidth={2.25} />}
    </>
  );
  return href ? (
    <a href={href} className={classes} onClick={onClick}>
      {inner}
    </a>
  ) : (
    <button type="button" className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
