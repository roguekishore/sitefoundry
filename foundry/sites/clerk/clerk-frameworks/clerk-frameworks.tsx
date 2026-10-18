import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ClerkBand } from "@foundry/clerk-band";
import { ClerkHeading, type ClerkHeadingProps } from "@foundry/clerk-heading";

export interface ClerkIconTile {
  /** name, for screen readers and the hover title */
  label: string;
  /** a thin line icon */
  icon: ReactNode;
  href?: string;
}

export interface ClerkIconGroup {
  /** eyebrow, heading, text and link above the grid (always centred) */
  heading: ClerkHeadingProps;
  tiles: ClerkIconTile[];
}

export interface ClerkFrameworksProps {
  /** one or two columns */
  groups: ClerkIconGroup[];
  /** colours of the neighbouring sections, shown in the band's notches */
  edgeTop?: "background" | "card";
  edgeBottom?: "background" | "card";
  id?: string;
  className?: string;
}

/** Dashed guide lines continuing a grid's column lines past its edge. */
function Guides({ side }: { side: "top" | "bottom" }) {
  const mask = side === "top" ? "[mask-image:linear-gradient(to_top,black,transparent)]" : "[mask-image:linear-gradient(to_bottom,black,transparent)]";
  const place = side === "top" ? "bottom-full" : "top-full";
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-x-0 h-12", place, mask)}>
      {[0, 50, 100].map((x) => (
        <span key={`m${x}`} className="absolute inset-y-0 border-l border-dashed border-foreground/15 lg:hidden" style={{ left: `${x}%` }} />
      ))}
      {[0, 100 / 3, 200 / 3, 100].map((x) => (
        <span key={`d${x}`} className="absolute inset-y-0 hidden border-l border-dashed border-foreground/15 lg:block" style={{ left: `${x}%` }} />
      ))}
    </div>
  );
}

export function ClerkFrameworks({ groups, edgeTop = "background", edgeBottom = "background", id, className }: ClerkFrameworksProps) {
  return (
    <ClerkBand id={id} edgeTop={edgeTop} edgeBottom={edgeBottom} className={className}>
      <div
        className={cn(
          "mx-auto grid max-w-page gap-24 px-gutter py-[calc(var(--section-y)*0.75)] lg:gap-16 lg:py-section",
          groups.length > 1 && "lg:grid-cols-2",
        )}
      >
        {groups.map((g, gi) => {
          const tall = g.tiles.length <= 3;
          return (
            <div key={gi}>
              <ClerkHeading {...g.heading} align="center" textClassName={cn("max-w-md", g.heading.textClassName)} />
              <div className="relative mt-16 lg:mt-[4.75rem]">
                <Guides side="top" />
                <ul className="grid grid-cols-2 border-t border-l border-foreground/10 lg:grid-cols-3">
                  {g.tiles.map((t) => {
                    const Tag = t.href ? "a" : "div";
                    return (
                      <li key={t.label} className="border-r border-b border-foreground/10">
                        <Tag
                          {...(t.href ? { href: t.href } : {})}
                          title={t.label}
                          aria-label={t.label}
                          className={cn(
                            "flex h-[8.625rem] items-center justify-center text-foreground/55 transition-colors duration-300 hover:bg-foreground/[0.025] hover:text-foreground [&_svg]:size-10 [&_svg]:stroke-1",
                            tall && "lg:h-[17.25rem]",
                          )}
                        >
                          {t.icon}
                        </Tag>
                      </li>
                    );
                  })}
                </ul>
                <Guides side="bottom" />
              </div>
            </div>
          );
        })}
      </div>
    </ClerkBand>
  );
}
