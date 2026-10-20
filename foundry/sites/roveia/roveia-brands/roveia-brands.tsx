import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./roveia-brands.css";

export interface RoveiaBrand {
  name: string;
  /** the brand's wordmark for the panel and the phone grid; the name in text when empty */
  logo?: ReactNode;
  /** a short "Sector · Focus" line beside the logo */
  tags?: string;
  /** one or two sentences about the brand */
  description?: string;
  /** the full-bleed photo behind the panel while this brand is active; a placeholder when empty */
  media?: ReactNode;
}

export interface RoveiaBrandsProps {
  /** the line above the panel ("Trusted by …") */
  heading: string;
  brands: RoveiaBrand[];
  className?: string;
}

/**
 * A pinned client roll. Desktop: a window-high dark inset card (40px corners) holds a list of
 * big light brand names that slides up through the middle as you scroll; the name in the
 * middle is bright and its neighbours fade with distance, while the panel on the right (logo,
 * tags, description) and the full-bleed photo behind crossfade to that brand. Phones: a short
 * centred title over a two-column grid of wordmarks.
 */
export function RoveiaBrands({ heading, brands, className }: RoveiaBrandsProps) {
  const steps = Math.max(brands.length - 1, 1);
  return (
    <section className={cn("roveia-brands bg-background text-foreground", className)}>
      {/* phones: a grid of wordmarks */}
      <div className="roveia-brands-fade px-gutter py-12 lg:hidden">
        <h2 className="text-center text-base">{heading}</h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
          {brands.map((b) => (
            <li key={b.name} className="flex h-8 items-center justify-center text-center text-xl text-foreground/75">
              {b.logo ?? b.name}
            </li>
          ))}
        </ul>
      </div>

      {/* desktop: the pinned roll */}
      <div className="roveia-brands-track hidden lg:block" style={{ "--steps": steps } as CSSProperties}>
        <div className="sticky top-0 h-svh px-5 py-4.5">
          <div className="dark relative h-full overflow-clip rounded-[calc(var(--radius)+1rem)] bg-background text-foreground">
            <div aria-hidden className="absolute inset-0">
              {brands.map((b, i) => (
                <div key={b.name} className="roveia-brands-bg absolute inset-0" style={{ "--i": i } as CSSProperties}>
                  {b.media ?? (
                    <div
                      className="size-full bg-muted"
                      style={{
                        backgroundImage: `radial-gradient(circle at ${72 - (i % 3) * 14}% ${28 + (i % 4) * 16}%, color-mix(in oklab, var(--glow) 32%, transparent), transparent 62%)`,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div aria-hidden className="absolute inset-0 bg-background/55" />

            <ul className="roveia-brands-list absolute top-[calc(44%-3.125rem)] left-[14.4%]">
              {brands.map((b, i) => (
                <li
                  key={b.name}
                  className="roveia-brands-name flex h-25 items-center text-[4rem] leading-none font-light tracking-[-0.01em] whitespace-nowrap"
                  style={{ "--i": i } as CSSProperties}
                >
                  {b.name}
                </li>
              ))}
            </ul>

            <div className="absolute top-[41%] left-[51%] w-[min(30rem,38%)]">
              <p className="text-2xl tracking-[-0.03em]">{heading}</p>
              <div className="mt-36 grid">
                {brands.map((b, i) => (
                  <div key={b.name} className="roveia-brands-panel [grid-area:1/1]" style={{ "--i": i } as CSSProperties}>
                    <div className="flex items-center gap-10">
                      <span className="text-[1.75rem] leading-none font-medium">{b.logo ?? b.name}</span>
                      {b.tags && <span className="text-base text-foreground/80">{b.tags}</span>}
                    </div>
                    {b.description && <p className="mt-12 text-base leading-6 tracking-[-0.02em] text-foreground/75">{b.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
