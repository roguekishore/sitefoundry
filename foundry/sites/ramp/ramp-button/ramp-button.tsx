import type { ReactNode } from "react";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface RampButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: acid-lime fill · solid: near-black fill · secondary: warm light-grey fill ·
   * glass: frosted pill with a play icon, for media · link: hushed text with a trailing arrow
   */
  variant?: "primary" | "solid" | "secondary" | "glass" | "link";
  /** sm: 35px tall (header) · md: 43px tall (sections) · lg: 50px tall (banners) */
  size?: "sm" | "md" | "lg";
  /** the button's type when it isn't a link (e.g. "submit" inside a form) */
  type?: "button" | "submit";
  className?: string;
}

const sizes = {
  sm: "h-[2.1875rem] px-4 text-base",
  md: "h-[2.6875rem] px-4 text-base",
  lg: "h-[3.125rem] px-5 text-base",
};

const variants = {
  primary: "rounded-[calc(var(--radius)-6px)] bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--foreground))]",
  solid: "rounded-[calc(var(--radius)-6px)] bg-foreground text-background hover:bg-foreground/85",
  secondary: "rounded-[calc(var(--radius)-6px)] bg-secondary text-secondary-foreground hover:bg-accent",
  glass: "rounded-full bg-foreground/25 text-background ring-1 ring-background/30 ring-inset backdrop-blur-md hover:bg-foreground/40",
  link: "h-auto! px-0! text-muted-foreground hover:text-foreground",
};

/** Ramp's flat button: no shadow, one weight, just a colour change on hover. */
export function RampButton({ children, href, variant = "primary", size = "md", type = "button", className }: RampButtonProps) {
  const classes = cn(
    "group/btn inline-flex shrink-0 items-center justify-center gap-2 font-normal whitespace-nowrap transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    variant === "glass" && "text-[0.9375rem]",
    className,
  );
  const inner = (
    <>
      {variant === "glass" && <Play aria-hidden className="size-3.5 fill-current" strokeWidth={0} />}
      {children}
      {variant === "link" && (
        <ArrowRight
          aria-hidden
          className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:transition-none"
          strokeWidth={1.5}
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
