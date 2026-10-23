import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface BrexButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: orange fill, lighter orange on hover · link: orange text with a trailing arrow */
  variant?: "solid" | "link";
  /** sm: 36px tall (header) · md: 40px (inside the email form) · lg: 48px (closing band) */
  size?: "sm" | "md" | "lg";
  /** the button's type when it isn't a link (e.g. "submit" inside a form) */
  type?: "button" | "submit";
  className?: string;
}

const sizes = {
  sm: "h-9 rounded-sm px-2.5 text-sm lg:px-9",
  md: "h-10 rounded-[calc(var(--radius)-6px)] px-4 text-sm",
  lg: "h-12 rounded-lg px-9 text-base",
};

/** Brex's flat button: one weight, no shadow, the fill eases to a lighter orange on hover. */
export function BrexButton({ children, href, variant = "solid", size = "sm", type = "button", className }: BrexButtonProps) {
  const classes = cn(
    "group/btn inline-flex shrink-0 items-center justify-center gap-2 font-medium tracking-[-0.02em] whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variant === "solid"
      ? cn(
          "border border-primary bg-primary text-primary-foreground transition-colors duration-500 ease-in-out hover:border-highlight hover:bg-highlight motion-reduce:transition-none",
          sizes[size],
        )
      : "text-base font-normal text-primary transition-colors duration-150 ease-linear hover:text-highlight motion-reduce:transition-none",
    className,
  );
  const inner = (
    <>
      {children}
      {variant === "link" && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 motion-reduce:transition-none"
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
