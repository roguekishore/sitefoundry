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
      <div className="relative flex min-h-[40rem] flex-col items-center justify-center pt-20 pb-24 lg:min-h-[46rem] lg:pt-24 lg:pb-28">
        <div
          aria-hidden
          className="absolute inset-x-[-30%] inset-y-0 -z-10 bg-[radial-gradient(ellipse_52%_62%_at_50%_34%,color-mix(in_oklab,var(--chart-2)_30%,var(--background))_0%,color-mix(in_oklab,var(--chart-1)_75%,var(--background))_38%,color-mix(in_oklab,var(--chart-1)_60%,var(--primary))_62%,color-mix(in_oklab,var(--primary)_55%,transparent)_80%,transparent_100%)] blur-[30px] lg:inset-x-[-4%] lg:bg-[radial-gradient(ellipse_62%_70%_at_50%_30%,color-mix(in_oklab,var(--chart-2)_25%,var(--background))_0%,color-mix(in_oklab,var(--chart-1)_70%,var(--background))_40%,color-mix(in_oklab,var(--chart-1)_55%,var(--primary))_64%,color-mix(in_oklab,var(--primary)_45%,transparent)_82%,transparent_100%)]"
        />
        <h2 className="w-fit font-display text-[3rem] leading-[0.9] font-[350] tracking-[-0.04em] italic lg:text-[6rem] lg:leading-[0.72]">
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
