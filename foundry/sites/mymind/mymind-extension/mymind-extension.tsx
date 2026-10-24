import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MymindMedia } from "@foundry/mymind-media";
import { MymindPlayLink } from "@foundry/mymind-play-link";

/** fill colour of a category pill */
export type MymindPillTone = "chart-2" | "chart-3" | "chart-4" | "highlight";

const pillTones: Record<MymindPillTone, string> = {
  "chart-2": "bg-chart-2 text-primary-foreground",
  "chart-3": "bg-chart-3 text-foreground/80",
  "chart-4": "bg-chart-4 text-primary-foreground",
  highlight: "bg-highlight/70 text-primary-foreground",
};

/** where each of the (up to four) pills sits over the picture, in % of its box */
const pillSpots = [
  "left-[34%] top-[-3.5%]",
  "left-[3%] top-[10.5%]",
  "left-[61%] top-[27%]",
  "left-[18%] top-[64.5%]",
];

export interface MymindExtensionProps {
  /** headline lines (each starts a new line on desktop) */
  title: string[];
  /** paragraph under the headline */
  text: string;
  /** the product picture; empty shows a placeholder */
  media?: ReactNode;
  /** up to four category pills floating over the picture */
  pills: { label: string; tone: MymindPillTone }[];
  /** the play link under the picture */
  link: { label: string; href: string };
  className?: string;
}

/** Headline, paragraph and a pill-ringed product picture. */
export function MymindExtension({ title, text, media, pills, link, className }: MymindExtensionProps) {
  return (
    <section className={cn("bg-background pt-20 pb-16 text-foreground lg:pt-[6.5rem] lg:pb-[5rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        <h2 className="font-display text-[3rem] leading-[0.96] font-[350] tracking-[-0.045em] lg:text-[6rem] lg:leading-[0.9]">
          {title.map((line, i) => (
            <span key={i} className="lg:block">
              {line}{" "}
            </span>
          ))}
        </h2>
        <p className="mt-9 max-w-[22rem] text-lg leading-[1.6] text-muted-foreground lg:mt-9 lg:max-w-[26rem] lg:text-[1.125rem] lg:leading-[1.6]">{text}</p>

        <div className="relative mt-12 w-full max-w-[14.5rem] lg:mt-[5.75rem] lg:max-w-[52.75rem]">
          <MymindMedia className="aspect-[1.366] w-full rounded-[4px] border-t-2 border-primary/70 bg-muted/60 shadow-[0_20px_40px_-20px_color-mix(in_oklab,var(--muted-foreground)_25%,transparent)]">
            {media}
          </MymindMedia>
          {pills.slice(0, 4).map((p, i) => (
            <span
              key={p.label}
              className={cn(
                "absolute hidden h-11 items-center rounded-full px-5 font-[family-name:var(--mymind-round,var(--typeface-body))] text-xl whitespace-nowrap lg:flex",
                pillTones[p.tone],
                pillSpots[i],
              )}
            >
              {p.label}
            </span>
          ))}
        </div>

        <MymindPlayLink href={link.href} className="mt-14 lg:mt-[4.5rem]">
          {link.label}
        </MymindPlayLink>
      </div>
    </section>
  );
}
