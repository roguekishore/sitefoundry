import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PaxosButton } from "@foundry/paxos-button";
import { PaxosHeading } from "@foundry/paxos-heading";

export interface PaxosAsset {
  /** the short ticker set bold next to the disc */
  ticker: string;
  /** an icon inside the coloured disc (e.g. a lucide icon) */
  icon: ReactNode;
  /** the disc's colour, as a token name */
  tone?: "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5" | "primary" | "glow" | "highlight";
  /** the asset's full name */
  name: string;
  /** two or three lines about it */
  description: ReactNode;
  /** the text link at the bottom */
  link: { label: string; href: string };
}

export interface PaxosAssetsProps {
  /** the section title */
  title: ReactNode;
  /** grey lead under the title */
  lead?: ReactNode;
  /** the cards (four on the original) */
  assets: PaxosAsset[];
  /** the wide card under the row: one sentence and an outline pill */
  banner?: { text: ReactNode; action: { label: string; href: string } };
  className?: string;
}

const discs = {
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
  "chart-5": "bg-chart-5",
  primary: "bg-primary",
  glow: "bg-glow",
  highlight: "bg-highlight",
};

/** Four tall ticker cards and a verification banner. */
export function PaxosAssets({ title, lead, assets, banner, className }: PaxosAssetsProps) {
  return (
    <section className={cn("bg-background px-gutter py-16 lg:pt-10 lg:pb-[6.25rem]", className)}>
      <div className="mx-auto max-w-page">
        <PaxosHeading title={title} lead={lead} />
        <ul className="mt-10 grid gap-2.5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {assets.map((asset) => (
            <li
              key={asset.ticker}
              className="flex min-h-[18rem] flex-col rounded-lg border border-border bg-card px-5 pt-[2.4rem] pb-[2.6rem] lg:min-h-[22.5rem]"
            >
              <p className="flex items-center gap-2">
                <span
                  aria-hidden
                  className={cn(
                    "grid size-[2.625rem] place-items-center rounded-full text-background [&>svg]:size-6",
                    discs[asset.tone ?? "primary"],
                  )}
                >
                  {asset.icon}
                </span>
                <span className="font-sans text-[2.1rem]/none font-bold tracking-[-0.02em] text-foreground">{asset.ticker}</span>
              </p>
              <h3 className="mt-8 font-display text-xl/[1.05] font-normal tracking-[-0.02em] text-foreground lg:mt-[2.35rem] lg:text-2xl/[1.25]">
                {asset.name}
              </h3>
              <p className="mt-2.5 text-[0.9rem]/[1.35] tracking-[-0.01em] text-accent-foreground lg:mt-3 lg:text-base/[1.45]">
                {asset.description}
              </p>
              <a
                href={asset.link.href}
                className="mt-auto inline-flex items-center gap-1.5 self-start pt-10 text-xs text-foreground transition-colors duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-muted-foreground motion-reduce:transition-none lg:text-base"
              >
                {asset.link.label}
                <ChevronRight aria-hidden className="size-3.5" strokeWidth={2} />
              </a>
            </li>
          ))}
        </ul>
        {banner ? (
          <div className="mt-2.5 flex items-center justify-between gap-6 rounded-lg border border-border bg-card px-[1.875rem] py-[1.9rem] lg:py-[1.75rem]">
            <p className="max-w-[10rem] font-display text-xl/[1.05] tracking-[-0.02em] text-foreground sm:max-w-none lg:text-2xl/[1.25]">
              {banner.text}
            </p>
            <PaxosButton href={banner.action.href} variant="outline">
              {banner.action.label}
            </PaxosButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}
