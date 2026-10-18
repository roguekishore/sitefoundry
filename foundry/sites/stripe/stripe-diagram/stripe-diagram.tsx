import type { ReactNode } from "react";
import { Cloud, ExternalLink, Hexagon, Layers, Snowflake, Triangle } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";

export interface StripeDiagramProps {
  /** the bright lead sentence */
  title: string;
  /** the softer sentences after it */
  rest?: string;
  /** systems along the top (ERP, CRM…) */
  sources: string[];
  /** the brand at the centre of the diagram */
  brand: string;
  /** labels on the connectors */
  labels: {
    /** left link from the top row */
    sdk: string;
    /** right link from the top row */
    events: string;
    /** link to the app tiles on the left */
    apps: string;
    /** link to the data warehouse on the right */
    pipeline: string;
    /** link down to the processors */
    routing: string;
  };
  /** small tiles along the bottom (processors) */
  processors: string[];
  /** dark forces the deep-navy band (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  className?: string;
}

const dash = "border-dashed border-primary/60";

function Label({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span className="relative z-10 inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5 text-xs font-normal whitespace-nowrap text-primary-foreground">
      {children}
      {icon}
    </span>
  );
}

function AppTiles() {
  const tiles = [
    { Icon: Cloud, c: "bg-chart-5 text-foreground" },
    { Icon: Layers, c: "bg-card text-foreground" },
    { Icon: Hexagon, c: "bg-foreground text-primary" },
    { Icon: Triangle, c: "bg-destructive text-primary-foreground" },
  ];
  return (
    <div className="relative z-10 grid grid-cols-[repeat(3,2.5rem)] gap-1.5 rounded-sm bg-card/70 p-1.5 lg:grid-cols-[repeat(3,2.25rem)]">
      {[null, tiles[0], tiles[1], null, tiles[2], tiles[3]].map((t, i) =>
        t ? (
          <span key={i} className={cn("flex aspect-square items-center justify-center rounded-sm", t.c)}>
            <t.Icon className="size-4" strokeWidth={2} />
          </span>
        ) : (
          <span key={i} className="aspect-square rounded-sm border border-border bg-background/40" />
        ),
      )}
    </div>
  );
}

/**
 * Integration diagram on a faint dotted grid: a row of systems feeding the brand tile through
 * dashed connectors and indigo labels, app tiles on the left, a data warehouse on the right,
 * and a branch of processors below.
 */
export function StripeDiagram({ title, rest, sources, brand, labels, processors, tone = "dark", className }: StripeDiagramProps) {
  return (
    <StripeFrame rule="solid" className={cn(tone === "dark" && "dark", className)} innerClassName="pt-14 pb-16 lg:pt-20 lg:pb-20">
      <StripeHeading as="h3" size="sub" lead={title} rest={rest} className="max-w-[44rem]" />

      <div className="relative mt-10 lg:mt-14">
        {/* dotted grid, fading at the edges */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(color-mix(in_oklab,var(--foreground)_18%,transparent)_1px,transparent_1px)] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)] bg-[size:12px_12px] lg:-inset-x-4"
        />

        <div className="relative mx-auto flex max-w-[48rem] flex-col items-center py-4 text-foreground lg:py-6">
          {/* the systems along the top */}
          <div className="relative z-10 flex flex-wrap justify-center gap-1.5 rounded-sm bg-card/70 p-1.5">
            {sources.map((s) => (
              <span key={s} className="rounded-sm bg-secondary px-3 py-2 text-xs font-normal lg:px-4">
                {s}
              </span>
            ))}
          </div>

          {/* two links down from the top row, closing into a U under the brand */}
          <div className="relative grid w-[62%] grid-cols-2 lg:w-[56%]">
            <div className={cn("h-8 border-l", dash)} />
            <div className={cn("h-8 border-r", dash)} />
            <div className="flex w-0 justify-center">
              <Label>{labels.sdk}</Label>
            </div>
            <div className="flex w-0 justify-center justify-self-end">
              <Label>{labels.events}</Label>
            </div>
            <div className={cn("col-span-2 h-10 border-x border-b", dash)} />
          </div>

          {/* middle row: apps — brand — warehouse, on a dashed line */}
          <div className="relative -mt-7 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 lg:gap-0">
            <div className={cn("absolute inset-x-[8%] top-1/2 border-t", dash)} />
            <div className="relative flex flex-col items-center gap-3 lg:flex-row lg:justify-start lg:gap-6">
              <AppTiles />
              <span className="hidden lg:inline-flex">
                <Label icon={<ExternalLink className="size-3" />}>{labels.apps}</Label>
              </span>
            </div>
            <div className="relative z-10 flex size-20 items-center justify-center rounded-md bg-linear-to-br from-primary/70 to-card font-display text-lg font-bold tracking-[-0.05em] shadow-[0_0_40px_-8px_var(--primary)] ring-1 ring-primary/40 lg:size-[4.5rem]">
              {brand}
            </div>
            <div className="relative flex flex-col items-center gap-3 lg:flex-row lg:justify-end lg:gap-6">
              <Label>{labels.pipeline}</Label>
              <span className="relative z-10 flex size-10 items-center justify-center rounded-sm bg-chart-5 text-foreground lg:size-9">
                <Snowflake className="size-5" strokeWidth={2} />
              </span>
            </div>
          </div>

          {/* down to routing and the processors */}
          <div className={cn("h-8 border-l", dash)} />
          <Label>{labels.routing}</Label>
          <div className={cn("h-4 border-l", dash)} />
          <div className="relative flex gap-3">
            <div className={cn("absolute top-0 right-[1.25rem] left-[1.25rem] border-t", dash)} />
            {processors.map((p, i) => (
              <div key={`${p}-${i}`} className="flex flex-col items-center">
                <div className={cn("h-4 border-l", dash)} />
                <span className="flex size-10 items-center justify-center rounded-sm bg-secondary text-[0.6875rem] font-normal">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StripeFrame>
  );
}
