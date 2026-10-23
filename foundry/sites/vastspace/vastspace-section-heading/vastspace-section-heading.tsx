import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface VastspaceSectionHeadingProps {
  /** the title */
  title: string;
  /** heading level for the title */
  as?: "h1" | "h2" | "h3";
  /** what sits at the right edge: a button or arrow buttons */
  action?: ReactNode;
  className?: string;
}

export function VastspaceSectionHeading({ title, as: Tag = "h2", action, className }: VastspaceSectionHeadingProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <Tag className="font-display text-[2rem]/[0.96] font-[560] tracking-[-0.01em] text-balance md:text-5xl/[1]">{title}</Tag>
      {action}
    </div>
  );
}
