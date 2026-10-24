import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface DiabrowserButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: the black CTA · soft: grey-fill pill (secondary links) · outline: near-white pill with a hairline */
  tone?: "solid" | "soft" | "outline";
  /** lg: 48px on phones, 56px from lg (the waitlist CTA) · md: 44px · sm: 35px */
  size?: "lg" | "md" | "sm";
  /** small icon after the label (an arrow); it nudges right on hover */
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const tones = {
  solid: cn(
    "bg-primary text-primary-foreground",
    "hover:scale-[1.02] hover:shadow-[inset_0_1px_0_color-mix(in_oklab,var(--primary-foreground)_18%,transparent),0_2px_4px_color-mix(in_oklab,var(--foreground)_16%,transparent),0_18px_40px_-10px_color-mix(in_oklab,var(--foreground)_34%,transparent)]",
  ),
  soft: "bg-secondary text-secondary-foreground hover:bg-foreground/12",
  outline: "border border-border bg-popover/95 text-popover-foreground backdrop-blur-md hover:bg-popover",
};

const sizes = {
  lg: "h-12 px-8 text-[18px] tracking-[0.02em] lg:h-14 lg:text-[20px]",
  md: "h-11 px-6 text-[16px]",
  sm: "h-[35px] px-6 text-[16px]",
};

/** The site's pill button. */
export function DiabrowserButton({ children, href, tone = "solid", size = "md", icon, onClick, className }: DiabrowserButtonProps) {
  const classes = cn(
    "group/button inline-flex shrink-0 items-center justify-center gap-3 rounded-full leading-none whitespace-nowrap",
    "transition-[scale,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:hover:scale-100",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    tones[tone],
    sizes[size],
    className,
  );
  const inner = (
    <>
      {children}
      {icon && (
        <span className="flex size-4 items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/button:translate-x-1.5 motion-reduce:transition-none [&_svg]:size-4">
          {icon}
        </span>
      )}
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
