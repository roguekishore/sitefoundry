import { cn } from "@foundry/foundry-utils";

/** Plain text, or the italic coloured phrase (optionally struck through, like an old price). */
export type HeadingPart = string | { accent: string; strike?: boolean };

export interface FunctionhealthHeadingProps {
  /** the heading as parts, in order; include the spaces between them, e.g. ["Testing is ", { accent: "easy" }]; the part "\n" is a line break */
  title: HeadingPart[];
  /** line under the heading */
  text?: string;
  /** h1 for the page title, h2 for sections */
  as?: "h1" | "h2";
  /** section: 48 → 64px · hero: 57 → 80px */
  size?: "section" | "hero";
  align?: "center" | "start";
  className?: string;
  /** extra classes for the lead line */
  textClassName?: string;
}

export function FunctionhealthHeading({ title, text, as: Tag = "h2", size = "section", align = "center", className, textClassName }: FunctionhealthHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-start", className)}>
      <Tag
        className={cn(
          "font-display font-light",
          size === "hero"
            ? "text-[clamp(3.5625rem,2.1617vw+3.0545rem,5rem)] leading-none tracking-[-0.025em]"
            : "text-[clamp(3rem,1.5038vw+2.6466rem,4rem)] leading-none tracking-[-0.03em]",
        )}
      >
        {title.map((part, i) =>
          typeof part === "string" ? (
            part === "\n" ? <br key={i} /> : part
          ) : (
            <em key={i} className={cn("font-light text-primary italic", part.strike && "line-through decoration-1")}>
              {part.accent}
            </em>
          ),
        )}
      </Tag>
      {text && <p className={cn("mt-6 text-[clamp(1.125rem,0.188vw+1.0808rem,1.25rem)] leading-snug font-light", align === "center" && "mx-auto", textClassName)}>{text}</p>}
    </div>
  );
}
