import { cn } from "@foundry/foundry-utils";
import { HulyCard } from "@foundry/huly-card";
import { HulyHeading } from "@foundry/huly-heading";
import { HulyMock, type HulyMockProps } from "@foundry/huly-mock";

export interface HulyBentoCard {
  /** bold first words of the caption */
  title: string;
  /** rest of the caption */
  text?: string;
  /** the mock UI that fills the card */
  visual?: HulyMockProps;
}

export interface HulyBentoProps {
  title: string | string[];
  text?: string;
  /** cards in pairs: narrow + wide, then wide + narrow, and so on */
  cards: HulyBentoCard[];
  className?: string;
}

export function HulyBento({ title, text, cards, className }: HulyBentoProps) {
  const rows: HulyBentoCard[][] = [];
  for (let i = 0; i < cards.length; i += 2) rows.push(cards.slice(i, i + 2));

  return (
    <section className={cn("relative isolate overflow-hidden bg-background py-section text-foreground lg:py-40", className)}>
      {/* pastel light behind the cards */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-[8%] left-[-12%] h-[32rem] w-[36rem] rounded-full bg-glow/20 blur-3xl" />
        <div className="absolute top-[30%] right-[-14%] h-[30rem] w-[34rem] rounded-full bg-highlight/12 blur-3xl" />
        <div className="absolute top-[-10%] left-1/3 h-[24rem] w-[40rem] rounded-full bg-chart-5/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-page px-gutter">
        <HulyHeading title={title} text={text} textClassName="max-w-[41rem]" />
        <div className="mt-8 space-y-4 lg:mt-10 lg:space-y-5">
          {rows.map((row, r) => (
            <div key={r} className={cn("grid gap-4 lg:gap-5", r % 2 === 0 ? "lg:grid-cols-[1fr_1.8fr]" : "lg:grid-cols-[1.8fr_1fr]")}>
              {row.map((card) => (
                <HulyCard
                  key={card.title}
                  title={card.title}
                  text={card.text}
                  visual={card.visual && <HulyMock {...card.visual} />}
                  className="h-[18rem] lg:h-[26.25rem]"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
