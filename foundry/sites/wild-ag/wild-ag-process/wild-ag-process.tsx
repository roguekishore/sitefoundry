import { cn } from "@foundry/foundry-utils";
import { WildAgHeading } from "@foundry/wild-ag-heading";
import { WildAgPillRow } from "@foundry/wild-ag-pill-row";
import { WildAgReveal } from "@foundry/wild-ag-reveal";

export interface WildAgProcessStep {
  label: string;
  href: string;
}

export interface WildAgProcessProps {
  /** an id for in-page links */
  id?: string;
  title: string;
  /** the paragraphs under the title */
  paragraphs: string[];
  /** the numbered steps, in order */
  steps: WildAgProcessStep[];
  className?: string;
}

export function WildAgProcess({ id, title, paragraphs, steps, className }: WildAgProcessProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative z-10 rounded-b-[calc(var(--radius)*3.4)] bg-linear-15 from-primary to-highlight px-gutter pt-section pb-[5.4rem] text-primary-foreground lg:rounded-b-[calc(var(--radius)*4.5)] lg:pb-section",
        className,
      )}
    >
      <div className="mx-auto grid max-w-page gap-12 lg:grid-cols-2 lg:items-center lg:gap-x-[4.9rem]">
        <div>
          <WildAgHeading tone="light">{title}</WildAgHeading>
          <div className="mt-6 space-y-3 text-[1.0625rem] leading-[1.4] font-medium tracking-[-0.01em]">
            {paragraphs.map((p, i) => (
              <WildAgReveal as="p" key={i} step={i + 1}>
                {p}
              </WildAgReveal>
            ))}
          </div>
        </div>
        <ul className="grid gap-3">
          {steps.map((s, i) => (
            <li key={s.href}>
              <WildAgPillRow number={i + 1} label={s.label} href={s.href} tone="band" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
