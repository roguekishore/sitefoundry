import type { ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface StokespaceHeadingProps {
  /** the heading text (shown uppercase) */
  children: ReactNode;
  /** hero: 39px phone → 78.6px at 1440 · section: 30px → 55.8px · compact: 30px → 34.8px */
  size?: "hero" | "section" | "compact";
  /** the element to render (default h2) */
  as?: ElementType;
  className?: string;
}

// Sizes grow with the window between 390px and 1440px, like the original's fluid type.
// Size first, leading after: tailwind-merge drops a leading class that comes before a size.
const sizes = {
  hero: "text-[length:clamp(2.4375rem,1.52rem+3.77vw,4.911rem)]",
  section: "text-[length:clamp(1.875rem,1.275rem+2.462vw,3.49rem)]",
  compact: "text-[length:clamp(1.875rem,1.7625rem+0.462vw,2.178rem)]",
};

/**
 * The site's display heading: an extra-wide, heavy, all-caps grotesk set tight
 * (line-height 0.89 on phones, 1 from 1024px). Under the stokespace theme the face is
 * stretched to 125% and tracked a little wider (theme-only vars); elsewhere it is the theme's
 * display face at normal width.
 */
export function StokespaceHeading({ children, size = "section", as: Tag = "h2", className }: StokespaceHeadingProps) {
  return (
    <Tag
      className={cn(
        sizes[size],
        "font-display leading-[0.89] font-extrabold text-balance uppercase lg:leading-none",
        "[font-stretch:var(--stokespace-stretch,100%)] tracking-[calc(var(--stokespace-widen,0em)_-_0.02em)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
