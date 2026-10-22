import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyButton } from "@foundry/basepowercompany-button";
import { BasepowercompanyMedia } from "@foundry/basepowercompany-media";

export interface BasepowercompanyPlan {
  /** a small line icon (lucide) shown on a lime tile before the name */
  icon: ReactNode;
  /** the plan's name */
  name: string;
  /** one or two lines about it */
  body: string;
  /** the text link under it */
  link: { label: string; href: string };
  /** the photo above */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
}

export interface BasepowercompanyPlansProps {
  /** the section heading */
  title: string;
  /** a line under the heading */
  subtitle?: string;
  /** the outline button beside the heading (full width on phones) */
  cta?: { label: string; href: string };
  /** the plans, three across on desktop */
  plans: BasepowercompanyPlan[];
  className?: string;
}

export function BasepowercompanyPlans({ title, subtitle, cta, plans, className }: BasepowercompanyPlansProps) {
  return (
    <section className={cn("bg-background pt-section pb-12 text-foreground lg:pb-[4.5rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[15ch] font-display text-[2rem] leading-[1.2] font-bold tracking-[-0.025em] lg:max-w-none lg:text-[2.5rem] lg:leading-[1.1]">{title}</h2>
            {subtitle && <p className="mt-6 text-base leading-6 tracking-[-0.005em] text-muted-foreground lg:mt-9">{subtitle}</p>}
          </div>
          {cta && (
            <BasepowercompanyButton href={cta.href} variant="outline" trailingIcon={<ChevronRight />} className="w-full lg:w-auto lg:px-4">
              {cta.label}
            </BasepowercompanyButton>
          )}
        </div>

        <ul className="mt-14 grid gap-12 lg:mt-14 lg:grid-cols-3 lg:gap-9">
          {plans.map((p) => (
            <li key={p.name}>
              <a href={p.link.href} className="group block">
                <BasepowercompanyMedia
                  media={p.media}
                  label={p.mediaLabel}
                  className="aspect-[1.33] rounded-2xl lg:aspect-[0.89] [&>*]:transition-transform [&>*]:duration-300 [&>*]:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[&>*]:scale-[1.03] motion-reduce:[&>*]:transition-none"
                />
                <h3 className="mt-7 flex items-center gap-3 font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.025em]">
                  <span
                    aria-hidden
                    className="flex size-7 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground ring-1 ring-primary [&_svg]:size-[1.125rem] [&_svg]:stroke-2"
                  >
                    {p.icon}
                  </span>
                  {p.name}
                </h3>
                <p className="mt-4 max-w-[22rem] text-sm leading-[1.5] tracking-[-0.005em] text-muted-foreground">{p.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-opacity duration-150 group-hover:opacity-80 motion-reduce:transition-none">
                  {p.link.label}
                  <ChevronRight aria-hidden className="size-4 stroke-2 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
