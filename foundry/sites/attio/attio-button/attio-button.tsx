import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface AttioButtonProps {
  /** the label */
  children: ReactNode;
  /** where it goes; without it the button is a real <button> (e.g. a form's submit) */
  href?: string;
  /** button type when there is no href */
  type?: "button" | "submit";
  /**
   * primary: the near-black fill with a faint top light that brightens on hover ·
   * outline: white with a grey hairline that darkens on hover ·
   * ghost: no frame, a grey pill on hover (nav links)
   */
  variant?: "primary" | "outline" | "ghost";
  /** md: 36px, 15px text (page CTAs) · sm: 32px, 13px semibold ("See more") · lg: 40px full-width (phone forms) */
  size?: "md" | "sm" | "lg";
  /** a small arrow after the label that nudges right on hover */
  arrow?: boolean;
  className?: string;
}

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_1px_2px_0_color-mix(in_oklab,var(--foreground)_22%,transparent)] " +
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] " +
    "before:bg-[radial-gradient(at_50%_-10%,color-mix(in_oklab,var(--primary-foreground)_26%,transparent),transparent_70%)] " +
    "before:opacity-40 before:transition-opacity before:duration-300 hover:before:opacity-100",
  outline: "border border-input bg-card text-foreground hover:border-muted-foreground/70",
  ghost: "text-foreground/85 hover:bg-accent hover:text-foreground",
};

const sizes = {
  md: "h-9 gap-1.5 rounded-[0.625rem] px-3 text-[0.9375rem] font-medium tracking-[-0.01em]",
  sm: "h-8 gap-1.5 rounded-lg px-2.5 text-[0.8125rem] font-semibold tracking-[-0.01em]",
  lg: "h-10 w-full gap-2 rounded-[0.625rem] px-4 text-[0.9375rem] font-semibold",
};

/** Attio's buttons: soft 10px corners, medium weight, a slow 0.3s colour change. */
export function AttioButton({ children, href, type = "button", variant = "outline", size = "md", arrow, className }: AttioButtonProps) {
  const classes = cn(
    "group/button relative isolate inline-flex shrink-0 items-center justify-center whitespace-nowrap",
    "transition-[color,background-color,border-color] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none motion-reduce:before:transition-none",
    variants[variant],
    sizes[size],
    className,
  );
  const inner = (
    <>
      <span className="relative">{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          strokeWidth={2}
          className="relative size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] group-hover/button:translate-x-0.5 motion-reduce:transition-none"
        />
      )}
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
