import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HulyButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** glow: light pill with an ember orb inside · outline: dark pill with a hairline border */
  variant?: "glow" | "outline";
  /** sm: 32px tall, for headers · md: 40px tall */
  size?: "sm" | "md";
  /** small icon before the label (e.g. a brand mark) */
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-8 px-4 text-[0.6875rem]",
  md: "h-10 px-12 text-xs",
};

const variants = {
  glow: "border border-foreground/60 bg-primary text-primary-foreground shadow-[4px_0_22px_-4px_var(--highlight)]",
  outline: "border border-foreground/15 bg-background text-foreground hover:border-foreground/30",
};

export function HulyButton({ children, href, variant = "outline", size = "md", icon, onClick, className }: HulyButtonProps) {
  const classes = cn(
    "group relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full font-bold uppercase tracking-[-0.015em] whitespace-nowrap transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    className,
  );
  const inner = (
    <>
      {variant === "glow" && (
        // The ember: a soft orb that rests near the right end and slides to the middle on hover.
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 -z-10 flex w-full items-center justify-center translate-x-[38%] transition-transform duration-500 ease-out group-hover:translate-x-0 motion-reduce:transition-none"
        >
          <span className="size-[7.5rem] shrink-0 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--highlight)_25%,var(--primary))_10%,color-mix(in_oklab,var(--highlight)_80%,var(--primary))_32%,color-mix(in_oklab,var(--highlight)_45%,transparent)_55%,transparent_92%)]" />
        </span>
      )}
      {icon && <span className="flex size-5 items-center justify-center [&_svg]:size-4">{icon}</span>}
      {children}
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
