import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RaycastButton } from "@foundry/raycast-button";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";
import "./raycast-hero.css";

export interface RaycastHeroProps {
  /** the page title (wraps to two lines) */
  title: ReactNode;
  /** the lead under the title */
  lead: ReactNode;
  /** the light download button (desktop only) */
  cta?: { label: ReactNode; href: string; icon?: ReactNode };
  /** two small mono lines under the button (desktop only) */
  notes?: ReactNode[];
  /** the pill at the bottom edge, with a travelling border highlight */
  pill: { label: ReactNode; href: string; icon?: ReactNode };
  /** the crimson artwork behind everything (image, video, canvas); a soft red wash when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * A dark hero: a big artwork slot behind a centred title and lead, the download button with
 * its small print on desktop, and a pill sitting on the bottom edge.
 */
export function RaycastHero({ title, lead, cta, notes = [], pill, media, className }: RaycastHeroProps) {
  return (
    <section className={cn("relative isolate flex flex-col items-center overflow-clip bg-background px-gutter pt-64 text-center text-foreground lg:pt-[23rem]", className)}>
      <div aria-hidden className="absolute inset-x-0 top-0 bottom-0 -z-10 overflow-clip [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] [&>*]:size-full">
        {media ?? <RaycastPlaceholder tone="glow" className="!bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,color-mix(in_oklab,var(--glow)_70%,transparent),color-mix(in_oklab,var(--glow)_20%,transparent)_55%,transparent_80%)]" />}
      </div>

      <h1 className="raycast-hero-rise max-w-[22rem] text-[2rem] leading-[1.15] font-semibold tracking-[-0.01em] text-balance sm:max-w-none lg:max-w-[34rem] lg:text-[3.5rem] lg:leading-[1.25]">
        {title}
      </h1>
      <p className="raycast-hero-rise raycast-hero-rise-late mt-8 max-w-[17rem] text-sm leading-[1.2] font-medium tracking-[0.2px] text-balance lg:mt-9 lg:max-w-[30rem] lg:text-lg">
        {lead}
      </p>

      {cta && (
        <div className="raycast-hero-rise raycast-hero-rise-later mt-[13.25rem] hidden flex-col items-center lg:flex">
          <RaycastButton label={cta.label} href={cta.href} icon={cta.icon} />
          {notes.map((note, i) => (
            <p key={i} className={cn("font-mono text-xs tracking-[0.1px] text-muted-foreground/70", i === 0 ? "mt-6" : "mt-3")}>
              {note}
            </p>
          ))}
        </div>
      )}

      <a
        href={pill.href}
        className={cn("raycast-hero-pill mt-[10.25rem] inline-flex rounded-full p-px lg:mt-12")}
      >
        <span className="inline-flex h-8 items-center gap-2 rounded-full bg-background px-4 text-sm font-semibold tracking-[0.2px] [&_svg]:size-4">
          {pill.label}
          {pill.icon}
        </span>
      </a>
    </section>
  );
}
