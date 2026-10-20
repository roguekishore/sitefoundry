import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookButton } from "@foundry/growthbook-button";
import { GrowthbookRail } from "@foundry/growthbook-rail";
import "./growthbook-integrations.css";

export interface GrowthbookIntegration {
  /** the tool's name, for screen readers */
  name: string;
  /** its logo (svg/img) or styled name; drawn faded */
  logo: ReactNode;
}

export interface GrowthbookIntegrationsProps {
  /** the heading; each string starts a new line */
  title: string[];
  body: string;
  /** outline button at the foot of the text column */
  cta?: { label: string; href: string };
  /** at least six tiles; they are dealt into three columns */
  tools: GrowthbookIntegration[];
  className?: string;
}

const speeds = ["48s", "62s", "54s"];

export function GrowthbookIntegrations({ title, body, cta, tools, className }: GrowthbookIntegrationsProps) {
  const groups = [0, 1, 2].map((g) => tools.filter((_, i) => i % 3 === g));
  const tile = (t: GrowthbookIntegration, copy: number, key: string, size: string) => (
    <li
      key={key}
      aria-hidden={copy === 1 || undefined}
      className={cn(
        "grid shrink-0 place-items-center rounded-lg bg-card text-muted-foreground/70 shadow-[0_4px_20px_color-mix(in_oklab,var(--foreground)_4%,transparent)]",
        size,
      )}
    >
      <span role="img" aria-label={copy === 0 ? t.name : undefined} className="flex items-center opacity-80 grayscale">
        {t.logo}
      </span>
    </li>
  );

  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="relative grid border-l border-border lg:grid-cols-2">
          <GrowthbookRail />
          <div className="flex flex-col items-start px-10 pt-12 lg:pt-[5.25rem] lg:pb-[4.75rem]">
            <h2 className="max-w-[32rem] font-display text-4xl leading-[1.2] font-normal lg:text-[3.5rem]">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-8 max-w-[33rem] text-sm leading-[1.65] text-foreground/85 lg:mt-12 lg:text-[0.9375rem]">{body}</p>
            {cta && (
              <GrowthbookButton href={cta.href} variant="outline" arrow className="mt-8 lg:mt-auto">
                {cta.label}
              </GrowthbookButton>
            )}
          </div>

          {/* desktop: three drifting columns */}
          <div className="growthbook-integrations-wall hidden h-[46.25rem] grid-cols-3 gap-2.5 overflow-clip pl-2.5 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_80%,transparent)] lg:grid">
            {groups.map((g, c) => (
              <ul
                key={c}
                data-reverse={c === 1 ? "" : undefined}
                className="growthbook-integrations-col flex flex-col gap-2"
                style={{ "--growthbook-integrations-speed": speeds[c], marginTop: c === 1 ? "-3.5rem" : undefined } as CSSProperties}
              >
                {[0, 1].flatMap((copy) => g.map((t) => tile(t, copy, `${copy}-${t.name}`, "h-[10.625rem] w-full")))}
              </ul>
            ))}
          </div>

          {/* phones and tablets: three rows sliding sideways */}
          <div className="growthbook-integrations-wall mt-12 grid gap-3 overflow-clip pb-2 lg:hidden">
            {groups.map((g, r) => (
              <ul
                key={r}
                data-reverse={r === 1 ? "" : undefined}
                className="growthbook-integrations-row flex w-max gap-2"
                style={{ "--growthbook-integrations-speed": speeds[r], marginLeft: `${-r * 2.75}rem` } as CSSProperties}
              >
                {[0, 1].flatMap((copy) => g.map((t) => tile(t, copy, `${copy}-${t.name}`, "h-[6.5rem] w-[8.25rem]")))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
