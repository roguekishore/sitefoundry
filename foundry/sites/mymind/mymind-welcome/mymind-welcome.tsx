import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MymindInstallRow, type MymindInstallTarget } from "@foundry/mymind-install-row";
import { MymindPill } from "@foundry/mymind-pill";

export interface MymindWelcomeProps {
  /** first line of the italic greeting */
  line1: string;
  /** second line, stepped to the right */
  line2: string;
  /** a small brand mark placed after the first line (an icon or picture) */
  mark?: ReactNode;
  /** the small tangerine pill */
  cta: { label: string; href: string };
  /** install tiles shown under the light on tablets and up (leave empty to hide) */
  targets?: MymindInstallTarget[];
  className?: string;
}

/** Italic greeting in a pool of warm light, then install tiles. */
export function MymindWelcome({ line1, line2, mark, cta, targets, className }: MymindWelcomeProps) {
  return (
    <section className={cn("relative isolate overflow-x-clip bg-background text-primary-foreground", className)}>
      <div className="relative flex min-h-[40rem] flex-col items-center justify-center pt-20 pb-24 lg:min-h-[52rem] lg:pt-28 lg:pb-32">
        <div
          aria-hidden
          className="absolute inset-x-[-30%] inset-y-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,color-mix(in_oklab,var(--chart-1)_55%,var(--background))_0%,color-mix(in_oklab,var(--chart-1)_80%,var(--primary))_30%,var(--primary)_45%,color-mix(in_oklab,var(--primary)_40%,transparent)_62%,transparent_76%)] blur-[30px] lg:inset-x-[-8%]"
        />
        <h2 className="w-fit font-display text-[3rem] leading-[0.9] tracking-[-0.04em] italic lg:text-[6rem] lg:leading-[0.72]">
          <span className="flex items-end gap-1">
            {line1}
            {mark && <span className="mb-1 inline-grid size-10 place-items-center lg:size-[4.5rem] [&_svg]:size-full">{mark}</span>}
          </span>
          <span className="block pl-[1.4em] lg:pl-[0.65em]">{line2}</span>
        </h2>
        <MymindPill href={cta.href} size="sm" caps trailing={<ChevronRight strokeWidth={2.5} />} className="mt-14 h-11 px-6 lg:mt-[4.5rem] lg:h-11">
          {cta.label}
        </MymindPill>
      </div>
      {targets && targets.length > 0 && (
        <div className="hidden px-gutter pb-6 text-foreground md:block lg:pb-10">
          <MymindInstallRow targets={targets} />
        </div>
      )}
    </section>
  );
}
