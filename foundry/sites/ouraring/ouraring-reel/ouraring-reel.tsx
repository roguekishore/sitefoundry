import { useRef, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { OuraringRoundButton } from "@foundry/ouraring-button";
import { OuraringMedia } from "@foundry/ouraring-media";
import "./ouraring-reel.css";

export interface OuraringReelCard {
  /** the small label in the chip, e.g. "Rest and Recovery" */
  label: string;
  /** a small line icon before the label (lucide) */
  icon?: ReactNode;
  /** the line at the bottom of the card */
  title: ReactNode;
  /** where the card (and its plus button) leads */
  href: string;
  /** the card's photo (cover) */
  media?: ReactNode;
}

export interface OuraringReelProps {
  cards: OuraringReelCard[];
  /** screen-reader labels for the arrows and the plus buttons */
  labels?: { previous: string; next: string; more: string };
  className?: string;
}

export function OuraringReel({ cards, labels = { previous: "Previous", next: "Next", more: "Learn more" }, className }: OuraringReelProps) {
  const track = useRef<HTMLUListElement>(null);
  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 24), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className={cn("ouraring-reel bg-background pt-[60px] pb-[60px] text-foreground lg:pt-[68px] lg:pb-[72px]", className)}>
      <ul
        ref={track}
        className="ouraring-reel-track flex snap-x snap-mandatory gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card, i) => (
          <li key={i} className="dark group relative aspect-[312/317] w-[80vw] max-w-[493px] shrink-0 snap-start overflow-clip rounded-lg bg-background text-foreground lg:aspect-[493/626]">
            <div className="ouraring-reel-drift absolute inset-x-0 -top-[44px] -bottom-[84px] lg:-top-[74px] lg:-bottom-[144px]">
              <OuraringMedia
                media={card.media}
                tone="deep"
                className="size-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-background/80" />

            <div className="absolute inset-x-6 top-6 flex items-start justify-between gap-3">
              <span className="flex h-11 items-center gap-3 rounded-full bg-background/40 px-4 text-[12px] tracking-[0.02em] backdrop-blur-md lg:h-[52px] lg:px-6 [&_svg]:size-5">
                {card.icon}
                {card.label}
              </span>
              <a
                href={card.href}
                aria-label={labels.more}
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-[filter] duration-150 hover:brightness-90 lg:size-[52px]"
              >
                <Plus aria-hidden strokeWidth={1.5} className="size-5" />
              </a>
            </div>

            <div className="ouraring-reel-fade absolute inset-x-6 bottom-7">
              <a href={card.href} className="block max-w-[8.6em] text-[28px] leading-none font-[250] tracking-[-0.02em] lg:text-[40px]">
                {card.title}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="mx-auto max-w-page px-gutter">
        <div className="mt-8 flex items-center justify-end gap-6 border-t border-border pt-6">
          <OuraringRoundButton tone="bare" icon={<ArrowLeft strokeWidth={1.5} />} label={labels.previous} onClick={() => step(-1)} />
          <OuraringRoundButton icon={<ArrowRight strokeWidth={1.5} />} label={labels.next} onClick={() => step(1)} />
        </div>
      </div>
    </section>
  );
}
