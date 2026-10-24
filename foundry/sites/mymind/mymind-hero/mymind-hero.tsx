import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MymindMedia } from "@foundry/mymind-media";
import { MymindPill } from "@foundry/mymind-pill";
import "./mymind-hero.css";

/** colour of an outlined tag pill */
export type MymindTagTone = "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";

const tagTones: Record<MymindTagTone, string> = {
  "chart-1": "border-chart-1 text-chart-1 from-chart-1/6",
  "chart-2": "border-chart-2 text-chart-2 from-chart-2/6",
  "chart-3": "border-chart-3 text-chart-3 from-chart-3/6",
  "chart-4": "border-chart-4 text-chart-4 from-chart-4/6",
  "chart-5": "border-chart-5 text-chart-5 from-chart-5/6",
};

/** a piece of the sentence: plain words, or a word set in an outlined tag pill */
export type MymindSentencePart = string | { tag: string; tone: MymindTagTone };

export interface MymindAppLink {
  /** e.g. "Phone app" */
  label: string;
  /** where it goes */
  href: string;
  /** a small app icon */
  icon: ReactNode;
}

export interface MymindHeroProps {
  /** headline lines; each starts a new line (phones may wrap inside a line) */
  title: string[];
  /** the sentence under the headline, with some words as coloured tag pills */
  sentence: MymindSentencePart[];
  /** app pills under the sentence (tablet and up) */
  apps: MymindAppLink[];
  /** the single call to action that replaces the app pills on phones */
  phoneCta: { label: string; href: string };
  /** the product preview (video or image); empty shows a placeholder */
  media?: ReactNode;
  /** caption that rises over the preview as it scrolls in */
  watchLabel: string;
  /** link of the play button */
  watchHref: string;
  className?: string;
}

/** Glow-ringed disc hero with a scroll-revealed play button on the preview. */
export function MymindHero({ title, sentence, apps, phoneCta, media, watchLabel, watchHref, className }: MymindHeroProps) {
  return (
    <section className={cn("relative isolate overflow-x-clip bg-background pt-[13.25rem] text-foreground md:pt-[10rem] lg:pt-[9.375rem]", className)}>
      {/* the ring of light and the white disc */}
      <div aria-hidden className="absolute top-[6.25rem] left-1/2 -z-10 aspect-square w-[42.5rem] -translate-x-1/2 md:top-[1rem] md:w-[56rem] lg:top-[-4.25rem] lg:w-[65.375rem]">
        <div className="absolute -inset-[13%] rounded-full bg-[conic-gradient(from_0deg,var(--primary)_0deg,var(--primary)_35deg,var(--glow)_95deg,color-mix(in_oklab,var(--chart-3)_70%,var(--glow))_150deg,var(--chart-3)_190deg,color-mix(in_oklab,var(--glow)_60%,var(--chart-3))_250deg,var(--glow)_290deg,var(--primary)_330deg)] opacity-90 blur-[60px] lg:blur-[80px]" />
        <div className="absolute inset-0 rounded-full bg-background blur-[3px]" />
      </div>

      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        <h1 className="font-display text-[3.125rem] leading-[0.96] font-normal tracking-[-0.045em] md:text-[5.75rem] md:leading-[0.9] lg:text-[8.375rem] lg:leading-[0.88]">
          {title.map((line, i) => (
            <span key={line} className="mymind-hero-in block" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
              {line}
            </span>
          ))}
        </h1>

        <p
          className="mymind-hero-in mt-5 max-w-[22rem] text-base leading-10 text-muted-foreground md:max-w-[28rem] lg:mt-[1.875rem] lg:max-w-[28rem] lg:text-xl lg:leading-[2.75rem]"
          style={{ animationDelay: "0.36s" }}
        >
          {sentence.map((part, i) =>
            typeof part === "string" ? (
              <span key={i}> {part} </span>
            ) : (
              <span
                key={i}
                className={cn(
                  "mx-0.5 inline-flex h-[1.875rem] items-center rounded-full border bg-gradient-to-b to-transparent px-3.5 align-middle font-[family-name:var(--mymind-round,var(--typeface-body))] text-[0.9375rem] lg:h-[2.125rem] lg:px-[1.125rem] lg:text-lg",
                  tagTones[part.tone],
                )}
              >
                {part.tag}
              </span>
            ),
          )}
        </p>

        <div className="mymind-hero-in mt-12 md:hidden" style={{ animationDelay: "0.48s" }}>
          <MymindPill href={phoneCta.href} className="px-6 text-lg">
            {phoneCta.label}
          </MymindPill>
        </div>
        <div className="mymind-hero-in mt-[6.5rem] hidden flex-wrap justify-center gap-2.5 md:flex lg:mt-[6.375rem]" style={{ animationDelay: "0.48s" }}>
          {apps.map((a) => (
            <MymindPill key={a.label} href={a.href} variant="soft" size="lg" icon={a.icon}>
              {a.label}
            </MymindPill>
          ))}
        </div>

        <div className="mymind-hero-frame relative mt-[14.5rem] w-full max-w-[19.375rem] md:mt-7 md:max-w-[50rem] lg:max-w-[68.625rem]">
          <MymindMedia className="aspect-[1.41] w-full rounded-[6px] border border-border/50 bg-muted lg:rounded-[12px]">{media}</MymindMedia>
          <a href={watchHref} className="group absolute inset-0 flex flex-col items-center rounded-[6px] lg:rounded-[12px]">
            <span aria-hidden className="mymind-hero-veil absolute inset-0 rounded-[inherit] bg-gradient-to-b from-background/70 via-background/80 to-background/40" />
            <span className="mymind-hero-play relative mt-[16%] grid size-14 place-items-center rounded-full bg-gradient-to-b from-primary to-chart-1 text-primary-foreground shadow-[0_57px_60px_-54px_color-mix(in_oklab,var(--chart-1)_44%,transparent),0_-27px_50px_-40px_color-mix(in_oklab,var(--primary)_27%,transparent)] transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-105 lg:size-[6.25rem]">
              <Play className="ml-1 size-5 fill-current lg:size-7" strokeWidth={0} />
            </span>
            <span className="mymind-hero-caption relative mt-auto mb-[6%] font-display text-xl tracking-[-0.03em] text-foreground/85 lg:text-[2.625rem]">{watchLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
