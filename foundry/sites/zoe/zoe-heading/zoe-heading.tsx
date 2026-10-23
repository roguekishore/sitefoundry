import { cn } from "@foundry/foundry-utils";

export interface ZoeHeadingProps {
  /** the heading text */
  title: string;
  /** a small line above it (e.g. "Member stories") */
  eyebrow?: string;
  /** center (default) or start */
  align?: "center" | "start";
  /** heading level */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** The site's section heading. */
export function ZoeHeading({ title, eyebrow, align = "center", as: Tag = "h2", className }: ZoeHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && <p className="mb-3 text-sm font-medium">{eyebrow}</p>}
      <Tag className="font-display text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.02em] text-balance lg:text-[2.875rem]">
        {title}
      </Tag>
    </div>
  );
}
