import { cn } from "@foundry/foundry-utils";

export interface IncreaseHeadingProps {
  /** the opening clause, set semibold in the main text colour */
  lead: string;
  /** the rest of the sentence, set regular in the muted grey (starts after a space) */
  rest?: string;
  /** heading level */
  as?: "h1" | "h2" | "h3";
  /** hero: 32 → 40px · section: 24 → 32px · row: 22 → 24px (statements inside a section) */
  size?: "hero" | "section" | "row";
  className?: string;
}

const sizes = {
  hero: "text-[2rem] leading-[1.19] tracking-[-0.025em] lg:text-[2.5rem] lg:leading-[1.2] max-w-[44rem]",
  section: "text-2xl leading-[1.2] tracking-[-0.02em] lg:text-[2rem] lg:leading-[1.2] max-w-[45rem]",
  row: "text-[1.375rem] leading-[1.3] tracking-[-0.01em] lg:text-2xl lg:leading-[1.25] max-w-[33rem]",
};

/**
 * Increase's lead statement: one sentence, the first clause semibold and dark, the rest
 * regular and grey, so the headline and its explanation read as one line of thought.
 */
export function IncreaseHeading({ lead, rest, as: Tag = "h2", size = "section", className }: IncreaseHeadingProps) {
  return (
    <Tag className={cn("font-display text-pretty", sizes[size], className)}>
      <span className="font-semibold text-foreground">{lead}</span>
      {rest && <span className="font-normal text-muted-foreground"> {rest}</span>}
    </Tag>
  );
}
