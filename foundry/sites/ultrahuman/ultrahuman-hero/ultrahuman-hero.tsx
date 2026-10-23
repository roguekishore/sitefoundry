import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanButton } from "@foundry/ultrahuman-button";
import { UltrahumanPlaceholder } from "@foundry/ultrahuman-placeholder";
import "./ultrahuman-hero.css";

export interface UltrahumanHeroProps {
  /** small uppercase product name above the headline */
  eyebrow: string;
  /** the short headline */
  title: string;
  /** one line under the headline */
  body: string;
  /** the blue buy button */
  primary: { label: string; href: string };
  /** the translucent second button */
  secondary?: { label: string; href: string };
  /** the photo or video filling the panel (cover); a placeholder when empty */
  media?: ReactNode;
  /** describes the photo for screen readers when the placeholder shows */
  mediaLabel?: string;
  className?: string;
}

/** A window-tall product panel inset 10px with rounded top corners, fading into the white page at
 *  the bottom. Copy sits left-middle on desktop, centred at the top on phones, and rises in on load. */
export function UltrahumanHero({ eyebrow, title, body, primary, secondary, media, mediaLabel, className }: UltrahumanHeroProps) {
  return (
    <section className={cn("bg-background px-2.5", className)}>
      <div className="relative isolate flex h-[95svh] flex-col items-center overflow-clip rounded-t-lg text-center text-foreground lg:h-svh lg:items-start lg:justify-center lg:text-left">
        <div className="absolute inset-0 -z-10">{media ?? <UltrahumanPlaceholder tone="warm" label={mediaLabel} />}</div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-[24%] bg-[linear-gradient(transparent,color-mix(in_oklab,var(--background)_45%,transparent)_55%,var(--background))]" />

        <div className="ultrahuman-hero-copy px-5 pt-14 lg:px-[7.5rem] lg:pt-0">
          <p className="text-[0.8125rem] leading-none tracking-[0.01em] uppercase lg:text-lg">{eyebrow}</p>
          <h1 className="mt-2.5 text-[1.875rem] leading-[1.1] tracking-[-0.03em] lg:mt-2 lg:text-5xl lg:leading-[1.15] lg:tracking-[-0.04em]">{title}</h1>
          <p className="mt-3 text-[0.9375rem] leading-[1.25rem] tracking-[-0.0175em] lg:mt-3.5 lg:text-base">{body}</p>
        </div>
        <div className="ultrahuman-hero-actions mt-7 flex gap-2 px-5 lg:mt-7 lg:gap-4 lg:px-[7.5rem]">
          <UltrahumanButton href={primary.href}>{primary.label}</UltrahumanButton>
          {secondary && (
            <UltrahumanButton href={secondary.href} variant="glass">
              {secondary.label}
            </UltrahumanButton>
          )}
        </div>
      </div>
    </section>
  );
}
