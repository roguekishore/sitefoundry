import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerMedia } from "@foundry/superpower-media";

export interface SuperpowerDoctor {
  name: string;
  role: string;
  /** one or two sentences (desktop only) */
  bio?: string;
  /** the institution's wordmark above the name (desktop only) */
  institution?: ReactNode;
  /** the portrait; empty: a placeholder */
  photo?: ReactNode;
  link?: { label: string; href: string };
}

export interface SuperpowerDoctorsProps {
  title: string;
  /** a strip of institution marks under the title (phones only) */
  institutions?: { name: string; mark: ReactNode }[];
  doctors: SuperpowerDoctor[];
  id?: string;
  className?: string;
}

// lines the first card up with the page content while the row runs to the window edges
const edge = "px-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))]";
const snapEdge = "scroll-px-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))]";

export function SuperpowerDoctors({ title, institutions, doctors, id, className }: SuperpowerDoctorsProps) {
  return (
    <section id={id} className={cn("bg-background py-12 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 className="max-w-[46rem] text-[1.5rem] leading-[1.3] font-normal tracking-[-0.02em] lg:text-[3.5rem] lg:leading-[1.12] lg:tracking-[-0.03em]">
          {title}
        </h2>
        {institutions && institutions.length > 0 && (
          <ul className="mt-8 flex items-center justify-between gap-3 text-muted-foreground/70 lg:hidden">
            {institutions.map((inst) => (
              <li key={inst.name} aria-label={inst.name} role="img" className="flex h-6 items-center [&>*]:[zoom:0.56]">
                {inst.mark}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        className={cn(
          "mt-6 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] lg:mt-16 [&::-webkit-scrollbar]:hidden",
          edge,
          snapEdge,
        )}
      >
        <ul className="grid w-max auto-cols-[18rem] grid-flow-col grid-rows-2 gap-x-10 lg:auto-cols-[33.5rem] lg:grid-rows-1 lg:gap-x-[3.75rem]">
          {doctors.map((d) => (
            <li
              key={d.name}
              className="relative flex snap-start gap-4 border-b border-border py-4 lg:gap-8 lg:border-b-0 lg:py-0 lg:after:absolute lg:after:inset-y-0 lg:after:-right-[1.875rem] lg:after:w-px lg:after:bg-border"
            >
              <SuperpowerMedia media={d.photo} className="size-[4.25rem] shrink-0 rounded-sm lg:h-[15.5rem] lg:w-[12.875rem] lg:rounded-lg" />
              <div className="min-w-0 lg:pt-1.5">
                {d.institution && <div className="hidden h-12 items-start text-muted-foreground/70 lg:flex">{d.institution}</div>}
                <h3 className="text-[1.125rem] leading-[1.3] font-normal tracking-[-0.01em] lg:mt-8">{d.name}</h3>
                <p className="mt-2 text-[0.8125rem] leading-[1.45] text-muted-foreground lg:mt-1.5">{d.role}</p>
                {d.bio && <p className="mt-5 hidden text-[0.8125rem] leading-[1.5] lg:block">{d.bio}</p>}
                {d.link && (
                  <a
                    href={d.link.href}
                    className="mt-3 hidden text-[0.8125rem] underline underline-offset-[3px] transition-opacity duration-200 hover:opacity-80 lg:inline-block"
                  >
                    {d.link.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
