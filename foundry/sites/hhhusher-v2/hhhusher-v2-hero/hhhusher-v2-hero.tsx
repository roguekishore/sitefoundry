import type { CSSProperties, ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherV2Button } from "@foundry/hhhusher-v2-button";
import "./hhhusher-v2-hero.css";

export interface HhhusherV2HeroProps {
  /** the headline, two short lines (use \n to break) */
  heading: string;
  /** the paragraph above the buttons */
  text: string;
  /** label of the soft-glass play square, for screen readers */
  playLabel?: string;
  /** what the play square does (open a film, etc.) */
  onPlay?: () => void;
  /** the cream-glass link next to the play square */
  link?: { label: string; href: string };
  /** the yellow buy button */
  buy?: { label: string; href: string };
  /** the full-window film or picture (a <video> or <img>); a dark placeholder when empty */
  media?: ReactNode;
  id?: string;
  className?: string;
}

const step = (n: number) => ({ "--hh-step": n }) as CSSProperties;

export function HhhusherV2Hero({ heading, text, playLabel, onPlay, link, buy, media, id, className }: HhhusherV2HeroProps) {
  return (
    <section id={id} className={cn("hhhusher-v2-hero dark relative isolate flex min-h-svh flex-col justify-end overflow-clip bg-card text-foreground", className)}>
      {/* the film: fills the window, cropped like cover, drifting down as you scroll */}
      <div className="hhhusher-v2-hero-drift absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">
        {media ?? <div className="size-full bg-[radial-gradient(ellipse_60%_55%_at_55%_45%,color-mix(in_oklab,var(--glow)_14%,transparent),transparent_70%)]" />}
      </div>

      <div className="mx-auto grid w-full max-w-page gap-8 px-gutter pt-40 pb-10 lg:grid-cols-[39.7%_minmax(0,1fr)_26.5%] lg:items-end lg:gap-0 lg:pb-10">
        <h1
          className="hhhusher-v2-hero-rise font-display text-[3.12rem] leading-[0.95] font-[570] tracking-[-0.02em] whitespace-pre-line lg:col-start-2 lg:text-[4.25rem] lg:leading-[1]"
          style={step(0)}
        >
          {heading}
        </h1>
        <div className="hhhusher-v2-hero-rise lg:col-start-3" style={step(1)}>
          <p className="font-display text-[1.04rem] leading-[1.3] font-[570] tracking-[-0.02em] lg:text-[1.25rem] lg:leading-[1.15]">{text}</p>
          <div className="mt-6 flex flex-wrap gap-2.5 lg:mt-8">
            <HhhusherV2Button variant="soft" className="h-10 w-[2.8rem] px-0" label={playLabel} onClick={onPlay}>
              <Play className="size-4 fill-current" strokeWidth={0} />
            </HhhusherV2Button>
            {link && (
              <HhhusherV2Button variant="glass" href={link.href} className="h-10">
                {link.label}
              </HhhusherV2Button>
            )}
            {buy && (
              <HhhusherV2Button href={buy.href} className="h-10">
                {buy.label}
              </HhhusherV2Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
