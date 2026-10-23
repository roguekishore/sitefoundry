import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface UnitArrowCircleProps {
  /** which way the arrow points: up-right (open), left or right (carousel) */
  direction?: "up-right" | "left" | "right";
  /** sm: 34px (inside cards) · md: 44px (carousel controls) */
  size?: "sm" | "md";
  /** a link when set; otherwise a decorative circle (or a button when onClick is given) */
  href?: string;
  /** makes it a button (carousel controls) */
  onClick?: () => void;
  /** screen-reader label (required for links and buttons) */
  label?: string;
  /** greys it out (a carousel at its end) */
  disabled?: boolean;
  className?: string;
}

const icons = { "up-right": ArrowUpRight, left: ArrowLeft, right: ArrowRight };

/** The hairline circle with an arrow that sits in the corner of every card. */
export function UnitArrowCircle({ direction = "up-right", size = "sm", href, onClick, label, disabled, className }: UnitArrowCircleProps) {
  const Icon = icons[direction];
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-full border border-input text-foreground",
    "transition-[background-color,border-color,opacity] duration-[425ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none",
    "hover:border-foreground/60 group-hover/card:border-foreground/60",
    size === "sm" ? "size-[2.125rem]" : "size-11",
    disabled && "pointer-events-none opacity-50",
    className,
  );
  const icon = <Icon aria-hidden className={size === "sm" ? "size-3.5" : "size-[1.125rem]"} strokeWidth={1.75} />;
  if (href) {
    return (
      <a href={href} aria-label={label} className={classes}>
        {icon}
      </a>
    );
  }
  if (onClick) {
    return (
      <button type="button" aria-label={label} onClick={onClick} disabled={disabled} className={classes}>
        {icon}
      </button>
    );
  }
  return (
    <span aria-hidden className={classes}>
      {icon}
    </span>
  );
}
