import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerButton } from "@foundry/reckoner-button";
import "./reckoner-hero.css";

export interface ReckonerHeroProps {
  /** the big title; it balances itself over two lines on desktop */
  title: string;
  /** up to two buttons in the bottom row: the first filled, the second outlined */
  actions?: { label: string; href: string }[];
  /** the looping cue at the bottom right, linking further down the page */
  scrollCue?: { label: string; href: string };
  /** a faint line of text running down the right edge (desktop) */
  sideLabel?: string;
  /** background artwork, image or video filling the band (cropped like object-fit: cover) */
  media?: ReactNode;
  className?: string;
}

/** A window-tall dark band with a giant title, two buttons and a scroll cue. */
export function ReckonerHero({ title, actions = [], scrollCue, sideLabel, media, className }: ReckonerHeroProps) {
  return (
    <section className={cn("dark relative h-svh min-h-[34rem] overflow-clip bg-background text-foreground", className)}>
      <div aria-hidden={!media} className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">
        {media ?? (
          <div className="bg-[radial-gradient(ellipse_60%_50%_at_70%_45%,color-mix(in_oklab,var(--glow)_16%,transparent),transparent_72%),radial-gradient(ellipse_45%_40%_at_18%_78%,color-mix(in_oklab,var(--glow)_10%,transparent),transparent_70%)]" />
        )}
      </div>

      <div className="relative mx-auto flex h-full max-w-page flex-col px-gutter">
        <div className="flex flex-1 items-center pt-[5.125rem] lg:pt-0 lg:pb-[5.625rem]">
          <h1 className="max-w-[9.5em] font-display text-[3rem] leading-none font-medium lg:text-balance md:text-[clamp(3rem,7.64vw,6.875rem)]">
            {title}
          </h1>
        </div>

        {(actions.length > 0 || scrollCue) && (
          <div className="absolute inset-x-gutter bottom-8 flex items-end justify-between gap-4 lg:bottom-[3.125rem]">
            <div className="flex flex-wrap gap-2.5">
              {actions.slice(0, 2).map((action, i) => (
                <ReckonerButton key={action.label} href={action.href} variant={i === 0 ? "secondary" : "outline"}>
                  {action.label}
                </ReckonerButton>
              ))}
            </div>
            {scrollCue && (
              <a
                href={scrollCue.href}
                className="reckoner-hero-cue hidden items-center gap-3 text-sm tracking-[0.01em] text-foreground/70 transition-colors duration-500 hover:text-foreground sm:flex"
              >
                {scrollCue.label}
                <span className="flex size-[2.875rem] items-center justify-center rounded-sm border border-border [&_svg]:size-4">
                  <ArrowDown strokeWidth={1.5} />
                </span>
              </a>
            )}
          </div>
        )}
      </div>

      {sideLabel && (
        <p className="absolute top-[calc(50%-2.8125rem)] right-[calc(var(--page-gutter)*0.9)] hidden -translate-y-1/2 text-xs tracking-[0.01em] text-foreground/20 [writing-mode:vertical-rl] lg:block">
          {sideLabel}
        </p>
      )}
    </section>
  );
}
