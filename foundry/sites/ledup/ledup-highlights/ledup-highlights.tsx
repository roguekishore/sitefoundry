import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LedupHeading } from "@foundry/ledup-heading";
import { LedupReveal } from "@foundry/ledup-reveal";

export interface LedupHighlightCard {
  /** photo: a photo card with a white label · product: a white card with a product shot · stat: the orange number card */
  kind: "photo" | "product" | "stat";
  /** the card's label (for a stat card, the caption under the number) */
  title: string;
  /** a second, quieter line under the label (photo cards) */
  text?: string;
  /** the big number (stat cards) */
  value?: string;
  /** where the card goes; photo and product cards show the circle arrow when set */
  href?: string;
  /** the photo, product shot or video; empty shows a placeholder */
  media?: ReactNode;
  /** share of the row's width on desktop (the original's widths in px work as-is) */
  weight?: number;
}

export interface LedupHighlightRow {
  /** the cards in this row, left to right */
  cards: LedupHighlightCard[];
  /** desktop height: short is 260px, tall is 300px */
  height?: "short" | "tall";
}

export interface LedupHighlightsProps {
  /** the small label above the headline */
  label?: string;
  /** the headline */
  title: ReactNode;
  /** the paragraph under the headline (desktop only, as on the original) */
  text?: ReactNode;
  /** the bento rows; on phones all cards stack in order */
  rows: LedupHighlightRow[];
  className?: string;
}

export function LedupHighlights({ label, title, text, rows, className }: LedupHighlightsProps) {
  return (
    <section className={cn("bg-background pt-[4.25rem] pb-4 font-sans text-foreground lg:pt-section lg:pb-[9.25rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <LedupHeading label={label} title={title} text={text} />
        <div className="mt-14 flex flex-col gap-4 lg:mt-24 lg:gap-7">
          {rows.map((row, r) => (
            <div
              key={r}
              className="grid gap-4 lg:grid-cols-[var(--ledup-highlights-cols)] lg:gap-7"
              style={{ "--ledup-highlights-cols": row.cards.map((c) => `${c.weight ?? 1}fr`).join(" ") } as CSSProperties}
            >
              {row.cards.map((card, i) => (
                <LedupReveal key={card.title} distance={40} step={i} className={cn("h-40", row.height === "tall" ? "lg:h-[18.75rem]" : "lg:h-[16.25rem]")}>
                  <Card card={card} />
                </LedupReveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ card }: { card: LedupHighlightCard }) {
  const Tag = card.href ? "a" : "div";

  if (card.kind === "stat") {
    return (
      <Tag
        href={card.href}
        className="relative isolate flex h-full flex-col items-center justify-center overflow-clip rounded-lg text-center text-highlight-foreground"
      >
        <div className="absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">
          {card.media ?? <div className="bg-[radial-gradient(90%_120%_at_10%_0%,var(--highlight),var(--glow)_60%,var(--highlight))]" />}
        </div>
        <span className="text-4xl leading-[1.2] font-light">{card.value}</span>
        <span className="mt-1 text-xs font-medium">{card.title}</span>
      </Tag>
    );
  }

  if (card.kind === "product") {
    return (
      <Tag
        href={card.href}
        className="group relative flex h-full flex-col overflow-clip rounded-lg bg-card p-4 text-card-foreground shadow-[0_0.1px_20px_var(--muted)] transition-[translate,box-shadow] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_color-mix(in_oklch,var(--foreground)_10%,transparent),0_2px_8px_color-mix(in_oklch,var(--foreground)_5%,transparent)] motion-reduce:transition-none lg:p-5"
      >
        <div className="mx-auto size-[6.25rem] overflow-clip rounded-lg lg:mt-1 lg:size-[9.375rem] [&>*]:size-full [&>*]:object-contain">
          {card.media ?? <div className="bg-muted" />}
        </div>
        <span className="mt-auto pr-20 text-base">{card.title}</span>
        {card.href && <Arrow tone="ink" />}
      </Tag>
    );
  }

  return (
    <Tag href={card.href} className="group relative isolate flex h-full flex-col justify-end overflow-clip rounded-lg p-5 text-background">
      <div className="absolute inset-0 -z-20 [&>*]:size-full [&>*]:object-cover">{card.media ?? <div className="bg-muted" />}</div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/75 via-foreground/30 to-transparent" />
      <span className="pr-20 text-sm font-semibold lg:text-lg">{card.title}</span>
      {card.text && <span className="mt-1 pr-20 text-sm text-background/40">{card.text}</span>}
      {card.href && <Arrow tone="light" />}
    </Tag>
  );
}

function Arrow({ tone }: { tone: "light" | "ink" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute right-4 bottom-4 grid size-[3.75rem] place-items-center rounded-full border transition-colors duration-300 group-hover:bg-background/90 group-hover:text-foreground motion-reduce:transition-none",
        tone === "light" ? "border-background text-background" : "border-input text-input",
      )}
    >
      <ArrowUpRight strokeWidth={1} className="size-7" />
    </span>
  );
}
