import type { ReactNode } from "react";
import { ArrowRight, CornerRightDown, SquareArrowOutUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./saronic-button.css";

const variants = {
  /** the sonar-lime fill used for every main action */
  primary: "bg-primary text-primary-foreground",
  /** a translucent veil, for buttons over photos and video */
  secondary: "bg-secondary text-secondary-foreground backdrop-blur-sm",
  /** a 10% ink tint, for buttons sitting on a lime surface */
  tint: "bg-primary-foreground/10 text-primary-foreground",
} as const;

const icons = {
  arrow: ArrowRight,
  down: CornerRightDown,
  external: SquareArrowOutUpRight,
} as const;

export interface SaronicButtonProps {
  /** the label; set in mono capitals */
  children: ReactNode;
  /** a shorter label for phones (e.g. "Specs" for "Specifications") */
  shortLabel?: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary (lime), secondary (veil over media) or tint (on a lime surface) */
  variant?: keyof typeof variants;
  /** the icon after the label: arrow, down (a turn-down arrow, for in-page jumps), external, or none */
  icon?: keyof typeof icons | "none";
  /** md: the 48px button · sm: the 32px chip used in the announcement bar */
  size?: "md" | "sm";
  /** opens in a new tab */
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * The original's small-radius mono button. On hover it grows 2% (0.25s ease), its label
 * slides up out of view and back in from below, and the arrow nudges 2px to the right.
 */
export function SaronicButton({
  children,
  shortLabel,
  href,
  variant = "primary",
  icon = "arrow",
  size = "md",
  external,
  onClick,
  className,
}: SaronicButtonProps) {
  const Icon = icon === "none" ? null : icons[icon];
  const classes = cn(
    "saronic-button group inline-flex shrink-0 items-center justify-between rounded-lg font-mono leading-none tracking-[0.025em] whitespace-nowrap uppercase",
    "transition-transform duration-250 ease-[ease] hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    size === "md" ? "h-12 gap-5 px-6 text-xs" : "h-8 gap-3 px-3 text-xs",
    variants[variant],
    className,
  );
  const inner = (
    <>
      <span className="saronic-button-label inline-flex overflow-clip py-1">
        {shortLabel ? (
          <>
            <span className="md:hidden">{shortLabel}</span>
            <span className="max-md:hidden">{children}</span>
          </>
        ) : (
          <span>{children}</span>
        )}
      </span>
      {Icon && (
        <Icon
          aria-hidden
          strokeWidth={1.5}
          className="size-[1.125rem] shrink-0 transition-transform duration-250 ease-[ease] group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      )}
    </>
  );
  return href ? (
    <a
      href={href}
      className={classes}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {inner}
    </a>
  ) : (
    <button type="button" className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
