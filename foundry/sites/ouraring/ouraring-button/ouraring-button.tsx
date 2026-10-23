import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface OuraringButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: dark-grey pill · blue: the one main CTA · inverse: cream pill for dark bands */
  tone?: "solid" | "blue" | "inverse";
  /** small icon after the label (e.g. an up-right arrow) */
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const tones = {
  solid: "bg-primary text-primary-foreground tracking-[0.02em] hover:brightness-[0.4] dark:hover:brightness-[0.55]",
  blue: "bg-highlight text-highlight-foreground font-semibold hover:brightness-[0.78]",
  inverse: "bg-foreground text-background tracking-[0.02em] hover:brightness-[0.55]",
};

/** The site's pill button. */
export function OuraringButton({ children, href, tone = "solid", icon, onClick, className }: OuraringButtonProps) {
  const classes = cn(
    "inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-[16px] leading-none whitespace-nowrap",
    "transition-[filter] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    tones[tone],
    className,
  );
  const inner = (
    <>
      {children}
      {icon && <span className="flex size-4 items-center justify-center [&_svg]:size-4">{icon}</span>}
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

export interface OuraringRoundButtonProps {
  /** the icon inside (an arrow) */
  icon: ReactNode;
  /** what it does, for screen readers */
  label: string;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** filled: dark circle · quiet: the secondary surface (arrow chips on cream cards) · bare: icon only */
  tone?: "filled" | "quiet" | "bare";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const roundTones = {
  filled: "bg-primary text-primary-foreground hover:brightness-[0.4] dark:hover:brightness-[0.55]",
  quiet: "bg-secondary text-secondary-foreground hover:brightness-[0.6]",
  bare: "text-foreground/60 hover:text-foreground",
};

/** A 45px round icon button (carousel arrows, card arrows). */
export function OuraringRoundButton({ icon, label, href, tone = "filled", onClick, disabled, className }: OuraringRoundButtonProps) {
  const classes = cn(
    "inline-flex size-[45px] shrink-0 items-center justify-center rounded-full [&_svg]:size-5",
    "transition-[filter,color,opacity] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none disabled:opacity-40",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    roundTones[tone],
    className,
  );
  return href ? (
    <a href={href} aria-label={label} className={classes} onClick={onClick}>
      {icon}
    </a>
  ) : (
    <button type="button" aria-label={label} className={classes} onClick={onClick} disabled={disabled}>
      {icon}
    </button>
  );
}
