import type { CSSProperties, ElementType } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rollers-words.css";

export interface RollersWordsSegment {
  /** the words of this part of the sentence */
  text: string;
  /** base: the block's text colour · accent: the brand orange · highlight: the theme's second emphasis colour (navy on the blue band) */
  tone?: "base" | "accent" | "highlight";
  /** start this part on a new line */
  newLine?: boolean;
}

export interface RollersWordsProps {
  /** the heading as parts, each in its own colour (one sentence, two tones) */
  segments: RollersWordsSegment[];
  /** the element to render (h2 by default) */
  as?: ElementType;
  /** false: no word-by-word reveal (for a first-screen heading) */
  reveal?: boolean;
  className?: string;
}

const tones = { base: "", accent: "text-primary", highlight: "text-highlight" };

/** A two-tone heading whose words rise about one line-height and fade in, one after another,
    as it scrolls into view (CSS view timeline; static and in place without support or under
    reduced motion). */
export function RollersWords({ segments, as: Tag = "h2", reveal = true, className }: RollersWordsProps) {
  let index = 0;
  return (
    <Tag className={cn(reveal && "rollers-words", className)}>
      {segments.map((segment, s) => {
        const words = segment.text.split(/\s+/).filter(Boolean);
        return (
          <span key={s} className={tones[segment.tone ?? "base"]}>
            {segment.newLine && s > 0 ? <br /> : s > 0 ? " " : null}
            {words.map((word, w) => {
              const i = index++;
              return (
                <span key={w}>
                  {w > 0 ? " " : null}
                  <span className="rollers-words-w inline-block" style={{ "--rollers-words-i": i } as CSSProperties}>
                    {word}
                  </span>
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
