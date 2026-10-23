import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RaycastButtonProps {
  /** the label */
  label: ReactNode;
  /** where it links */
  href: string;
  /** a small icon before the label (lucide or a glyph) */
  icon?: ReactNode;
  /** md is the page button, sm lives in the header bar */
  size?: "md" | "sm";
  className?: string;
}

/** The light keycap button used for every "download" in the page. */
export function RaycastButton({ label, href, icon, size = "md", className }: RaycastButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium tracking-[0.2px] text-primary-foreground",
        "shadow-[0_0_0_2px_color-mix(in_oklab,var(--background)_50%,transparent),0_0_14px_0_color-mix(in_oklab,var(--foreground)_19%,transparent),inset_0_-1px_0.4px_0_color-mix(in_oklab,var(--background)_20%,transparent),inset_0_1px_0.4px_0_var(--foreground)]",
        "transition-[background-color,box-shadow,transform] duration-200 ease-in-out hover:bg-foreground active:translate-y-px motion-reduce:transition-none",
        size === "md" ? "h-9" : "h-8",
        "[&_svg]:size-4",
        className,
      )}
    >
      {icon}
      {label}
    </a>
  );
}
