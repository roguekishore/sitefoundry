import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MymindEyebrow } from "@foundry/mymind-eyebrow";
import { MymindMedia } from "@foundry/mymind-media";
import { MymindPlayLink } from "@foundry/mymind-play-link";

/** where the four photos sit in the collage (% of its box); the third is the lifted one */
const spots = [
  "left-[3%] top-0 w-[29%] h-[46%]",
  "left-[68%] top-[2.6%] w-[32%] h-[39%]",
  "left-[25.6%] top-[26.3%] w-[52%] h-[57.4%] z-10 shadow-[0_24px_60px_-20px_color-mix(in_oklab,var(--foreground)_30%,transparent)]",
  "left-0 top-[72%] w-[38.4%] h-[28%]",
];

export interface MymindAiProps {
  /** small tangerine capitals */
  eyebrow: string;
  /** headline text before the pill */
  before: string;
  /** the word set inside the outlined pill */
  badge: string;
  /** headline text after the pill */
  after: string;
  /** paragraph under the headline */
  text: string;
  /** up to four photos for the collage (empty ones are placeholders) */
  photos?: ReactNode[];
  /** the little chip on the lifted photo, e.g. "Keep it" */
  chip: string;
  /** play link under the collage */
  link: { label: string; href: string };
  className?: string;
}

/** Warm band with a pill-in-headline and a four-photo collage. */
export function MymindAi({ eyebrow, before, badge, after, text, photos = [], chip, link, className }: MymindAiProps) {
  return (
    <section className={cn("bg-secondary/70 pt-20 pb-16 text-foreground lg:pt-[7.25rem] lg:pb-[6rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        <MymindEyebrow tone="primary">{eyebrow}</MymindEyebrow>
        <h2 className="mt-4 max-w-[22rem] font-display text-[3rem] leading-[0.92] font-[350] tracking-[-0.045em] lg:mt-5 lg:max-w-[46rem] lg:text-[6rem] lg:leading-[0.88]">
          {before}{" "}
          <span className="relative -top-[0.08em] mx-[0.04em] inline-flex h-[0.62em] items-center rounded-full border-[0.045em] border-primary px-[0.16em] align-middle font-[family-name:var(--mymind-round,var(--typeface-body))] text-[0.62em] leading-none font-bold tracking-[0.02em] text-primary">
            <span className="text-[0.75em]">{badge}</span>
          </span>{" "}
          {after}
        </h2>
        <p className="mt-9 max-w-[22rem] text-lg leading-[1.6] text-muted-foreground lg:mt-8 lg:max-w-[28rem]">{text}</p>

        <div className="relative mt-24 aspect-[968/920] w-full max-w-[17.5rem] lg:mt-[6.5rem] lg:max-w-[60.5rem]">
          {spots.map((spot, i) => (
            <MymindMedia key={i} className={cn("absolute", spot)}>
              {photos[i]}
            </MymindMedia>
          ))}
          <span className="absolute top-[69.6%] left-[67.6%] z-20 hidden h-[3.375rem] items-center gap-3 rounded-[6px] bg-card pr-5 pl-3 text-base font-medium text-foreground shadow-[0_4px_7px_-4px_color-mix(in_oklab,var(--muted-foreground)_32%,transparent)] lg:flex">
            <span className="grid size-[1.875rem] place-items-center rounded-full bg-primary text-primary-foreground [&_svg]:size-4">
              <Plus strokeWidth={2.5} />
            </span>
            {chip}
          </span>
        </div>

        <MymindPlayLink href={link.href} className="mt-12 lg:mt-[5.5rem]">
          {link.label}
        </MymindPlayLink>
      </div>
    </section>
  );
}
