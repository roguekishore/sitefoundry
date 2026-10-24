import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ImpulsespaceButton } from "@foundry/impulsespace-button";
import { ImpulsespacePlaceholder } from "@foundry/impulsespace-placeholder";
import "./impulsespace-missions.css";

export interface ImpulsespaceMission {
  /** the mission's name */
  name: string;
  /** a short mono detail (year, orbit) */
  detail: string;
  /** the mission's page */
  href: string;
  /** this mission's own photo, faded in while it is hovered */
  media?: ReactNode;
}

export interface ImpulsespaceMissionsProps {
  /** the section heading */
  title: string;
  /** one or two sentences beside the heading */
  lede?: string;
  /** an outline pill beside the heading */
  cta?: { label: string; href: string };
  /** the frame's photo; empty: a placeholder */
  media?: ReactNode;
  /** what the photo shows, for screen readers while it is a placeholder */
  mediaLabel?: string;
  /** the missions, newest first (six to fifteen) */
  missions: ImpulsespaceMission[];
  /** anchor id for the section */
  id?: string;
  className?: string;
}

/** Black band: heading row, then a window-tall photo frame with a hover-wipe mission list over it. */
export function ImpulsespaceMissions({ title, lede, cta, media, mediaLabel, missions, id, className }: ImpulsespaceMissionsProps) {
  return (
    <section id={id} className={cn("dark bg-background pt-section pb-12 text-foreground max-lg:pb-section", className)}>
      <div className="flex flex-col gap-6 px-gutter lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-display text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.02em]">{title}</h2>
        {(lede || cta) && (
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8">
            {lede && <p className="max-w-[26rem] text-base leading-[1.4] text-muted-foreground">{lede}</p>}
            {cta && (
              <ImpulsespaceButton href={cta.href} variant="outline">
                {cta.label}
              </ImpulsespaceButton>
            )}
          </div>
        )}
      </div>

      <div className="impulsespace-missions-frame relative isolate mt-12 grid h-[calc(100svh-2.375rem)] min-h-[34rem] overflow-clip">
        <div className="impulsespace-missions-zoom absolute inset-0 z-0">
          <ImpulsespacePlaceholder media={media} label={mediaLabel} className="size-full" />
        </div>
        {/* the bottom-up shade under the list */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 z-[2] h-3/4 bg-linear-to-t from-background/80 to-transparent" />

        {/* static list: each mission's photo layer positions against the frame */}
        <ul className="self-end px-gutter pb-8 [grid-area:1/1] lg:pb-10">
          {missions.map((m) => (
            <li key={m.name} className="group">
              {m.media && (
                <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 motion-reduce:transition-none [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
                  {m.media}
                </div>
              )}
              <a href={m.href} className="relative z-[3] flex items-baseline gap-4 py-0.5 lg:gap-6">
                <span
                  className={cn(
                    "font-display text-[1.375rem] leading-[1.3] font-semibold tracking-[-0.01em] lg:text-[2.5rem] lg:leading-[1.2] lg:tracking-[-0.02em]",
                    // the wipe: a half-white, half-dim fill slides across the letters
                    "bg-[linear-gradient(90deg,var(--foreground)_50%,color-mix(in_oklab,var(--foreground)_50%,transparent)_50%)] bg-size-[200%_100%] bg-position-[100%_0] bg-clip-text text-transparent",
                    "transition-[background-position] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-position-[0_0] group-focus-within:bg-position-[0_0] motion-reduce:transition-none",
                  )}
                >
                  {m.name}
                </span>
                <span className="font-mono text-sm leading-[1.5] tracking-[0.08em] text-muted-foreground uppercase transition-colors duration-250 group-hover:text-foreground">
                  {m.detail}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
