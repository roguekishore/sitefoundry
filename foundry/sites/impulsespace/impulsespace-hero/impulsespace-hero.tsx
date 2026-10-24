import type { ReactNode } from "react";
import { Rocket } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ImpulsespacePlaceholder } from "@foundry/impulsespace-placeholder";

export interface ImpulsespaceHeroProps {
  /** the short title, centred */
  title: string;
  /** the full-window video or photo; empty: a placeholder */
  media?: ReactNode;
  /** a different crop for phones (a tall image); falls back to media */
  phoneMedia?: ReactNode;
  /** what the media shows, for screen readers while it is a placeholder */
  mediaLabel?: string;
  /** the featured vehicle's name, the mono label under the track */
  label: string;
  /** where the label goes */
  labelHref?: string;
  className?: string;
}

/** Full-window media hero: a centred title over a hairline track with a marker and a mono label. */
export function ImpulsespaceHero({ title, media, phoneMedia, mediaLabel, label, labelHref, className }: ImpulsespaceHeroProps) {
  return (
    <section className={cn("dark relative isolate h-svh min-h-[30rem] overflow-clip bg-background text-foreground", className)}>
      <ImpulsespacePlaceholder media={media} label={mediaLabel} className={cn("absolute inset-0 -z-10", phoneMedia && "max-lg:hidden")} />
      {phoneMedia && <ImpulsespacePlaceholder media={phoneMedia} label={mediaLabel} className="absolute inset-0 -z-10 lg:hidden" />}

      <div className="flex h-full flex-col items-center justify-center px-gutter pb-[18svh] text-center lg:justify-end lg:pb-[3.9rem]">
        <h1 className="font-display text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.02em]">{title}</h1>
        <div aria-hidden className="relative mt-[1.9rem] h-px w-full max-w-[25rem] bg-foreground/20">
          <Rocket className="absolute top-1/2 left-1/2 size-3.5 -translate-1/2 rotate-45 fill-current" strokeWidth={1.5} />
        </div>
        <a
          href={labelHref}
          className="mt-[1.05rem] font-mono text-sm leading-[1.5] tracking-[0.08em] uppercase transition-opacity duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-70 motion-reduce:transition-none"
        >
          {label}
        </a>
      </div>
    </section>
  );
}
