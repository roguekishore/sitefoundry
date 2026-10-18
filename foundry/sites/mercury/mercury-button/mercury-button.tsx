import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface MercuryButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: periwinkle fill · secondary: a quiet tinted pill · glass: frosted, see-through
   * pill for photo or art backdrops · link: underlined text, no pill
   */
  variant?: "primary" | "secondary" | "glass" | "link";
  /** sm: 36px tall (headers, cards) · md: 40px tall */
  size?: "sm" | "md";
  /** a small outward arrow after the label, for links that leave the page */
  external?: boolean;
  /** the button's type when it isn't a link (e.g. "submit" inside a form) */
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-9 px-4 text-[0.9375rem]",
  md: "h-10 px-5 text-base",
};

const variants = {
  primary: "rounded-full bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--primary-foreground))]",
  secondary: "rounded-full bg-secondary text-secondary-foreground hover:bg-accent",
  glass: "rounded-full bg-foreground/10 text-foreground ring-1 ring-foreground/25 ring-inset backdrop-blur-md hover:bg-foreground/20",
  link: "h-auto! px-0! text-foreground underline decoration-1 underline-offset-[0.3em] hover:decoration-foreground/40",
};

/** Mercury's pill: medium weight, no shadow, just a colour change on hover. */
export function MercuryButton({ children, href, variant = "primary", size = "md", external, type = "button", onClick, className }: MercuryButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-1.5 font-[520] whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {external && <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.75} />}
    </>
  );
  return href ? (
    <a href={href} className={classes} onClick={onClick}>
      {inner}
    </a>
  ) : (
    <button type={type} className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
