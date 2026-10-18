import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
  ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
};

const sizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({ children, href, variant = "primary", size = "md", onClick, className }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
    className,
  );
  return href ? (
    <a href={href} className={classes} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
