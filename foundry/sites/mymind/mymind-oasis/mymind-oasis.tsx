import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MymindEyebrow } from "@foundry/mymind-eyebrow";
import { MymindMedia } from "@foundry/mymind-media";

/** pastel surface of a card */
export type MymindCardTone = "beige" | "blue" | "sage" | "rose" | "peach" | "grey";

const tones: Record<MymindCardTone, string> = {
  beige: "bg-secondary",
  blue: "bg-muted",
  sage: "bg-highlight/20",
  rose: "bg-chart-2/15",
  peach: "bg-primary/10",
  grey: "bg-muted-foreground/15",
};

export interface MymindFeatureCard {
  /** card title */
  title: string;
  /** card paragraph */
  text: string;
  /** the picture above the text (or behind it, for photo cards); empty shows a placeholder */
  media?: ReactNode;
  /** pastel surface (ignored by photo cards) */
  tone?: MymindCardTone;
  /** narrow (≈41%) or wide (≈59%) half of a row, or the full row */
  span: "narrow" | "wide" | "full";
  /** full-width photo card: the picture fills it, text sits light on dark at the bottom */
  photo?: boolean;
  /** a small note in the top corner of a photo card, with its icons */
  badge?: { text: string; icons: ReactNode[] };
}

export interface MymindOasisProps {
  /** tangerine spaced capitals */
  eyebrow: string;
  /** headline lines (each starts a new line on desktop) */
  title: string[];
  /** the cards in reading order; two halves make a row, a full card is its own row */
  cards: MymindFeatureCard[];
  /** rendered inside the sheet under the cards */
  after?: ReactNode;
  className?: string;
}

function rowsOf(cards: MymindFeatureCard[]) {
  const rows: MymindFeatureCard[][] = [];
  for (const c of cards) {
    const last = rows[rows.length - 1];
    if (c.span !== "full" && last && last.length === 1 && last[0].span !== "full") last.push(c);
    else rows.push([c]);
  }
  return rows;
}

function Card({ card }: { card: MymindFeatureCard }) {
  if (card.photo) {
    return (
      <article className="dark group relative isolate flex min-h-[40.5rem] flex-col justify-between overflow-clip rounded-lg bg-background p-[1.875rem] text-foreground lg:h-[42.875rem] lg:p-[3.125rem]">
        <MymindMedia tone="dark" className="absolute inset-0 -z-10 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.02] motion-reduce:transition-none">
          {card.media}
        </MymindMedia>
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-background/90 to-transparent" />
        {card.badge ? (
          <div className="flex items-center gap-2 text-sm leading-[1.3]">
            {card.badge.icons.map((icon, i) => (
              <span key={i} className="grid size-12 place-items-center rounded-[10px] bg-foreground/10 [&_svg]:size-5 lg:size-auto lg:bg-transparent">
                {icon}
              </span>
            ))}
            <span className="ml-2 max-w-[8.5rem] lg:text-xs">{card.badge.text}</span>
          </div>
        ) : (
          <span />
        )}
        <div className="max-w-[30rem]">
          <h3 className="text-[1.75rem] leading-[1.25] font-normal tracking-[-0.035em] lg:text-[2.5rem] lg:leading-[3.375rem]">{card.title}</h3>
          <p className="mt-4 text-base leading-[1.45] text-foreground/85 lg:mt-1 lg:leading-[1.6667]">{card.text}</p>
        </div>
      </article>
    );
  }
  return (
    <article className={cn("group flex flex-col overflow-clip rounded-lg text-foreground lg:h-[44.75rem]", tones[card.tone ?? "beige"])}>
      <div className="flex flex-1 items-center justify-center px-[2.625rem] pt-[2.375rem] lg:px-[4.25rem] lg:pt-[3.75rem]">
        <MymindMedia className="aspect-[1.1] w-full max-w-[24rem] rounded-[4px] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.02] motion-reduce:transition-none lg:aspect-auto lg:h-[24.5rem] lg:max-w-none">
          {card.media}
        </MymindMedia>
      </div>
      <div className="px-[1.875rem] pt-10 pb-8 lg:px-[3.125rem] lg:pt-10 lg:pb-[3.125rem]">
        <h3 className="text-[1.75rem] leading-[1.25] font-normal tracking-[-0.035em] lg:text-[2.5rem] lg:leading-[3.375rem]">{card.title}</h3>
        <p className="mt-4 max-w-[26rem] text-base leading-[1.45] text-muted-foreground lg:mt-2 lg:leading-[1.6667]">{card.text}</p>
      </div>
    </article>
  );
}

/** White sheet of pastel feature cards on a warm wash. */
export function MymindOasis({ eyebrow, title, cards, after, className }: MymindOasisProps) {
  return (
    <section
      className={cn(
        "bg-[linear-gradient(to_bottom,var(--primary),color-mix(in_oklab,var(--primary)_55%,var(--accent))_30%,color-mix(in_oklab,var(--primary)_18%,var(--accent))_70%,var(--accent))] px-2.5 lg:px-9",
        className,
      )}
    >
      <div className="mx-auto max-w-[85.5rem] rounded-t-[2.25rem] rounded-b-lg bg-card px-3.5 pt-[6.5rem] pb-3.5 text-card-foreground shadow-[0_40px_80px_-40px_color-mix(in_oklab,var(--primary)_30%,transparent)] lg:rounded-t-[1.25rem] lg:px-[1.875rem] lg:pt-[7rem] lg:pb-[1.875rem]">
        <div className="text-center">
          <MymindEyebrow tone="primary">{eyebrow}</MymindEyebrow>
          <h2 className="mt-5 font-display text-[3rem] leading-[1.06] font-[350] tracking-[-0.045em] lg:mt-4 lg:text-[5.25rem] lg:leading-[0.98]">
            {title.map((line, i) => (
              <span key={i} className="lg:block">
                {line}{" "}
              </span>
            ))}
          </h2>
        </div>
        <div className="mt-[6.5rem] flex flex-col gap-[1.875rem] lg:mt-[5.75rem] lg:gap-10">
          {rowsOf(cards).map((row, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-1 gap-[1.875rem] lg:gap-10",
                row.length === 2 && (row[0].span === "narrow" ? "lg:grid-cols-[41fr_59fr]" : "lg:grid-cols-[59fr_41fr]"),
              )}
            >
              {row.map((card) => (
                <Card key={card.title} card={card} />
              ))}
            </div>
          ))}
          {after}
        </div>
      </div>
    </section>
  );
}
