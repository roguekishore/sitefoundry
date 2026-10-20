import type { ReactNode } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerV2Button } from "@foundry/reckoner-v2-button";
import "./reckoner-v2-hero.css";

export interface ReckonerV2HeroProps {
  /** the headline; wraps by itself (about two lines on desktop, three on phones) */
  title: string;
  /** square buttons under the headline: an outline one and a tinted one, usually */
  actions?: { label: string; href: string; variant?: "outline" | "tint" }[];
  /** a short news link at the bottom left, with an arrow */
  news?: { label: string; href: string };
  /** the cue at the bottom right that points down the page */
  scrollCue?: { label: string; href: string };
  /** a faint label written down the right edge on desktop (e.g. the parent company) */
  aside?: string;
  /** full-bleed artwork behind everything (an <img>, <video> or <canvas>); cropped to the screen */
  background?: ReactNode;
  className?: string;
}

export function ReckonerV2Hero({ title, actions = [], news, scrollCue, aside, background, className }: ReckonerV2HeroProps) {
  return (
    <section className={cn("relative isolate flex min-h-svh flex-col overflow-clip bg-primary text-primary-foreground", className)}>
      {/* artwork slot: fills the screen like object-fit: cover */}
      <div aria-hidden={!background} className="absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">
        {background ?? (
          <div className="bg-[radial-gradient(ellipse_70%_60%_at_72%_30%,color-mix(in_oklab,var(--highlight)_16%,transparent),transparent_70%)]" />
        )}
      </div>

      <div className="mx-auto flex w-full max-w-page flex-1 flex-col px-gutter pt-[46svh] pb-8 lg:pt-[33svh] lg:pb-12">
        <h1 className="max-w-[18ch] font-display text-[3rem] leading-none font-normal tracking-[-0.02em] text-balance lg:max-w-[56rem] lg:text-[6.875rem]">
          {title}
        </h1>

        {actions.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-12">
            {actions.map((a) => (
              <ReckonerV2Button key={a.href} href={a.href} variant={a.variant ?? "outline"}>
                {a.label}
              </ReckonerV2Button>
            ))}
          </div>
        )}

        {(news || scrollCue) && (
          <div className="mt-auto flex items-end justify-between gap-6 pt-10">
            {news ? (
              <a
                href={news.href}
                className="group/news max-w-[22rem] text-sm leading-[1.4] text-primary-foreground/70 transition-colors duration-500 hover:text-primary-foreground motion-reduce:transition-none"
              >
                {news.label}
                <ArrowRight
                  aria-hidden
                  className="ml-2 inline size-[1em] align-[-0.125em] transition-[translate] duration-500 group-hover/news:translate-x-[0.125em] motion-reduce:transition-none"
                  strokeWidth={1.75}
                />
              </a>
            ) : (
              <span />
            )}
            {scrollCue && (
              <a href={scrollCue.href} className="group flex shrink-0 items-center gap-3 text-xs tracking-[0.02em] uppercase">
                {scrollCue.label}
                <span
                  aria-hidden
                  className="flex h-8 w-8 flex-col items-center justify-center gap-[0.25em] overflow-clip border border-primary-foreground/15 transition-[gap] duration-500 group-hover:gap-[0.0625em] motion-reduce:transition-none"
                >
                  <ArrowDown className="reckoner-v2-hero-cue-arrow size-3" strokeWidth={1.75} />
                  <ArrowDown className="reckoner-v2-hero-cue-arrow size-3" strokeWidth={1.75} />
                </span>
              </a>
            )}
          </div>
        )}
      </div>

      {aside && (
        <p className="absolute top-[38%] right-gutter hidden text-xs text-primary-foreground/20 [writing-mode:vertical-rl] lg:block">{aside}</p>
      )}
    </section>
  );
}
