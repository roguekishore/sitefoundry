import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ReflectBadgeProps {
  /** the label, a few words */
  children: ReactNode;
  /** a small icon before the label (e.g. lucide Sparkles) */
  icon?: ReactNode;
  /** makes the badge a link */
  href?: string;
  className?: string;
}

/** The pill that heads every section. */
export function ReflectBadge({ children, icon, href, className }: ReflectBadgeProps) {
  const classes = cn(
    "inline-flex h-[1.875rem] items-center gap-2 rounded-full border border-highlight/25 bg-glow/10 px-3.5 text-sm/5 whitespace-nowrap",
    "text-[color-mix(in_oklab,var(--foreground)_72%,var(--highlight))] [&_svg]:size-4 [&_svg]:text-foreground",
    "shadow-[inset_0_-7px_11px_color-mix(in_oklab,var(--highlight)_14%,transparent)] transition-shadow duration-[450ms] ease-[cubic-bezier(0.6,0.6,0,1)] motion-reduce:transition-none",
    href && "hover:shadow-[inset_0_-7px_11px_color-mix(in_oklab,var(--highlight)_28%,transparent)]",
    className,
  );
  const content = (
    <>
      {icon}
      {children}
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <span className={classes}>{content}</span>
  );
}
