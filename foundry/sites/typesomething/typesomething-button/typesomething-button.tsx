import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface TypesomethingButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: acid-green pill · outline: hairline pill in the text colour · ghost: no border */
  variant?: "primary" | "outline" | "ghost";
  /** sm: 40px tall (headers) · md: 48px tall */
  size?: "sm" | "md";
  /** icon after the label (e.g. an arrow) */
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-10 px-5 text-[0.84rem]",
  md: "h-12 px-6 text-[0.92rem]",
};

const variants = {
  primary: "bg-primary text-primary-foreground",
  outline: "border border-foreground text-foreground",
  ghost: "text-foreground",
};

/** Pill button. On hover every style fills with the text colour, flips its label and lifts 2px. */
export function TypesomethingButton({ children, href, variant = "primary", size = "md", icon, onClick, className }: TypesomethingButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-sans font-bold whitespace-nowrap",
    "transition-[color,background-color,transform] duration-[160ms] ease-[ease] hover:-translate-y-0.5 hover:bg-foreground hover:text-background motion-reduce:transition-none motion-reduce:hover:translate-y-0",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {icon && <span className="flex items-center [&_svg]:size-4">{icon}</span>}
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
