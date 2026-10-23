import { cn } from "@foundry/foundry-utils";

export interface AirwallexHeadingProps {
  /** the small grey caps line above ("Why us?") */
  eyebrow?: string;
  /** the headline */
  title: string;
  /** the paragraph under it */
  intro?: string;
  /** centre (default) or left */
  align?: "center" | "left";
  /** space between headline and intro: sm (16–24px) or lg (24–48px) */
  gap?: "sm" | "lg";
  /** h2 (default) or h1/h3 */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Eyebrow, headline and intro, set the site's way. */
export function AirwallexHeading({ eyebrow, title, intro, align = "center", gap = "sm", as: Tag = "h2", className }: AirwallexHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && <p className="mb-4 text-sm font-bold tracking-[0.025em] text-muted-foreground uppercase lg:mb-5">{eyebrow}</p>}
      <Tag className="font-display text-[1.75rem] leading-[1.25] font-bold tracking-[-0.005em] text-foreground lg:text-[2.5rem]">{title}</Tag>
      {intro && (
        <p
          className={cn(
            "text-base leading-6 text-foreground/80",
            align === "center" && "mx-auto max-w-[52rem]",
            gap === "sm" ? "mt-4 lg:mt-6" : "mt-6 lg:mt-12",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
