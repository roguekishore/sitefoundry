import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ReckonerButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** secondary: sand fill (the usual one) · outline: hairline only · primary: solid primary fill */
  variant?: "secondary" | "outline" | "primary";
  /** md: 46px tall, 14px text · lg: 56px tall, 16px text (the subscribe button) */
  size?: "md" | "lg";
  /** render a plain span styled as a button, for use inside a card that is already a link */
  asSpan?: boolean;
  /** button type when it isn't a link */
  type?: "button" | "submit";
  /** stretch to the container's width */
  block?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  md: "h-[2.875rem] px-6 text-sm",
  lg: "h-14 px-6 text-base",
};

// All three land on the primary colour on hover: merlot on light themes, linen on dark ones.
const variants = {
  secondary:
    "border-transparent bg-secondary text-secondary-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
  outline: "border-border bg-transparent text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
  primary: "border-transparent bg-primary text-primary-foreground hover:bg-glow hover:text-foreground dark:hover:text-primary-foreground",
};

/** A square button that eases its colours over 0.5s on hover, like the original's. */
export function ReckonerButton({
  children,
  href,
  variant = "secondary",
  size = "md",
  asSpan,
  type = "button",
  block,
  onClick,
  className,
}: ReckonerButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border font-medium leading-none tracking-[0.01em] whitespace-nowrap",
    "transition-[background-color,border-color,color] duration-500 ease-[ease] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    block && "w-full",
    className,
  );
  if (asSpan) return <span className={classes}>{children}</span>;
  return href ? (
    <a href={href} className={classes} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
