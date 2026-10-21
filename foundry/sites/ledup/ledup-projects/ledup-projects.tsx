import { type ReactNode, useEffect, useId, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LedupHeading } from "@foundry/ledup-heading";
import { LedupReveal } from "@foundry/ledup-reveal";
import "./ledup-projects.css";

export interface LedupProject {
  /** the project's name, for screen readers and as the photo's label */
  name: string;
  /** where it links */
  href?: string;
  /** the photo; empty shows a muted placeholder */
  media?: ReactNode;
}

export interface LedupProjectsProps {
  /** the small label above the headline */
  label?: string;
  /** the headline */
  title: ReactNode;
  /** the paragraph under the headline (desktop only, as on the original) */
  text?: ReactNode;
  /** the photos in the reel */
  projects: LedupProject[];
  /** the words that run round the spinning drag hint (desktop) */
  dragHint?: string;
  className?: string;
}

export function LedupProjects({ label, title, text, projects, dragHint, className }: LedupProjectsProps) {
  const reel = useRef<HTMLDivElement>(null);
  const ringId = useId().replace(/:/g, "");

  // Let a mouse drag the reel sideways (touch and trackpads already scroll it natively).
  useEffect(() => {
    const el = reel.current;
    if (!el) return;
    let startX = 0;
    let startLeft = 0;
    let dragging = false;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.style.scrollSnapType = "none";
      el.style.cursor = "grabbing";
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      e.preventDefault();
      el.scrollLeft = startLeft - (e.clientX - startX);
    };
    const up = () => {
      if (!dragging) return;
      dragging = false;
      el.style.scrollSnapType = "";
      el.style.cursor = "";
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <section className={cn("ledup-projects bg-background font-sans text-foreground", className)}>
      <div className="overflow-clip rounded-[3.125rem] bg-card pt-section pb-5 text-card-foreground lg:pt-[10.5rem] lg:pb-28">
        <div className="mx-auto max-w-page lg:grid lg:grid-cols-[minmax(0,1fr)_35rem] lg:px-gutter lg:pr-[calc(var(--page-gutter)+3.75rem)]">
          <LedupReveal className="relative flex flex-col justify-end px-gutter lg:pr-10 lg:pl-5">
            <LedupHeading label={label} title={title} text={text} align="left" size="lg" narrow className="lg:-mb-12" />
            {dragHint && (
              <div aria-hidden className="absolute -top-10 right-10 hidden size-[9.5rem] text-muted-foreground lg:block">
                <svg viewBox="0 0 152 152" className="ledup-projects-ring absolute inset-0 size-full">
                  <defs>
                    <path id={ringId} d="M76 76 m-62 0 a62 62 0 1 1 124 0 a62 62 0 1 1 -124 0" />
                  </defs>
                  <text fill="currentColor" className="text-[0.625rem] tracking-[0.35em] uppercase">
                    <textPath href={`#${ringId}`}>{dragHint}</textPath>
                  </text>
                </svg>
                <ArrowRight strokeWidth={0.6} className="absolute inset-0 m-auto size-20" />
              </div>
            )}
          </LedupReveal>

          <LedupReveal className="mt-16 min-w-0 lg:mt-0">
            <div
              ref={reel}
              className="ledup-projects-reel flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 select-none lg:scroll-px-0 lg:gap-[3.75rem] lg:px-0"
            >
              {projects.map((p) => {
                const Tag = p.href ? "a" : "div";
                return (
                  <Tag
                    key={p.name}
                    href={p.href}
                    aria-label={p.name}
                    draggable={false}
                    className="aspect-[4/3] w-[19.5rem] shrink-0 snap-start overflow-clip rounded-[1rem] bg-muted lg:w-[30rem] [&>*]:pointer-events-none [&>*]:size-full [&>*]:object-cover"
                  >
                    {p.media}
                  </Tag>
                );
              })}
            </div>
            <div aria-hidden className="mx-auto mt-7 h-[3px] w-[7.5rem] overflow-clip rounded-full bg-muted lg:hidden">
              <div className="ledup-projects-thumb h-full w-2/5 rounded-full bg-secondary" />
            </div>
          </LedupReveal>
        </div>
      </div>
    </section>
  );
}
