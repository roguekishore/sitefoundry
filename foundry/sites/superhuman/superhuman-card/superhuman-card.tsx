import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

const tints = {
  mint: "from-chart-1/35 to-glow/25",
  rose: "from-chart-2/30 to-highlight/40",
  periwinkle: "from-highlight/45 to-secondary/60",
} as const;

export interface SuperhumanCardProps {
  /** a lucide icon (or any small mark) for the tile */
  icon: ReactNode;
  /** the tint behind the icon */
  tint?: keyof typeof tints;
  /** the headline's semi-bold first part */
  title: string;
  /** the headline's regular second part */
  titleRest: string;
  /** the grey description */
  description: string;
  className?: string;
}

export function SuperhumanCard({ icon, tint = "mint", title, titleRest, description, className }: SuperhumanCardProps) {
  return (
    <article
      className={cn(
        "rounded-lg bg-linear-to-b from-muted/55 to-card p-8 text-foreground min-h-[17.4375rem] lg:min-h-[18.1875rem]",
        "shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_4px_8px_-2px_color-mix(in_oklab,var(--foreground)_6%,transparent),0_2px_4px_0_color-mix(in_oklab,var(--foreground)_4%,transparent)]",
        className,
      )}
    >
      <div className={cn("flex size-16 items-center justify-center rounded-xl bg-linear-to-br ring-2 ring-popover/70 [&_svg]:size-7", tints[tint])}>{icon}</div>
      <h3 className="mt-5 text-xl/[1.2] font-[460] tracking-[-0.0275em] lg:text-[1.5625rem]/[1.2]">
        <strong className="font-semibold">{title}</strong> {titleRest}
      </h3>
      <p className="mt-2 text-base/[1.5] font-[460] text-foreground/65">{description}</p>
    </article>
  );
}
