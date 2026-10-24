import { useEffect, useRef, useState, type ReactNode } from "react";
import { DiabrowserFrame } from "@foundry/diabrowser-frame";
import { DiabrowserHeading } from "@foundry/diabrowser-heading";
import { cn } from "@foundry/foundry-utils";
import "./diabrowser-tour.css";

export interface DiabrowserTourItem {
  /** short serif title */
  title: string;
  /** two or three sentences, shown under the title when the item is active */
  body: string;
  /** the screenshot for this item; empty shows a placeholder */
  media?: ReactNode;
}

export interface DiabrowserTourProps {
  /** the centred serif heading over the tour */
  heading: ReactNode;
  /** the steps, numbered 01, 02… in order */
  items: DiabrowserTourItem[];
  /** CSS aspect ratio of the screenshots */
  mediaAspect?: string;
  className?: string;
}

const number = (i: number) => String(i + 1).padStart(2, "0");

/**
 * A scroll-told product tour. Desktop: a numbered list pinned on the left (the item whose
 * screenshot is in the middle of the window is dark, marked with a bar and opened) beside a
 * column of framed screenshots. Phones: each screenshot followed by its number, title and text.
 */
export function DiabrowserTour({ heading, items, mediaAspect = "760 / 562", className }: DiabrowserTourProps) {
  const [active, setActive] = useState(0);
  const frames = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // the screenshot crossing the middle band of the window decides the active item
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const el of frames.current) if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <section className={cn("bg-background pt-5 pb-section text-foreground lg:pt-[10px]", className)}>
      <div className="diabrowser-tour-fade px-gutter">
        <DiabrowserHeading>{heading}</DiabrowserHeading>
      </div>

      <div className="mx-auto mt-[44px] max-w-[1440px] px-3 lg:mt-[78px] lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-12 lg:pr-[110px] lg:pl-[30px] xl:grid-cols-[minmax(0,1fr)_760px]">
        {/* desktop: the pinned list */}
        <div className="hidden lg:block">
          <ol className="sticky top-[20vh] flex flex-col gap-[42px] pt-6">
            {items.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.title} className="relative pl-6">
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-y-0 left-0 w-[2px] bg-foreground transition-opacity duration-300 motion-reduce:transition-none",
                      on ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <p className="font-mono text-[11px] leading-[14px] text-muted-foreground">{number(i)}</p>
                  <h3
                    className={cn(
                      "mt-[11px] max-w-[400px] font-display text-[24px] leading-[30px] font-[420] tracking-[-0.03em] transition-colors duration-300 motion-reduce:transition-none",
                      on ? "text-foreground" : "text-foreground/45",
                    )}
                  >
                    {item.title}
                  </h3>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
                      on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-[290px] pt-[10px] text-[14px] leading-5 tracking-[0.005em] text-foreground/80">{item.body}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* the screenshots (and, on phones, each one's text) */}
        <div className="flex flex-col gap-[60px] lg:gap-[62px]">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-index={i}
              ref={(el) => {
                frames.current[i] = el;
              }}
            >
              <div className="diabrowser-tour-fade">
                <DiabrowserFrame media={item.media} aspect={mediaAspect} />
              </div>
              <div className="diabrowser-tour-rise mt-7 px-[3px] lg:hidden">
                <p className="font-mono text-[12px] leading-4 text-muted-foreground">{number(i)}</p>
                <h3 className="mt-[13px] font-display text-[24px] leading-[30px] font-[420] tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-[14px] text-[16px] leading-6 tracking-[0.005em] text-foreground/90">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
