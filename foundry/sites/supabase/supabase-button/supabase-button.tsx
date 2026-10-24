import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SupabaseButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: green fill · outline: white fill with a hairline border · ghost: no fill until hover */
  variant?: "primary" | "outline" | "ghost";
  /** md: 38px tall, 14px label (hero, closing band) · sm: 26px tall, 12px label (header, footer) */
  size?: "md" | "sm";
  /** fully round ends (the "read docs" chip, tabs) instead of 6px corners */
  pill?: boolean;
  /** button type when it renders a button */
  type?: "button" | "submit";
  /** click handler when it renders a button */
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground border-foreground/10 hover:bg-primary/90",
  outline: "bg-card text-foreground border-input hover:bg-accent",
  ghost: "border-transparent text-muted-foreground hover:bg-foreground/4 hover:text-foreground",
};

const sizes = {
  md: "h-[2.375rem] px-4 text-sm",
  sm: "h-[1.625rem] px-2.5 text-xs",
};

/** The site's button: green or white, 6px corners or a pill, a 200ms ease-out hover. */
export function SupabaseButton({
  children,
  href,
  variant = "primary",
  size = "md",
  pill,
  type = "button",
  onClick,
  className,
}: SupabaseButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 border font-medium whitespace-nowrap shadow-xs shadow-foreground/5 [&_svg]:size-3.5",
    "transition-[background-color,border-color,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
    pill ? "rounded-full" : "rounded-md",
    variant === "ghost" && "shadow-none",
    className,
  );
  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
