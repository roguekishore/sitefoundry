import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanButton } from "@foundry/ultrahuman-button";
import { UltrahumanPlaceholder } from "@foundry/ultrahuman-placeholder";

export interface UltrahumanPromoReadout {
  /** the figure shown in brackets above the box, e.g. "82" or "14%" */
  value: string;
  /** the metric's name inside the box, e.g. "Readiness" */
  label: string;
}

export interface UltrahumanPromoProps {
  /** small uppercase product name above the headline */
  eyebrow: string;
  /** the headline, one string per line (set in a condensed italic, uppercase) */
  title: string[];
  /** one line under the headline */
  body: string;
  /** the white pill button */
  action: { label: string; href: string };
  /** the photo or video filling the panel (cover); a placeholder when empty */
  media?: ReactNode;
  /** describes the photo for screen readers when the placeholder shows */
  mediaLabel?: string;
  /** up to three readouts floating around the circular lens (desktop only) */
  readouts?: UltrahumanPromoReadout[];
  className?: string;
}

// where the three readouts sit on the panel (desktop), as % of its width / height
const readoutSpots = ["left-[47.5%] top-[17.5%]", "left-[83%] top-[9%]", "left-[84.4%] top-[68.5%]"];

/** A photo banner inset 10px from the window edges with 16px corners: a big condensed italic offer
 *  on the left, and on desktop a thin circular lens with mono HUD readouts on the right. */
export function UltrahumanPromo({ eyebrow, title, body, action, media, mediaLabel, readouts = [], className }: UltrahumanPromoProps) {
  return (
    <section className={cn("bg-background px-2.5 pt-0.5 pb-2.5 lg:pt-0", className)}>
      <div className="dark relative isolate flex h-[90svh] flex-col justify-end overflow-clip rounded-lg bg-background text-foreground lg:aspect-[1420/503] lg:h-auto lg:justify-center">
        <div className="absolute inset-0 -z-10">
          {media ?? <UltrahumanPlaceholder tone="photo" label={mediaLabel} />}
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-background/55 via-background/10 to-transparent lg:bg-gradient-to-r lg:from-background/45 lg:via-background/10" />

        <div aria-hidden className="absolute top-1/2 left-[69.7%] hidden aspect-square w-[29.4%] -translate-1/2 rounded-full border border-foreground/25 bg-foreground/[0.03] lg:block" />
        {readouts.slice(0, 3).map((readout, i) => (
          <div key={readout.label} className={cn("absolute hidden font-mono uppercase lg:block", readoutSpots[i])}>
            <p className="text-xs tracking-[0.04em] text-foreground/60">[{readout.value}]</p>
            <p className="relative mt-1.5 border border-foreground/35 px-3 py-[0.6875rem] text-xs leading-none tracking-[0.06em] text-foreground/85">
              {readout.label}
              {["-top-0.5 -left-0.5", "-top-0.5 -right-0.5", "-bottom-0.5 -left-0.5", "-right-0.5 -bottom-0.5"].map((spot) => (
                <span key={spot} aria-hidden className={cn("absolute size-1 bg-foreground/70", spot)} />
              ))}
            </p>
          </div>
        ))}

        <div className="px-5 pb-10 lg:px-24 lg:pb-0">
          <p className="text-base leading-none font-light tracking-[-0.01em] uppercase lg:text-2xl">{eyebrow}</p>
          <h2 className="mt-5 font-[family-name:var(--ultrahuman-condensed,var(--typeface-display))] text-[3.75rem] leading-[0.92] font-medium tracking-[calc(-0.01em-var(--ultrahuman-squeeze,0em))] uppercase italic [font-stretch:50%] lg:mt-6 lg:text-[6rem] lg:leading-[0.97]">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-base leading-[1.375rem] tracking-[-0.0175em] text-foreground/95 lg:mt-5">{body}</p>
          <UltrahumanButton href={action.href} variant="ink" size="lg" className="mt-6">
            {action.label}
          </UltrahumanButton>
        </div>
      </div>
    </section>
  );
}
