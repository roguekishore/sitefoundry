import { Maximize2 } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";
import { StripeMock, type StripeMockContent } from "@foundry/stripe-mock";

export interface StripeSolutionTile {
  /** the tile's title, top left */
  title: string;
  /** where the tile leads (the whole tile is the link) */
  href: string;
  /** label for the corner expand button, for screen readers */
  expandLabel?: string;
  /** the vignette in the tile's lower part */
  mock: StripeMockContent;
  /** columns taken on desktop (of three) */
  span?: 1 | 2 | 3;
  /** the colour wash behind the vignette */
  wash?: "sunset" | "dawn" | "blush" | "pearl" | "lilac" | "none";
}

export interface StripeSolutionsProps {
  /** the dark lead sentence of the heading */
  title: string;
  /** the softer sentence after it */
  rest?: string;
  tiles: StripeSolutionTile[];
  className?: string;
}

// Soft light rising into each tile from one side, in the theme's art colours.
const washes = {
  sunset:
    "bg-[radial-gradient(90%_70%_at_0%_100%,color-mix(in_oklab,var(--chart-3)_55%,transparent),transparent_70%),radial-gradient(80%_60%_at_60%_0%,color-mix(in_oklab,var(--chart-1)_70%,transparent),transparent_70%),radial-gradient(60%_60%_at_30%_70%,color-mix(in_oklab,var(--chart-2)_45%,transparent),transparent_80%)]",
  dawn: "bg-[radial-gradient(120%_55%_at_50%_100%,color-mix(in_oklab,var(--chart-4)_70%,transparent),color-mix(in_oklab,var(--chart-1)_20%,transparent)_45%,transparent_75%)]",
  blush: "bg-[radial-gradient(70%_55%_at_40%_55%,color-mix(in_oklab,var(--chart-2)_22%,transparent),transparent_75%)]",
  pearl: "bg-[radial-gradient(80%_60%_at_80%_20%,color-mix(in_oklab,var(--chart-2)_20%,transparent),transparent_70%),radial-gradient(70%_60%_at_15%_70%,color-mix(in_oklab,var(--chart-5)_25%,transparent),transparent_70%)]",
  lilac: "bg-[radial-gradient(100%_80%_at_100%_100%,color-mix(in_oklab,var(--chart-3)_22%,transparent),transparent_70%)]",
  none: "",
};

const spans = { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3" };

/**
 * "Solutions" bento: a two-tone heading over bordered product tiles. Each tile has a light
 * title, a small lavender expand button, and a product vignette rising out of a colour wash.
 */
export function StripeSolutions({ title, rest, tiles, className }: StripeSolutionsProps) {
  return (
    <StripeFrame className={className} innerClassName="pt-16 pb-12 lg:pt-28 lg:pb-24">
      <StripeHeading lead={title} rest={rest} className="max-w-[48rem] lg:max-w-[50rem]" />
      <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3">
        {tiles.map((t) => {
          const wide = (t.span ?? 1) >= 2;
          return (
            <a
              key={t.title}
              href={t.href}
              className={cn(
                "group relative isolate flex h-[33rem] flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground lg:h-[42rem]",
                spans[t.span ?? 1],
                (t.span ?? 1) === 3 && "lg:h-[32.5rem]",
              )}
            >
              <div className={cn("absolute inset-0 -z-10 transition-opacity duration-500 group-hover:opacity-80", washes[t.wash ?? "none"])} />
              <div className="flex items-start justify-between gap-4 p-4 lg:p-6">
                <StripeHeading as="h3" size="sub" lead={t.title} className={cn("max-w-[17rem]", wide && "lg:max-w-[26rem]")} />
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground lg:size-9"
                >
                  <Maximize2 aria-hidden className="size-3.5 -scale-x-100" strokeWidth={2} />
                  {t.expandLabel && <span className="sr-only">{t.expandLabel}</span>}
                </span>
              </div>
              {/* zoom keeps the vignette's tiny type in proportion as the tiles grow on desktop */}
              <div className="relative min-h-0 flex-1 lg:[zoom:1.25]">
                <StripeMock
                  mock={t.mock}
                  className={t.mock.kind === "checkout" || t.mock.kind === "platform" ? "" : "flex items-center justify-center px-6 pb-8"}
                />
              </div>
            </a>
          );
        })}
      </div>
    </StripeFrame>
  );
}
