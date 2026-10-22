import type { ReactNode } from "react";
import { CirclePlay } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepButton } from "@foundry/eightsleep-button";
import { EightsleepMedia } from "@foundry/eightsleep-media";

export interface EightsleepFilmProps {
  /** the one centered line */
  title: ReactNode;
  /** the white button, e.g. to open the film */
  cta: { label: ReactNode; href?: string; onClick?: () => void };
  /** the looping background video (or a still), cover-fitted */
  media?: ReactNode;
  /** screen-reader label for the small corner play toggle; leave out to hide it */
  toggleLabel?: string;
  /** called by the corner toggle */
  onToggle?: () => void;
  className?: string;
}

export function EightsleepFilm({ title, cta, media, toggleLabel, onToggle, className }: EightsleepFilmProps) {
  return (
    <section className={cn("dark relative isolate flex h-[min(640px,80svh)] bg-background items-center justify-center overflow-clip text-foreground", className)}>
      <EightsleepMedia media={media} className="absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background/25" />
      <div className="flex flex-col items-center gap-7 px-gutter text-center">
        <h2 className="max-w-[12ch] font-display text-[32px] leading-[1.1] font-normal tracking-[-0.01em] sm:max-w-none lg:text-[44px]">{title}</h2>
        <EightsleepButton size="lg" href={cta.href} onClick={cta.onClick} icon={<CirclePlay strokeWidth={1.75} />}>
          {cta.label}
        </EightsleepButton>
      </div>
      {toggleLabel && (
        <button
          type="button"
          aria-label={toggleLabel}
          onClick={onToggle}
          className="absolute right-6 bottom-6 opacity-60 transition-opacity duration-200 hover:opacity-100"
        >
          <CirclePlay className="size-[22px]" strokeWidth={1.25} />
        </button>
      )}
    </section>
  );
}
