import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalButton } from "@foundry/halodental-button";

export interface HalodentalMissionProps {
  /** monumental gradient headline (breaks across two lines) */
  title: string;
  /** body paragraph beside the square portrait slot */
  description: string;
  /** primary orange button below the paragraph */
  cta: {
    label: string;
    href: string;
  };
  /** 164×164 (phone) / 210×210 (desktop) rounded square portrait slot */
  teamMedia?: ReactNode;
  /** right-hand 4-column 3D/canvas media slot */
  canvasMedia?: ReactNode;
  className?: string;
}

function DefaultTeamMedia() {
  return (
    <div
      aria-hidden
      className="relative size-full overflow-hidden bg-foreground/92 text-background"
    >
      {/* Subtle architectural clinic interior lines and three minimalist clinician silhouettes */}
      <div className="absolute inset-x-0 top-0 h-1/2 border-b border-background/15 bg-gradient-to-b from-background/5 to-transparent" />
      <div className="absolute inset-x-3 bottom-0 flex items-end justify-center gap-2">
        <div className="flex flex-col items-center">
          <span className="mb-1 size-6 rounded-full bg-background/65" />
          <span className="h-16 w-12 rounded-t-xl bg-background/85" />
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-1 size-5 rounded-full bg-background/60" />
          <span className="h-14 w-11 rounded-t-xl bg-background/90" />
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-1 size-6 rounded-full bg-background/55" />
          <span className="h-15 w-11 rounded-t-xl bg-background/40" />
        </div>
      </div>
    </div>
  );
}

/**
 * Halo Dental's pure black mission band: 100px gradient headline, square portrait + copy + orange CTA.
 */
export function HalodentalMission({
  title,
  description,
  cta,
  teamMedia,
  canvasMedia,
  className,
}: HalodentalMissionProps) {
  return (
    <section
      className={cn(
        "dark bg-background py-[var(--section-y)] px-[var(--page-gutter)] text-foreground",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[var(--page-width)] flex-col lg:grid lg:grid-cols-12 lg:gap-x-5">
        <div className="mb-[30px] lg:col-span-8 lg:row-start-1 lg:mb-0">
          <h2 className="max-w-[9ch] font-display text-[3.125rem] leading-none font-normal tracking-[-0.02em] bg-gradient-to-r from-highlight via-primary to-glow bg-clip-text text-transparent lg:text-[6.25rem] lg:leading-[0.95]">
            {title}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-y-[34px] lg:col-span-6 lg:row-start-2 lg:mt-[76px] lg:flex-row lg:items-end lg:gap-x-[50px]">
          <div className="size-[164px] shrink-0 overflow-hidden rounded-lg lg:size-[210px]">
            {teamMedia ?? <DefaultTeamMedia />}
          </div>

          <div className="w-full lg:w-[325px]">
            <p className="text-[0.91rem] leading-[1.5] font-normal text-foreground lg:text-base lg:leading-[1.5]">
              {description}
            </p>
            <div className="mt-5">
              <HalodentalButton variant="primary" href={cta.href}>
                {cta.label}
              </HalodentalButton>
            </div>
          </div>
        </div>

        <div className="mt-[56px] h-[412px] w-full lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-end-3 lg:mt-0 lg:h-[520px] lg:self-end">
          {canvasMedia ?? <div aria-hidden className="size-full rounded-lg" />}
        </div>
      </div>
    </section>
  );
}
