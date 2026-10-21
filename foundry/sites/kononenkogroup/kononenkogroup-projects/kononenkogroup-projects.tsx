import type { CSSProperties, ReactNode } from "react";
import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { KononenkogroupLink } from "@foundry/kononenkogroup-link";
import { KononenkogroupMedia } from "@foundry/kononenkogroup-media";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-projects.css";

export interface KononenkogroupProject {
  /** project name, bottom left of the card */
  name: string;
  /** its size, bottom right in serif, e.g. "540 m²" */
  area: string;
  href: string;
  /** the project photo (fills the frame) */
  media?: ReactNode;
}

export interface KononenkogroupProjectsProps {
  /** the heading, one item per line on wide screens (one line on phones) */
  heading: string[];
  /** the small serif count after the heading, e.g. "(8+)" */
  count?: string;
  projects: KononenkogroupProject[];
  /** the link that replaces the area on hover */
  visitLabel: string;
  /** the centred link under the grid */
  more?: { label: string; href: string };
  /** how many cards phones show (the original shows six); the rest appear from 1024px */
  phoneCount?: number;
  className?: string;
}

// The original's scatter on the 15-column grid, eight cards long, then repeated lower down:
// column, width in columns, offset from the top (vw) and the photo's aspect.
const scatter = [
  { col: 1, span: 7, top: 0, aspect: "643 / 405" },
  { col: 9, span: 7, top: 8.9, aspect: "643 / 405" },
  { col: 6, span: 6, top: 49.8, aspect: "549 / 405" },
  { col: 1, span: 4, top: 61.7, aspect: "361 / 525" },
  { col: 8, span: 7, top: 89.9, aspect: "643 / 405" },
  { col: 5, span: 4, top: 131, aspect: "361 / 525" },
  { col: 1, span: 7, top: 187.3, aspect: "643 / 405" },
  { col: 9, span: 7, top: 178.5, aspect: "643 / 405" },
];
const cycle = 226; // vw from one run of eight to the next

const small = "text-[3.733vw] leading-[1.2] tracking-[-0.02em] lg:text-[max(10px,0.833vw)]";
const ease = "duration-[600ms] ease-[cubic-bezier(0.17,0.84,0.44,1)] motion-reduce:transition-none";

/**
 * Selected work: a grotesk heading with a small serif count, then project photos scattered
 * across a 15-column grid in three sizes (stacked 8:5 cards on phones), each with its name and
 * area underneath. Cards rise a long way as they enter; on hover the photo swells slightly, the
 * area slides up and away and a "visit" link slides in and underlines itself.
 */
export function KononenkogroupProjects({ heading, count, projects, visitLabel, more, phoneCount = 6, className }: KononenkogroupProjectsProps) {
  return (
    <section className={cn("bg-background px-gutter py-section text-foreground", className)}>
      <h2 className="font-sans text-[8vw] leading-[0.8] tracking-[-0.045em] lg:text-[4.17vw] lg:leading-[0.875]">
        {heading.map((line, i) => (
          <span key={i} className="lg:block">
            <KononenkogroupLines as="span" text={line} />
            {i < heading.length - 1 ? " " : count && <sup className="ml-[0.15em] align-[0.85em] font-display text-[0.45em] tracking-normal">{count}</sup>}
          </span>
        ))}
      </h2>

      <ul className="mt-[8vw] grid gap-[13vw] lg:mt-[3.5vw] lg:grid-cols-15 lg:gap-x-[1.11vw] lg:gap-y-0">
        {projects.map((project, i) => {
          const place = scatter[i % scatter.length];
          const style = {
            "--kononenkogroup-projects-col": place.col,
            "--kononenkogroup-projects-span": place.span,
            "--kononenkogroup-projects-top": `${place.top + Math.floor(i / scatter.length) * cycle}vw`,
            "--kononenkogroup-projects-aspect": place.aspect,
          } as CSSProperties;
          return (
            <li key={i} className={cn("kononenkogroup-projects-item", i >= phoneCount && "hidden lg:block")} style={style}>
              <a href={project.href} className="kononenkogroup-projects-card group/card block">
                <div className="kononenkogroup-projects-frame aspect-[8/5] overflow-clip">
                  <KononenkogroupMedia
                    media={project.media}
                    className={cn("size-full transition-[scale] group-hover/card:scale-[1.035]", ease)}
                  />
                </div>
                <div className={cn(small, "mt-[2.6vw] flex items-start justify-between gap-4 lg:mt-[1vw]")}>
                  <span>{project.name}</span>
                  {/* the area and the visit link share one masked slot and swap on hover */}
                  <span className="relative overflow-clip font-display tracking-[-0.01em]">
                    <span className={cn("block transition-[translate] group-hover/card:-translate-y-[101%]", ease)}>{project.area}</span>
                    <span
                      className={cn(
                        "absolute inset-0 flex translate-y-full justify-end font-sans tracking-[-0.02em] transition-[translate] group-hover/card:translate-y-0",
                        ease,
                      )}
                    >
                      <span className="relative">
                        {visitLabel}
                        <span
                          aria-hidden
                          className={cn(
                            "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-[scale] group-hover/card:scale-x-100 group-hover/card:delay-300",
                            ease,
                          )}
                        />
                      </span>
                    </span>
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      {more && (
        <div className={cn(small, "mt-[15vw] text-center lg:mt-[7vw] lg:text-[max(10px,0.99vw)]")}>
          <KononenkogroupLink href={more.href} underlined>
            {more.label}
          </KononenkogroupLink>
        </div>
      )}
    </section>
  );
}
