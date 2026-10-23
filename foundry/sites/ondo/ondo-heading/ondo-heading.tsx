import { cn } from "@foundry/foundry-utils";
import "./ondo-heading.css";

export interface OndoHeadingProps {
  /** the first line, in ink */
  lead: string;
  /** an optional second line, in grey */
  trail?: string;
  /** a small label above the heading */
  eyebrow?: string;
  /** display: 40 → 60px · title: 20 → 30px */
  size?: "display" | "title";
  /** text alignment */
  align?: "left" | "center";
  /** the heading level */
  as?: "h1" | "h2" | "h3";
  /** fade up as it scrolls into view */
  reveal?: boolean;
  className?: string;
}

/** Label + two-tone heading, the way every section on the site opens. */
export function OndoHeading({ lead, trail, eyebrow, size = "display", align = "left", as: Tag = "h2", reveal = true, className }: OndoHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", reveal && "ondo-heading-reveal", className)}>
      {eyebrow && <p className="mb-6 text-sm font-medium text-foreground/70 lg:mb-8 lg:text-base">{eyebrow}</p>}
      <Tag
        className={cn(
          "font-display font-medium text-foreground",
          size === "display"
            ? "text-[2.5rem] leading-[1.05] tracking-[-0.035em] lg:text-[3.75rem] lg:leading-[1.05]"
            : "text-xl leading-[1.3] tracking-[-0.02em] lg:text-[1.875rem] lg:leading-[1.2]",
        )}
      >
        <span className="block">{lead}</span>
        {trail && <span className="block text-foreground/50">{trail}</span>}
      </Tag>
    </div>
  );
}
