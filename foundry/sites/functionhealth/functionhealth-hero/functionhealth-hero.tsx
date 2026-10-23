import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthButton } from "@foundry/functionhealth-button";
import "./functionhealth-hero.css";

export interface FunctionhealthHeroStat {
  /** the figure, e.g. "140+ markers" */
  value: string;
  /** small line under it */
  label: string;
}

export interface FunctionhealthHeroProps {
  /** glass pill above the headline */
  badge?: string;
  /** the headline, set in italic light serif */
  title: string;
  /** line of copy under the headline */
  text: string;
  /** the two pills; the first is the page-coloured pill, the second an outline */
  actions?: { label: string; href: string }[];
  /** figures at the bottom right (a row under the copy on phones) */
  stats?: FunctionhealthHeroStat[];
  /** background photo or video; an empty slot shows a dark placeholder */
  media?: ReactNode;
  className?: string;
}

const rise = (i: number) => ({ "--i": i }) as CSSProperties;

export function FunctionhealthHero({ badge, title, text, actions = [], stats = [], media, className }: FunctionhealthHeroProps) {
  return (
    <section className={cn("relative isolate flex min-h-[45.5rem] flex-col justify-end overflow-clip bg-foreground text-background lg:h-[calc(100svh-2.5rem)] lg:min-h-[36rem]", className)}>
      <div
        aria-hidden={media ? undefined : true}
        className={cn("absolute inset-0 -z-20 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover", !media && "bg-linear-to-br from-muted-foreground to-foreground")}
      >
        {media}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-35% to-foreground/70" />
      <div className="mx-auto flex w-full max-w-page flex-col justify-between gap-10 px-gutter pt-32 pb-10 lg:flex-row lg:items-end lg:pb-[3.75rem]">
        <div className="max-w-[40rem]">
          {badge && (
            <p style={rise(0)} className="functionhealth-hero-rise inline-flex h-[2.375rem] items-center rounded-full bg-background/10 px-4 text-sm font-semibold backdrop-blur-sm">
              {badge}
            </p>
          )}
          <h1 style={rise(1)} className="functionhealth-hero-rise mt-4 font-display text-[clamp(3.5625rem,2.1617vw+3.0545rem,5rem)] leading-none font-light tracking-[-0.025em] text-balance italic">
            {title}
          </h1>
          <p style={rise(2)} className="functionhealth-hero-rise mt-4 max-w-[34rem] text-[clamp(1.125rem,0.188vw+1.0808rem,1.25rem)] leading-[1.3] font-light">
            {text}
          </p>
          {actions.length > 0 && (
            <div style={rise(3)} className="functionhealth-hero-rise mt-6 flex flex-wrap gap-3">
              {actions.map((a, i) => (
                <FunctionhealthButton key={a.href + a.label} href={a.href} variant={i === 0 ? "light" : "outline"} className={i > 0 ? "border-background bg-transparent text-background" : undefined}>
                  {a.label}
                </FunctionhealthButton>
              ))}
            </div>
          )}
        </div>
        {stats.length > 0 && (
          <ul style={rise(4)} className="functionhealth-hero-rise grid grid-cols-3 lg:flex lg:gap-0">
            {stats.map((s, i) => (
              <li key={s.value} className={cn("pr-3 lg:px-8", i > 0 && "border-l border-background/60 pl-3 lg:pl-8", i === stats.length - 1 && "lg:pr-0")}>
                <p className="text-base leading-tight font-semibold lg:text-[1.375rem]">{s.value}</p>
                <p className="mt-1 text-sm leading-tight font-light lg:mt-2 lg:text-base">{s.label}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
