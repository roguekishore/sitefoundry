import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WildAgButtonProps {
  /** the label (set in uppercase) */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /** paper: paper pill on bands; outline: light ring on card panels; gradient: brand gradient on light surfaces */
  variant?: "paper" | "outline" | "gradient";
  /** md: 54px tall (hero, form); sm: 45px (inside cards) */
  size?: "md" | "sm";
  /** for a <button>: the form button type */
  type?: "button" | "submit";
  className?: string;
}

// The original's hover: 0.3s on cubic-bezier(.25,.46,.45,.94).
const ease = "duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] motion-reduce:transition-none";

const surfaces = {
  paper: "bg-background text-foreground hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background",
  outline:
    "border-2 border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-foreground focus-visible:bg-primary-foreground focus-visible:text-foreground",
  gradient: "bg-linear-15 from-primary to-highlight text-primary-foreground",
};

export function WildAgButton({ children, href, variant = "paper", size = "md", type = "button", className }: WildAgButtonProps) {
  const classes = cn(
    "group/btn relative isolate inline-flex items-center justify-center overflow-clip rounded-full font-sans text-[0.84rem] leading-none font-bold whitespace-nowrap uppercase transition-colors",
    size === "md" ? "h-[3.375rem] px-[2.85rem]" : "h-[2.8rem] px-[2.4rem]",
    ease,
    surfaces[variant],
    className,
  );
  const inner = (
    <>
      {/* the gradient can't fade to a flat colour, so an espresso layer fades in over it */}
      {variant === "gradient" && (
        <span aria-hidden className={cn("absolute inset-0 -z-10 bg-foreground opacity-0 transition-opacity group-hover/btn:opacity-100", ease)} />
      )}
      {children}
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
