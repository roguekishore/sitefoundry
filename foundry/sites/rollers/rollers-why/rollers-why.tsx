import { cn } from "@foundry/foundry-utils";
import { RollersBand } from "@foundry/rollers-band";
import { RollersEyebrow } from "@foundry/rollers-eyebrow";
import { RollersRise } from "@foundry/rollers-rise";
import { RollersRule } from "@foundry/rollers-rule";
import { RollersWords, type RollersWordsSegment } from "@foundry/rollers-words";

export interface RollersWhyItem {
  /** the reason's name */
  title: string;
  /** one or two lines */
  body: string;
}

export interface RollersWhyProps {
  /** the chip above the heading */
  eyebrow: string;
  /** the heading as parts: white, then orange on a new line (tone: "accent", newLine) */
  heading: RollersWordsSegment[];
  /** the short paragraph to the right of the heading */
  lede: string;
  /** the numbered reasons (01, 02…), two per row on wide screens */
  items: RollersWhyItem[];
  /** an in-page anchor */
  id?: string;
  className?: string;
}

const grotesk = "font-[family-name:var(--typeface-grotesk,var(--typeface-body))]";

/** A charcoal band with a faint sawtooth texture: a large white and orange heading with a
    short lede beside it, then numbered reasons two to a row, each under a white hairline with a
    big orange number. */
export function RollersWhy({ eyebrow, heading, lede, items, id, className }: RollersWhyProps) {
  return (
    <RollersBand id={id} className={cn("px-gutter pt-section pb-8 md:pb-section", className)}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div>
          <RollersEyebrow>{eyebrow}</RollersEyebrow>
          <RollersWords
            segments={heading}
            className="mt-5 font-display text-[2.05rem] leading-[1.1] font-[550] tracking-[-0.015em] md:mt-6.5 md:text-[3.25rem] lg:text-[4.25rem]"
          />
        </div>
        <RollersRise as="p" className="max-w-[21rem] font-display text-[0.875rem] leading-[1.5] md:text-[1.5rem] lg:mt-15">
          {lede}
        </RollersRise>
      </div>

      <ol className="mt-6 grid md:mt-16 md:grid-cols-2 md:gap-x-17.5">
        {items.map((item, i) => (
          <li key={item.title} className="relative pt-4 pb-7 md:pt-4.5 md:pb-14">
            <RollersRule className={cn("inset-x-0 top-0", i === 0 && "hidden md:block")} />
            <RollersRise step={i % 2} className="md:flex md:gap-6">
              <span className={cn(grotesk, "block w-[5.125rem] shrink-0 text-[2.05rem] leading-[1.1] text-primary md:text-[3.25rem] lg:text-[4.25rem]")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-2">
                <h3 className="font-display text-[1.3rem] leading-[1.2] md:text-[1.6rem] lg:text-[2rem]">{item.title}</h3>
                <p className="mt-2 max-w-[33rem] font-display text-[0.875rem] leading-[1.5] md:mt-4 lg:text-[1.125rem]">{item.body}</p>
              </div>
            </RollersRise>
          </li>
        ))}
      </ol>
    </RollersBand>
  );
}
