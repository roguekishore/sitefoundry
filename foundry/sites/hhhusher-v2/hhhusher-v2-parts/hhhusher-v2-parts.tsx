import { useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { hhhusherV2Ease } from "@foundry/hhhusher-v2-button";
import { hhhusherV2Reveal, hhhusherV2RevealStyle } from "@foundry/hhhusher-v2-reveal";

export interface HhhusherV2Part {
  name: string;
  /** the part's picture, shown beside the pointer while its row is hovered; a placeholder when empty */
  media?: ReactNode;
}

export interface HhhusherV2PartsProps {
  parts: HhhusherV2Part[];
  id?: string;
  className?: string;
}

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function HhhusherV2Parts({ parts, id, className }: HhhusherV2PartsProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  // the floating picture's position follows the pointer, set straight on its style (no re-render)
  const follow = (e: PointerEvent) => {
    const box = listRef.current?.getBoundingClientRect();
    if (!box || !floatRef.current) return;
    floatRef.current.style.setProperty("--hh-x", `${e.clientX - box.left}px`);
    floatRef.current.style.setProperty("--hh-y", `${e.clientY - box.top}px`);
  };

  return (
    <section id={id} className={cn("bg-secondary pt-section pb-[calc(var(--section-y)*1)] text-secondary-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div ref={listRef} className="relative" onPointerMove={follow} onPointerLeave={() => setHovered(null)}>
          <ol className="border-b border-secondary-foreground/25">
            {parts.map((part, i) => (
              <li key={part.name} onPointerEnter={() => setHovered(i)} className={cn(hhhusherV2Reveal("rise"), "border-t border-secondary-foreground/25")} style={hhhusherV2RevealStyle(i * 0.5, 50)}>
                <div
                  className={cn(
                    "flex items-start justify-between gap-8 py-2 font-display text-[1.82rem] leading-[1.15] font-[570] tracking-[-0.02em] transition-opacity lg:items-center lg:py-0 lg:text-[3.5625rem] lg:leading-[1.38]",
                    hhhusherV2Ease,
                    hovered === i ? "opacity-100" : "opacity-[0.15] hover:opacity-100",
                  )}
                >
                  <span>{pad(i)}</span>
                  <span className="max-w-[65%] text-right lg:max-w-none">{part.name}</span>
                </div>
              </li>
            ))}
          </ol>

          {/* the picture beside the pointer (pointer devices only) */}
          <div
            ref={floatRef}
            aria-hidden
            className={cn(
              "pointer-events-none absolute top-0 left-0 z-10 hidden w-[19.4rem] transition-opacity duration-300 [@media(hover:hover)]:lg:block",
              hovered === null ? "opacity-0" : "opacity-100",
            )}
            style={{ transform: "translate(calc(var(--hh-x, 0px) - 50%), calc(var(--hh-y, 0px) - 50%))" } as CSSProperties}
          >
            {parts.map((part, i) => (
              <div key={part.name} className={cn("aspect-[0.88] [&>*]:size-full [&>*]:object-contain", i === hovered ? "block" : "hidden")}>
                {part.media ?? <div className="size-full rounded-lg bg-secondary-foreground/15" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
