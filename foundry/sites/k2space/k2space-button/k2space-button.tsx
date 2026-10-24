import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface K2spaceButtonProps {
  /** the label (for arrow buttons, give ariaLabel instead) */
  children?: ReactNode;
  /** a link target; without it the control is a <button> */
  href?: string;
  /** solid: flat filled block · arrow: 56px square slider control · link: grey text with an arrow */
  variant?: "solid" | "arrow" | "link";
  /** which way the arrow points (arrow and link variants; solid shows a small right arrow) */
  direction?: "left" | "right";
  /** the accessible name, needed for arrow buttons */
  ariaLabel?: string;
  /** click handler (buttons) */
  onClick?: () => void;
  /** disabled state (buttons) */
  disabled?: boolean;
  className?: string;
}

/** Square buttons and quiet links in the K2 Space manner: flat planes, no radius, 0.2s fades. */
export function K2spaceButton({ children, href, variant = "solid", direction = "right", ariaLabel, onClick, disabled, className }: K2spaceButtonProps) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  const classes = cn(
    "inline-flex items-center justify-center font-sans font-[560] transition-colors duration-200 ease-[ease] motion-reduce:transition-none",
    variant === "solid" &&
      "h-[50px] gap-1.5 bg-primary px-7 text-base/none text-primary-foreground hover:bg-accent lg:h-[4.24vw] lg:px-[2.64vw] lg:text-[max(1rem,1.3227vw)]/none",
    variant === "arrow" &&
      "size-12 bg-primary text-primary-foreground hover:bg-accent disabled:opacity-50 lg:size-[3.9vw] [&>svg]:size-5 lg:[&>svg]:size-[1.6vw]",
    variant === "link" &&
      "gap-2 text-base/none text-muted-foreground hover:text-foreground lg:text-[max(1rem,1.3227vw)]/none [&>svg]:size-[0.9em]",
    "rounded-sm",
    className,
  );
  const content = (
    <>
      {variant !== "arrow" && children}
      {variant === "solid" && <ArrowRight aria-hidden className="size-[0.85em]" />}
      {variant !== "solid" && <Icon aria-hidden strokeWidth={1.75} />}
    </>
  );
  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" aria-label={ariaLabel} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}

