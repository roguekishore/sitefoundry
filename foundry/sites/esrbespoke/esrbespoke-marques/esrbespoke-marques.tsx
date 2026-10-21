import { useEffect, useRef, useState, type ReactNode } from "react";
import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeMarque {
  /** the name, in big type */
  name: string;
  /** a link for the row (optional) */
  href?: string;
  /** the square picture shown while this row is active. Empty: a placeholder */
  media?: ReactNode;
}

export interface EsrbespokeMarquesProps {
  /** the tiny label top left */
  label: string;
  /** a short note in tiny capitals at column 9 (phones: column 2) */
  note: string;
  /** the rows */
  items: EsrbespokeMarque[];
  tone?: EsrbespokeTone;
  id?: string;
  className?: string;
}

const ease = "ease-[cubic-bezier(0.19,1,0.22,1)]";

/** Big-type list whose active row follows the scroll, beside a pinned square picture. */
export function EsrbespokeMarques({ label, note, items, tone = "light", id, className }: EsrbespokeMarquesProps) {
  const [scrolled, setScrolled] = useState(items.length - 1);
  const [hovered, setHovered] = useState<number | null>(null);
  const rows = useRef<(HTMLLIElement | null)[]>([]);
  const active = hovered ?? scrolled;

  useEffect(() => {
    let frame = 0;
    // the active row is the one crossing the middle of the window; above the list: the first,
    // below it: the last
    const update = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let pick = 0;
      rows.current.forEach((row, i) => {
        if (row && row.getBoundingClientRect().top <= middle) pick = i;
      });
      setScrolled(pick);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  return (
    <section id={id} className={cn(toneClass(tone), "pt-8 pb-6 lg:pb-[18rem]", className)}>
      <div className="grid grid-cols-2 gap-x-4 px-gutter lg:grid-cols-12">
        <EsrbespokeLabel as="h2" className="lg:col-span-3">{label}</EsrbespokeLabel>
        <EsrbespokeLabel as="p" className="max-w-[14rem] lg:col-span-3 lg:col-start-9 lg:max-w-[12.5rem]">
          {note}
        </EsrbespokeLabel>
      </div>
      <div className="relative mt-[5.5rem] grid gap-x-4 px-gutter lg:mt-[15.5rem] lg:grid-cols-12">
        <ul className="lg:col-span-8" onPointerLeave={() => setHovered(null)}>
          {items.map((item, i) => {
            const text = (
              <span
                className={cn(
                  "block font-display text-[2.375rem] leading-[0.95] font-medium tracking-[-0.01em] font-stretch-[106%] transition-opacity duration-100 lg:-ml-1 lg:text-[5.75rem]",
                  ease,
                  i === active ? "opacity-100" : "opacity-10",
                )}
              >
                {item.name}
              </span>
            );
            return (
              <li key={i} ref={(el) => void (rows.current[i] = el)} onPointerEnter={() => setHovered(i)}>
                {item.href ? <a href={item.href}>{text}</a> : text}
              </li>
            );
          })}
        </ul>
        <div className="absolute top-1 right-gutter lg:static lg:col-span-2 lg:col-start-9">
          <div className="relative size-[5.625rem] lg:sticky lg:top-[30svh] lg:size-[13.5rem]">
            {items.map((item, i) => (
              <div
                key={i}
                aria-hidden={i !== active}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none [&>*]:h-full [&>*]:w-full [&>img]:object-cover",
                  ease,
                  i === active ? "opacity-100" : "opacity-0",
                )}
              >
                {item.media ?? <div className="h-full w-full bg-muted" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
