import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ClerkButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: graphite gradient · outline: white with a hairline and soft shadow · primary: brand violet */
  variant?: "solid" | "outline" | "primary";
  /** sm: 28px · md: 32px · lg: 36px tall */
  size?: "sm" | "md" | "lg";
  /** small icon before the label (e.g. a provider mark) */
  icon?: ReactNode;
  /** small play-style caret after the label */
  caret?: boolean;
  /** stretch to the container's width */
  block?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-7 gap-1.5 rounded-md px-3 text-xs",
  md: "h-8 gap-2 rounded-md px-3.5 text-[0.8125rem]",
  lg: "h-9 gap-2 rounded-lg px-4 text-[0.8125rem]",
};

const variants = {
  // the inner highlight on top and the 1px ring are what make it read as "pressable glass"
  solid:
    "bg-linear-to-b from-[color-mix(in_oklab,var(--foreground)_82%,var(--background))] to-foreground text-background shadow-[inset_0_1px_0_color-mix(in_oklab,var(--background)_14%,transparent),0_0_0_1px_var(--foreground),0_1px_2px_color-mix(in_oklab,var(--foreground)_30%,transparent)] hover:from-[color-mix(in_oklab,var(--foreground)_74%,var(--background))]",
  outline:
    "bg-card text-card-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_9%,transparent),0_1px_2px_color-mix(in_oklab,var(--foreground)_6%,transparent)] hover:bg-muted",
  primary:
    "bg-primary text-primary-foreground shadow-[inset_0_1px_0_color-mix(in_oklab,var(--primary-foreground)_20%,transparent),0_0_0_1px_var(--primary)] hover:bg-primary/90",
};

export function ClerkButton({ children, href, variant = "solid", size = "md", icon, caret, block, onClick, className }: ClerkButtonProps) {
  const classes = cn(
    "relative inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-[background-color,color,box-shadow] duration-200 motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {icon && <span className="flex size-4 items-center justify-center [&_svg]:size-4">{icon}</span>}
      {children}
      {caret && <Caret className="size-2 opacity-80" />}
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

/** The tiny solid play caret Clerk puts after actions. */
export function Caret({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 6 8" className={cn("shrink-0 fill-current", className)}>
      <path d="M0 0.8v6.4a.5.5 0 0 0 .78.42l4.8-3.2a.5.5 0 0 0 0-.84L.78.38A.5.5 0 0 0 0 .8Z" />
    </svg>
  );
}
