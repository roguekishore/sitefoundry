import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherButton } from "@foundry/hhhusher-button";
import "./hhhusher-hero.css";

export interface HhhusherHeroAction {
  label: string;
  href: string;
}

export interface HhhusherHeroProps {
  /** the headline, one entry per line */
  title: string[];
  /** the short paragraph in the right-hand column */
  text: string;
  /** the glass button next to the play square */
  secondary?: HhhusherHeroAction;
  /** the yellow button */
  primary?: HhhusherHeroAction;
  /** screen-reader name of the play square; leave out to hide it */
  playLabel?: string;
  /** link of the play square */
  playHref?: string;
  /** the full-window video or image behind everything (cropped like object-fit: cover) */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-window dark opener. A video fills the window (a quiet placeholder until you give one)
 * and drifts down at half the scroll speed as you leave; a two-line headline sits low in the
 * middle, and a short paragraph with a play square, a glass button and a yellow button sits
 * low on the right. Everything rises in on load.
 */
export function HhhusherHero({ title, text, secondary, primary, playLabel, playHref = "#", media, className }: HhhusherHeroProps) {
  return (
    <section className={cn("hhhusher-hero dark relative flex min-h-svh overflow-clip bg-background text-foreground", className)}>
      <div className="hhhusher-hero-media absolute inset-0 [&>*]:size-full [&>*]:object-cover">
        {media ?? (
          <div aria-hidden className="bg-background">
            <div className="size-full bg-[radial-gradient(ellipse_45%_55%_at_55%_45%,var(--glow),transparent)] opacity-15" />
          </div>
        )}
      </div>

      <div className="relative mx-auto mt-auto flex w-full max-w-page flex-col gap-8 px-gutter pt-32 pb-10 lg:grid lg:grid-cols-[40%_1fr_22.5rem] lg:items-end lg:gap-0">
        <h1 className="hhhusher-hero-in font-display text-[2.6rem] leading-[1.05] font-medium tracking-[-0.02em] lg:col-start-2 lg:-mb-2 lg:text-[4.25rem] lg:leading-[1.1]">
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <div className="hhhusher-hero-in flex flex-col gap-7 [animation-delay:150ms] lg:col-start-3 lg:gap-8">
          <p className="max-w-[24rem] text-[1.04rem] leading-[1.2] font-medium tracking-[-0.01em] lg:text-[1.25rem] lg:leading-[1.15]">{text}</p>
          <div className="flex flex-wrap gap-2">
            {playLabel && (
              <a
                href={playHref}
                aria-label={playLabel}
                className="flex h-10 w-[2.8rem] items-center justify-center rounded-lg bg-foreground/20 text-primary transition-colors duration-300 hover:bg-foreground/40"
              >
                <Play aria-hidden className="size-4" fill="currentColor" strokeWidth={0} />
              </a>
            )}
            {secondary && (
              <HhhusherButton href={secondary.href} variant="glass" className="h-10 hover:border-transparent hover:bg-foreground/30">
                {secondary.label}
              </HhhusherButton>
            )}
            {primary && (
              <HhhusherButton href={primary.href} className="h-10">
                {primary.label}
              </HhhusherButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
