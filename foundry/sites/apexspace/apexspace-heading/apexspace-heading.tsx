import { cn } from "@foundry/foundry-utils";

export interface ApexspaceHeadingProps {
  /** the heading text; a \n starts a new line */
  text: string;
  /** hero (42 → 72px), section (34 → 60px) or sub-head (29 → 44px) */
  size?: "hero" | "section" | "sub";
  /** the HTML element; defaults to h2 */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

// Fluid sizes: the phone size at 390px growing to the desktop size at 1440px.
const sizes = {
  hero: "text-[length:clamp(2.625rem,1.93rem_+_2.857vw,4.5rem)]",
  section: "text-[length:clamp(2.1rem,1.5rem_+_2.5vw,3.75rem)]",
  sub: "text-[length:clamp(1.8rem,1.464rem_+_1.429vw,2.75rem)]",
};

/** Light, uppercase display heading with a tight line-height. */
export function ApexspaceHeading({ text, size = "section", as: Tag = "h2", className }: ApexspaceHeadingProps) {
  // The size goes first: a later size class would otherwise cancel leading-none in cn().
  return <Tag className={cn(sizes[size], "font-display leading-none font-light whitespace-pre-line uppercase", className)}>{text}</Tag>;
}
