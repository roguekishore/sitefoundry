import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BevelButtonProps {
  /** the label */
  label: ReactNode;
  /** where it links */
  href: string;
  /** an icon before the label (e.g. a lucide icon) */
  icon?: ReactNode;
  /** md: 44–46px tall, 18px label; sm: 38px tall, 16px label */
  size?: "sm" | "md";
  className?: string;
}

/** The original's dark pill: hover = scale 1.025 over 0.6s (expo-out) + inner glow + rising sheen. */
export function BevelButton({ label, href, icon, size = "md", className }: BevelButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative isolate inline-flex shrink-0 items-center justify-center overflow-clip rounded-full bg-primary font-semibold whitespace-nowrap text-primary-foreground",
        "shadow-[inset_0_1px_0_0_color-mix(in_oklab,var(--primary-foreground)_36%,transparent)]",
        "transition-[transform,box-shadow] duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-[1.025] hover:shadow-[inset_0_0_4px_0_color-mix(in_oklab,var(--primary-foreground)_50%,transparent)]",
        "motion-reduce:transition-none motion-reduce:hover:scale-100",
        size === "md" ? "h-11 gap-2.5 px-5 text-[1.125rem] lg:h-[2.875rem]" : "h-[2.375rem] gap-2 px-4 text-base",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-[130%] left-1/2 -z-10 h-6 w-3/4 -translate-x-1/2 rounded-full bg-primary-foreground/45 opacity-0 blur-md transition-[top,opacity] duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-[85%] group-hover:opacity-60"
      />
      {icon && <span className={cn("flex shrink-0", size === "md" ? "[&_svg]:size-5" : "[&_svg]:size-[1.125rem]")}>{icon}</span>}
      {label}
    </a>
  );
}
