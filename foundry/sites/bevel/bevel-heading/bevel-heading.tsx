import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

/** The original's fluid heading sizes (same clamp() formulas): xl 50→80px, lg 41.5→64px, md 32.5→40px. Size comes first: tailwind-merge drops a line-height written before a font-size. */
export const bevelTitle = {
  xl: "text-[clamp(3rem,2.857vw+2.429rem,5rem)] font-display font-semibold leading-none tracking-[-0.03em]",
  lg: "text-[clamp(2.5rem,2.143vw+2.071rem,4rem)] font-display font-semibold leading-none tracking-[-0.03em]",
  md: "text-[clamp(2rem,0.714vw+1.857rem,2.5rem)] font-display font-semibold leading-none tracking-[-0.03em]",
} as const;

/** The lead under headings: 20→24px, between medium and semibold (SF Pro medium reads heavier than Inter medium), 60% ink. */
export const bevelLead = "text-[clamp(1.25rem,0.357vw+1.179rem,1.5rem)] leading-[1.3] font-[550] text-muted-foreground";

export interface BevelHeadingProps {
  /** the heading; may hold a muted span for a two-tone title */
  title: ReactNode;
  /** the line under it */
  lead?: ReactNode;
  /** xl = page title (h1), lg = section title, md = card title */
  size?: keyof typeof bevelTitle;
  /** the heading level */
  as?: "h1" | "h2" | "h3";
  /** centered (most sections) or left */
  align?: "center" | "left";
  className?: string;
}

export function BevelHeading({ title, lead, size = "lg", as: Tag = "h2", align = "center", className }: BevelHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <Tag className={cn(bevelTitle[size], "text-balance")}>{title}</Tag>
      {lead && <p className={cn(bevelLead, "mt-4 text-balance", align === "center" && "mx-auto")}>{lead}</p>}
    </div>
  );
}
