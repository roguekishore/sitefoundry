import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RailwayPanelProps {
  children?: ReactNode;
  /**
   * a faint colour wash over the page background: chart-5 (steel navy), chart-2 (slate teal),
   * highlight (plum), or none for a bordered panel in the page colour
   */
  tint?: "none" | "chart-5" | "chart-2" | "highlight";
  /** the element to render, e.g. "section" */
  as?: "div" | "section" | "article";
  className?: string;
}

const tints = {
  none: "",
  "chart-5": "bg-chart-5/15",
  "chart-2": "bg-chart-2/20",
  // pink and copper together give the original's reddish plum
  highlight: "bg-[color-mix(in_oklab,var(--highlight)_8%,var(--chart-3)_4%)]",
};

/**
 * Railway's framed panel: nearly full-bleed (inset by the page gutter), 16px corners, a
 * hairline border and a faint tint. Crops its contents with overflow-clip so scroll
 * timelines inside keep working.
 */
export function RailwayPanel({ children, tint = "none", as: Tag = "div", className }: RailwayPanelProps) {
  return <Tag className={cn("relative overflow-clip rounded-2xl border border-border", tints[tint], className)}>{children}</Tag>;
}
