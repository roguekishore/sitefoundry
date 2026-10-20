import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./roveia-v2-brands.css";

export interface RoveiaV2Brand {
  /** the client's name, as listed on the left */
  name: string;
  /** its wordmark (styled text, svg or img); the name in medium weight when empty */
  wordmark?: ReactNode;
  /** a short line of categories, e.g. "Virtual care · Sleep" */
  tags?: string;
  /** one or two sentences about the client */
  description?: string;
  /** the full-panel background picture; a tinted placeholder shows when empty */
  media?: ReactNode;
}

export interface RoveiaV2BrandsProps {
  /** the line above the details (and above the grid on phones) */
  heading: string;
  /** the clients, in list order */
  brands: RoveiaV2Brand[];
  className?: string;
}

// placeholder tints, one per brand in turn
const tints = ["var(--chart-1)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)", "var(--chart-2)"];

/** Where item i's scroll moment sits (in % of the pinned range) and its animation-range. */
function range(i: number, n: number, spread: number): CSSProperties {
  const step = n > 1 ? 90 / (n - 1) : 0;
  const at = 5 + step * i;
  return { "--roveia-v2-brands-range": `contain ${at - spread * step}% contain ${at + spread * step}%` } as CSSProperties;
}
const edge = (i: number, n: number) => (i === 0 ? "first" : i === n - 1 ? "last" : undefined);

export function RoveiaV2Brands({ heading, brands, className }: RoveiaV2BrandsProps) {
  const n = brands.length;
  return (
    <section className={cn("roveia-v2-brands relative bg-background text-foreground", className)}>
      {/* phones: a centred line over a two-column grid of wordmarks */}
      <div className="roveia-v2-brands-grid px-gutter pt-10 pb-12 lg:hidden">
        <p className="text-center text-base">{heading}</p>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 text-center text-[1.25rem] text-foreground/75">
          {brands.map((b) => (
            <li key={b.name}>{b.wordmark ?? <span className="font-medium">{b.name}</span>}</li>
          ))}
        </ul>
      </div>

      {/* desktop: the pinned dark panel */}
      <div className="hidden px-5 lg:sticky lg:top-4 lg:block">
        <div className="dark relative h-[calc(100svh-2rem)] min-h-[40rem] overflow-clip rounded-[2.5rem] bg-background text-foreground">
          {brands.map((b, i) => (
            <div
              key={b.name}
              data-edge={edge(i, n)}
              className="roveia-v2-brands-swap absolute inset-0 [&>*]:size-full [&>*]:object-cover"
              style={range(i, n, 1)}
            >
              {b.media ?? (
                <div
                  className="bg-muted"
                  style={{ backgroundImage: `radial-gradient(ellipse at 75% 40%, color-mix(in oklab, ${tints[i % tints.length]} 45%, transparent), transparent 65%)` }}
                />
              )}
            </div>
          ))}
          <div aria-hidden className="absolute inset-0 bg-background/50" />

          {/* left: the names, sliding up one row per brand */}
          <ul
            className="roveia-v2-brands-list absolute top-[calc(50%-5.5rem)] left-[12.625rem]"
            style={{ "--roveia-v2-brands-shift": `${-(n - 1) * 6.25}rem` } as CSSProperties}
          >
            {brands.map((b, i) => (
              <li
                key={b.name}
                data-edge={edge(i, n)}
                className="roveia-v2-brands-name h-[6.25rem] text-[4.375rem] leading-[6.25rem] font-normal tracking-[-0.02em] whitespace-nowrap"
                style={range(i, n, 4)}
              >
                {b.name}
              </li>
            ))}
          </ul>

          {/* right: the heading and the current brand's details */}
          <div className="absolute top-[calc(50%-6rem)] left-1/2 w-[28.5rem]">
            <p className="text-2xl tracking-[-0.03em]">{heading}</p>
            <div className="mt-[9.5rem] grid">
              {brands.map((b, i) => (
                <div key={b.name} data-edge={edge(i, n)} className="roveia-v2-brands-swap [grid-area:1/1]" style={range(i, n, 1)}>
                  <div className="flex items-center gap-10">
                    <span className="text-[2rem] leading-none">{b.wordmark ?? <span className="font-medium">{b.name}</span>}</span>
                    {b.tags && <span className="text-base text-muted-foreground">{b.tags}</span>}
                  </div>
                  {b.description && <p className="mt-12 text-base leading-6 tracking-[-0.02em] text-foreground/75">{b.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
