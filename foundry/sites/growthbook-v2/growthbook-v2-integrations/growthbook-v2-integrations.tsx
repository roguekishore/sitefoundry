import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Button } from "@foundry/growthbook-v2-button";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2RailAccent } from "@foundry/growthbook-v2-rail-accent";
import "./growthbook-v2-integrations.css";

export interface GrowthbookV2Integration {
  /** the tool's name (shown as text when there is no logo) */
  name: string;
  /** its logo (svg or img); drawn pale, as on the original */
  logo?: ReactNode;
}

export interface GrowthbookV2IntegrationsProps {
  /** the heading; \n for line breaks */
  title: string;
  body: string;
  /** the outline button under the text */
  action: { label: string; href: string };
  /** the tiles; split into three lanes */
  integrations: GrowthbookV2Integration[];
  className?: string;
}

const lanes: CSSProperties[] = [
  { "--growthbook-v2-lane-time": "48s" } as CSSProperties,
  { "--growthbook-v2-lane-time": "58s", "--growthbook-v2-lane-direction": "reverse" } as CSSProperties,
  { "--growthbook-v2-lane-time": "52s" } as CSSProperties,
];

export function GrowthbookV2Integrations({ title, body, action, integrations, className }: GrowthbookV2IntegrationsProps) {
  const groups = [0, 1, 2].map((g) => integrations.filter((_, i) => i % 3 === g));
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="relative grid grid-cols-1 border-l border-border lg:grid-cols-2">
          <GrowthbookV2RailAccent />
          <div className="flex flex-col pt-12 pl-10 lg:h-[46rem] lg:pt-20">
            <GrowthbookV2Heading className="whitespace-pre-line">{title}</GrowthbookV2Heading>
            <p className="mt-6 max-w-[32rem] text-sm/[1.65] lg:mt-12">{body}</p>
            <GrowthbookV2Button href={action.href} variant="outline" arrow className="mt-8 self-start lg:mt-auto lg:mb-20">
              {action.label}
            </GrowthbookV2Button>
          </div>
          <div className="growthbook-v2-integrations-wall mt-12 flex min-w-0 flex-col gap-2.5 overflow-clip lg:mt-0 lg:ml-2.5 lg:h-[46rem] lg:flex-row">
            {groups.map((group, g) => (
              <div key={g} className="min-w-0 flex-1 overflow-clip">
                <ul className="growthbook-v2-integrations-lane flex w-max gap-2.5 lg:w-full lg:flex-col" style={lanes[g]}>
                  {[0, 1].flatMap((copy) =>
                    group.map((it) => (
                      <li
                        key={`${copy}-${it.name}`}
                        aria-hidden={copy > 0 || undefined}
                        className="flex h-[6.875rem] w-32 shrink-0 items-center justify-center rounded-lg bg-card px-3 text-center text-lg font-medium text-muted-foreground/45 shadow-[0_4px_20px_color-mix(in_oklab,var(--foreground)_4%,transparent)] lg:h-[10.625rem] lg:w-full lg:text-[1.375rem] [&_img]:max-h-12 [&_svg]:h-10 [&_svg]:w-auto"
                      >
                        {it.logo ?? it.name}
                      </li>
                    )),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
