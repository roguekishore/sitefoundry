import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface FunctionhealthButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: brand fill · outline: brand hairline on the page colour · light: page-coloured pill with brand text (for photos) */
  variant?: "solid" | "outline" | "light";
  /** md: 50px tall · sm: 44px tall */
  size?: "md" | "sm";
  /** button type when no href is given */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  solid: "border-primary bg-primary text-primary-foreground hover:border-foreground hover:bg-foreground",
  outline: "border-primary bg-background text-primary hover:border-foreground hover:bg-foreground hover:text-background",
  light: "border-background bg-background text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
};

const sizes = { md: "h-[3.125rem] px-6 text-base", sm: "h-11 px-5 text-[0.9375rem]" };

export function FunctionhealthButton({ children, href, variant = "solid", size = "md", type = "button", className }: FunctionhealthButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border font-semibold whitespace-nowrap",
    "transition-[background-color,color,border-color] duration-200 motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
    className,
  );
  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
