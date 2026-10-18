import { cn } from "@foundry/foundry-utils";
import { HulyCard } from "@foundry/huly-card";
import { HulyHeading } from "@foundry/huly-heading";
import { HulyMock, type HulyMockProps } from "@foundry/huly-mock";

export interface HulyMetabrainCard {
  /** bold first words of the caption */
  title: string;
  /** rest of the caption */
  text?: string;
  visual?: HulyMockProps;
  /** width on wide screens, out of a 12-column grid: narrow 3 · medium 5 · wide 7 */
  span?: "narrow" | "medium" | "wide";
  /** nudges the card down a little on wide screens, for the scattered look */
  drop?: boolean;
}

export interface HulyMetabrainProps {
  title: string | string[];
  text?: string;
  cards: HulyMetabrainCard[];
  className?: string;
}

const SPAN = {
  narrow: "lg:col-span-3 lg:h-[15.5rem]",
  medium: "lg:col-span-5 lg:h-[14.5rem]",
  wide: "lg:col-span-7 lg:h-[14.5rem]",
};

export function HulyMetabrain({ title, text, cards, className }: HulyMetabrainProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-background py-section text-foreground lg:py-40", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[40%] left-[30%] h-[26rem] w-[44rem] rounded-full bg-glow/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-page px-gutter">
        <HulyHeading title={title} text={text} className="lg:pl-48" textClassName="max-w-[38rem]" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12 lg:gap-5">
          {cards.map((card) => (
            <HulyCard
              key={card.title}
              title={card.title}
              text={card.text}
              captionAt="top"
              visual={card.visual && <HulyMock {...card.visual} />}
              className={cn("h-[13.25rem]", SPAN[card.span ?? "narrow"], card.drop && "lg:mt-8")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
