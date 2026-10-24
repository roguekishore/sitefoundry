import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MymindPillProps {
  /** the button's label */
  children: ReactNode;
  /** where it goes */
  href: string;
  /** "solid": the tangerine call to action; "soft": the pale app-store style pill */
  variant?: "solid" | "soft";
  /** sm: 36px (header, small capitals); md: 46px; lg: 50px app pills */
  size?: "sm" | "md" | "lg";
  /** set the label in small spaced capitals */
  caps?: boolean;
  /** an icon before the label */
  icon?: ReactNode;
  /** an icon after the label (e.g. a chevron) */
  trailing?: ReactNode;
  className?: string;
}

const sizes = {
  sm: "h-9 px-4 text-[0.9375rem] gap-1.5 [&_svg]:size-3.5",
  md: "h-[2.875rem] px-6 text-lg gap-2 [&_svg]:size-4",
  lg: "h-[3.125rem] px-6 text-lg gap-3 [&_svg]:size-6",
};

/** A rounded pill link: solid tangerine CTA or soft app pill. */
export function MymindPill({ children, href, variant = "solid", size = "md", caps, icon, trailing, className }: MymindPillProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-[family-name:var(--mymind-round,var(--typeface-body))] whitespace-nowrap",
        sizes[size],
        variant === "solid"
          ? "bg-primary font-semibold text-primary-foreground transition-[filter] duration-200 ease-linear hover:brightness-95"
          : "bg-muted/60 font-normal text-muted-foreground/90 transition-colors duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-primary",
        caps && "text-[0.8125rem] font-semibold tracking-[0.08em] uppercase",
        className,
      )}
    >
      {icon}
      <span>{children}</span>
      {trailing}
    </a>
  );
}
