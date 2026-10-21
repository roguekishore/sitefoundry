import { cn } from "@foundry/foundry-utils";
import { RollersRise } from "@foundry/rollers-rise";
import { RollersRule } from "@foundry/rollers-rule";
import { RollersWords } from "@foundry/rollers-words";

export interface RollersStatsItem {
  /** the big orange figure or word ("Since 1987", "450+") */
  value: string;
  /** the small line under it; leave all captions out for a three-word title (FROM / THE / YARD) */
  caption?: string;
}

export interface RollersStatsProps {
  /** three figures (or three words), set down the page as a staircase on wide screens */
  items: RollersStatsItem[];
  /** an in-page anchor */
  id?: string;
  className?: string;
}

const align = ["md:justify-start", "md:justify-center", "md:justify-end"];

/** A tall ruled band of three columns with very large orange figures in a staircase: the first
    at the top of its column, the second in the middle, the third near the bottom. Each figure
    pins (sticky) under the header while its column scrolls past. On phones they stack. */
export function RollersStats({ items, id, className }: RollersStatsProps) {
  const titleOnly = items.every((item) => !item.caption);
  return (
    <section
      id={id}
      className={cn(
        "relative flex flex-col bg-background px-gutter pt-8 pb-8 text-foreground md:grid md:min-h-[67.5rem] md:grid-cols-3 md:px-0 md:py-0",
        titleOnly ? "gap-0" : "gap-11",
        className,
      )}
    >
      <RollersRule className="inset-x-0 top-0" />
      <RollersRule orientation="vertical" className="inset-y-0 left-1/3 hidden md:block" />
      <RollersRule orientation="vertical" className="inset-y-0 left-2/3 hidden md:block" />

      {items.map((item, i) => (
        <div
          key={item.value}
          className={cn(
            "flex flex-col md:pt-section md:pb-[8.25rem]",
            i === 0 ? "md:pl-gutter" : "md:pl-7",
            align[i] ?? "md:justify-start",
          )}
        >
          <div className="md:sticky md:top-[calc(4rem+2.5rem)]">
            <RollersWords
              as="p"
              segments={[{ text: item.value }]}
              className="font-[family-name:var(--typeface-grotesk,var(--typeface-body))] text-[2.5rem] leading-[1.1] tracking-[-0.01em] text-primary uppercase md:text-[3rem] lg:text-[4.5rem] xl:text-[5.625rem]"
            />
            {item.caption ? (
              <RollersRise as="p" className="mt-1.5 font-display text-[0.875rem] leading-[1.5] md:mt-2 lg:text-[1.125rem]">
                {item.caption}
              </RollersRise>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
}
