import { cn } from "@foundry/foundry-utils";
import { RollersRise } from "@foundry/rollers-rise";
import { RollersRule } from "@foundry/rollers-rule";
import { RollersWords, type RollersWordsSegment } from "@foundry/rollers-words";

export interface RollersServicesItem {
  /** the service's name, in orange */
  title: string;
  /** one short paragraph */
  body: string;
}

export interface RollersServicesProps {
  /** the statement on the left, as parts: orange first (tone: "accent"), then charcoal */
  statement: RollersWordsSegment[];
  /** the ruled list on the right */
  items: RollersServicesItem[];
  /** an in-page anchor */
  id?: string;
  className?: string;
}

const grotesk = "font-[family-name:var(--typeface-grotesk,var(--typeface-body))]";

/** A ruled band: a two-tone statement in the left half and, past a vertical hairline, a stack
    of services, each an orange title over a short paragraph, separated by hairlines. */
export function RollersServices({ statement, items, id, className }: RollersServicesProps) {
  return (
    <section id={id} className={cn("relative grid bg-background text-foreground md:grid-cols-[51.4%_1fr]", className)}>
      <RollersRule className="inset-x-0 top-0" />
      <RollersRule orientation="vertical" className="inset-y-0 left-[51.4%] hidden md:block" />

      <div className="px-gutter pt-8 pb-8 md:pt-section md:pr-20">
        <RollersWords
          as="h3"
          segments={statement}
          className={cn(grotesk, "text-[1.55rem] leading-[1.2] tracking-[0.01em] lg:text-[2.75rem]")}
        />
      </div>

      <ul>
        {items.map((item, i) => (
          <li key={item.title} className="relative px-gutter py-8 md:py-10 md:pr-10 md:pl-[6.875rem]">
            <RollersRule className={cn("inset-x-0 top-0", i === 0 && "md:hidden")} />
            <RollersRise>
              <h4 className={cn(grotesk, "text-[1.3rem] leading-[1.2] text-primary md:text-[1.5rem] lg:text-[2rem]")}>{item.title}</h4>
              <p className="mt-3 max-w-[34rem] font-display text-[0.875rem] leading-[1.5] lg:text-[1.125rem]">{item.body}</p>
            </RollersRise>
          </li>
        ))}
      </ul>
    </section>
  );
}
