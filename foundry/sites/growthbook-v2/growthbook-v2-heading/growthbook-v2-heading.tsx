import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GrowthbookV2HeadingProps {
  children: ReactNode;
  /** the HTML level */
  as?: "h1" | "h2" | "h3";
  /** hero: 44 → 68px · section: 36 → 56px · card: 28 → 48px */
  size?: "hero" | "section" | "card";
  className?: string;
}

const sizes = {
  hero: "text-[2.75rem]/[1.2] md:text-[3.5rem]/[1.15] lg:text-[4.25rem]/[1.1]",
  section: "text-[2.25rem]/[1.3] md:text-[2.75rem]/[1.25] lg:text-[3.5rem]/[1.2]",
  card: "text-[1.75rem]/[1.3] md:text-[2.25rem]/[1.25] lg:text-[3rem]/[1.2]",
};

export function GrowthbookV2Heading({ children, as: Tag = "h2", size = "section", className }: GrowthbookV2HeadingProps) {
  return <Tag className={cn("font-display font-normal tracking-[-0.01em] text-balance", sizes[size], className)}>{children}</Tag>;
}
