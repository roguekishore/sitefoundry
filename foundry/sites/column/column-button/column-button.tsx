import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ColumnButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: navy fill · secondary: white on a hairline ring */
  variant?: "primary" | "secondary";
  /** trailing icon: an arrow whose stem draws in on hover, a chevron for menus, or none */
  icon?: "arrow" | "menu" | "none";
  /** stretch to the container's width on phones (below 1024px) */
  fullOnMobile?: boolean;
  onClick?: () => void;
  className?: string;
}

const variants = {
  // Navy with a faint white sheen along the top edge; hover lifts it a step towards the ring colour.
  primary:
    "bg-primary text-primary-foreground shadow-[0_0_0_1px_var(--primary),inset_0_1px_0_color-mix(in_oklab,var(--primary-foreground)_18%,transparent),0_1px_2px_color-mix(in_oklab,var(--foreground)_20%,transparent)] hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--ring))] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_88%,var(--ring)),0_2px_4px_color-mix(in_oklab,var(--foreground)_25%,transparent)]",
  // White with a 1px ring and a 1px drop; hover tints the fill and darkens the ring.
  secondary:
    "bg-secondary text-secondary-foreground shadow-[0_1px_1px_color-mix(in_oklab,var(--foreground)_6%,transparent),0_0_0_1px_var(--border)] hover:bg-accent hover:shadow-[0_1px_1px_color-mix(in_oklab,var(--foreground)_15%,transparent),0_0_0_1px_color-mix(in_oklab,var(--foreground)_18%,transparent)]",
};

/** A chevron with a stem: the stem is drawn on hover (dash offset) as the chevron slides right. */
function Arrow() {
  return (
    <svg aria-hidden viewBox="0 0 12 12" fill="none" className="size-3 shrink-0 overflow-visible" strokeWidth={1.6} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M1 6h8.5"
        strokeDasharray="9"
        strokeDashoffset="9"
        className="-translate-x-[3px] transition-[stroke-dashoffset,translate] duration-200 ease-out group-hover:translate-x-0 group-hover:[stroke-dashoffset:0] motion-reduce:transition-none"
      />
      <path d="M5.5 2l4 4-4 4" className="-translate-x-[3px] transition-[translate] duration-200 ease-out group-hover:translate-x-0 motion-reduce:transition-none" />
    </svg>
  );
}

export function ColumnButton({ children, href, variant = "primary", icon = "arrow", fullOnMobile, onClick, className }: ColumnButtonProps) {
  const classes = cn(
    "group inline-flex h-[2.375rem] shrink-0 items-center justify-center gap-2 rounded-lg px-4 font-sans text-[0.9375rem] font-medium tracking-[-0.01em] whitespace-nowrap",
    "transition-[background-color,box-shadow,color] duration-200 ease-[ease] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    fullOnMobile && "w-full lg:w-auto",
    className,
  );
  const inner = (
    <>
      {children}
      {icon === "arrow" && <Arrow />}
      {icon === "menu" && <ChevronDown aria-hidden className="size-4 shrink-0" strokeWidth={1.75} />}
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
