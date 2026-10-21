import type { ReactNode } from "react";
import { Wine } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MrcresidencesbocaratonPattern } from "@foundry/mrcresidencesbocaraton-pattern";

export interface MrcresidencesbocaratonBrandProps {
  /** the small light name over the title */
  name: string;
  /** the large title of the lockup, e.g. "Residences" */
  title: string;
  /** the place under it */
  place: string;
  /** the stacked credit right of the rule, one string per line */
  byline: string[];
  /** the small print under the lockup */
  credit?: string;
  /** a mark over the lockup; empty: a thin lucide glass icon */
  mark?: ReactNode;
  /** replaces the faint lattice behind the panel */
  pattern?: ReactNode;
  className?: string;
}

export function MrcresidencesbocaratonBrand({ name, title, place, byline, credit, mark, pattern, className }: MrcresidencesbocaratonBrandProps) {
  return (
    <section className={cn("relative isolate flex h-[420px] items-center justify-center overflow-clip bg-primary px-[25px] text-primary-foreground", className)}>
      <div className="absolute inset-0 -z-10">{pattern ?? <MrcresidencesbocaratonPattern tone="faint" className="size-full" />}</div>

      <div className="flex h-[273px] w-full max-w-[634px] flex-col items-center justify-center rounded-[30px] bg-primary px-4">
        <div className="[&>svg]:h-10 [&>svg]:w-auto lg:[&>svg]:h-[62px]">{mark ?? <Wine aria-hidden strokeWidth={1} />}</div>

        <div className="mt-2 flex items-center gap-2.5 lg:mt-2.5 lg:gap-4">
          <div className="flex flex-col items-end font-light">
            <span className="text-[11px] leading-[1.2] lg:text-[17px]">{name}</span>
            <span className="text-[22px] leading-none tracking-[0.01em] uppercase lg:text-[36px]">{title}</span>
            <span className="text-[11px] leading-[1.3] lg:text-[17px]">{place}</span>
          </div>
          <span aria-hidden className="h-[48px] w-px bg-current lg:h-[72px]" />
          <div className="flex flex-col text-[9px] leading-[1.25] uppercase lg:text-[13px] lg:leading-[1.2]">
            {byline.map((part, i) => (
              <span key={i}>{part}</span>
            ))}
          </div>
        </div>

        {credit && <p className="mt-6 text-center text-[8px] tracking-[0.05em] lg:mt-[37px] lg:text-[11px]">{credit}</p>}
      </div>
    </section>
  );
}
