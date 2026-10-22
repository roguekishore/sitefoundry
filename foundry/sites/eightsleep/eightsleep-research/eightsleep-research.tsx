import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepHeading } from "@foundry/eightsleep-heading";
import { EightsleepMedia } from "@foundry/eightsleep-media";

export interface EightsleepResult {
  /** the result, e.g. "Fall asleep sooner" */
  title: ReactNode;
  /** the stat under it, e.g. "Up to 41% less time to drift off*" */
  stat: ReactNode;
  /** the photo */
  media?: ReactNode;
}

export interface EightsleepStudy {
  /** one line about the study */
  title: ReactNode;
  /** the link under it */
  link: { label: ReactNode; href: string };
}

export interface EightsleepResearchProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  /** three results in the grey panel */
  results: EightsleepResult[];
  /** three study cards */
  studies?: EightsleepStudy[];
  className?: string;
}

export function EightsleepResearch({ eyebrow, title, sub, results, studies, className }: EightsleepResearchProps) {
  return (
    <section className={cn("bg-background pt-[110px] pb-section text-foreground lg:pt-[100px] lg:pb-[110px]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-16">
        <EightsleepHeading eyebrow={eyebrow} title={title} sub={sub} />
        <ul className="mt-12 grid gap-14 rounded-xl bg-card px-6 py-6 text-card-foreground lg:mt-10 lg:grid-cols-3 lg:gap-8 lg:px-4 lg:pt-10 lg:pb-10">
          {results.map((r, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              <EightsleepMedia media={r.media} className="aspect-[302/216] w-full rounded-[calc(var(--radius)/2)] lg:aspect-[405/291]" />
              <h3 className="mt-6 text-[22px] leading-[1.1] lg:mt-8 lg:text-[28px]">{r.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.3]">{r.stat}</p>
            </li>
          ))}
        </ul>
        {studies && (
          <ul className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-3">
            {studies.map((s, i) => (
              <li
                key={i}
                className="dark flex h-[142px] flex-col items-center justify-center gap-3 rounded-xl bg-linear-to-b from-secondary from-20% to-accent px-8 text-center text-foreground lg:h-[168px]"
              >
                <p className="max-w-[20ch] text-[16px] leading-[1.25] font-medium text-balance lg:text-[18px]">{s.title}</p>
                <a href={s.link.href} className="text-[12px] font-medium underline underline-offset-4 transition-opacity duration-200 hover:opacity-70">
                  {s.link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
