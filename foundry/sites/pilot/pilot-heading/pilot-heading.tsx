import { cn } from "@foundry/foundry-utils";

export interface PilotHeadingProps {
  /** the heading; \n breaks the line where the original breaks it on desktop */
  title: string;
  /** a small uppercase line above */
  eyebrow?: string;
  /** a paragraph under the heading */
  lede?: string;
  /** centred, or flush left */
  align?: "center" | "left";
  /** heading level */
  as?: "h1" | "h2";
  className?: string;
}

/** Pilot's section heading: 28–40px semibold with tight leading, a 20px lede under it. */
export function PilotHeading({ title, eyebrow, lede, align = "center", as: Tag = "h2", className }: PilotHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && <p className="mb-3 text-xs leading-[1.5] font-bold tracking-[0.1em] uppercase lg:mb-4">{eyebrow}</p>}
      <Tag className="font-display text-[2.25rem] leading-[1.05] font-semibold tracking-[-0.02em] whitespace-pre-line lg:text-[2.5rem]">{title}</Tag>
      {lede && (
        <p className={cn("mt-4 text-base leading-[1.6] lg:mt-8 lg:text-xl lg:leading-normal", align === "center" && "mx-auto max-w-[50rem]")}>{lede}</p>
      )}
    </div>
  );
}
