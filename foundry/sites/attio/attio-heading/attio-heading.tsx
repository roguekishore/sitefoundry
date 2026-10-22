import { cn } from "@foundry/foundry-utils";

export interface AttioHeadingProps {
  /** the opening clause, in the main text colour */
  lead: string;
  /** the rest of the thought, in slate grey (follows after a space) */
  rest?: string;
  /** start the grey part on its own line instead of running on */
  restOnNewLine?: boolean;
  /** heading level */
  as?: "h1" | "h2" | "h3";
  /**
   * hero: 40 → 64px semibold · section: 32 → 40px · statement: 24px (chapter lines) ·
   * title: 18px (small panels)
   */
  size?: "hero" | "section" | "statement" | "title";
  className?: string;
}

const sizes = {
  hero: "text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] lg:text-[4rem] lg:leading-[1.02]",
  section: "text-[2rem] leading-[1.125] font-medium tracking-[-0.025em] lg:text-[2.5rem] lg:leading-[1.1]",
  statement: "text-2xl leading-[1.15] font-medium tracking-[-0.02em]",
  title: "text-lg leading-[1.35] font-medium tracking-[-0.01em]",
};

/**
 * Attio's two-tone statement: the first clause dark, the rest slate grey, both in the
 * display face, so a heading and its explanation read as one sentence.
 */
export function AttioHeading({ lead, rest, restOnNewLine, as: Tag = "h2", size = "section", className }: AttioHeadingProps) {
  return (
    <Tag className={cn("font-display text-pretty text-foreground", sizes[size], className)}>
      {lead}
      {rest && (
        <span className={cn("text-muted-foreground", restOnNewLine && "block")}>
          {restOnNewLine ? rest : ` ${rest}`}
        </span>
      )}
    </Tag>
  );
}
