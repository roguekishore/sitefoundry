import { cn } from "@foundry/foundry-utils";
import { RollersEyebrow } from "@foundry/rollers-eyebrow";
import { RollersWords, type RollersWordsSegment } from "@foundry/rollers-words";

export interface RollersIntroProps {
  /** the chip above the heading */
  eyebrow: string;
  /** the heading as parts: the first in charcoal, the next in orange (tone: "accent") */
  heading: RollersWordsSegment[];
  /** an in-page anchor */
  id?: string;
  className?: string;
}

/** A plain white band with a chip and one very large two-tone statement, its words rising into
    place one after another as it scrolls in. */
export function RollersIntro({ eyebrow, heading, id, className }: RollersIntroProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter pt-section pb-6 text-foreground md:pb-21", className)}>
      <RollersEyebrow>{eyebrow}</RollersEyebrow>
      <RollersWords
        segments={heading}
        className="mt-5 max-w-[64rem] font-display text-[2.05rem] leading-[1.1] font-[550] tracking-[-0.015em] md:mt-6.5 md:text-[3.25rem] lg:text-[4.25rem]"
      />
    </section>
  );
}
