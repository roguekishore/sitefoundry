import { useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { hhhusherEase } from "@foundry/hhhusher-button";
import "./hhhusher-parts.css";

export interface HhhusherPart {
  /** the number on the left, e.g. "01" */
  index: string;
  /** the part's name, right-aligned */
  name: string;
  /** a photo of the part, shown beside the pointer while its row is hovered */
  media?: ReactNode;
}

export interface HhhusherPartsProps {
  /** the parts, top to bottom */
  parts: HhhusherPart[];
  /** the id other links jump to */
  id?: string;
  className?: string;
}

/**
 * What's in the box, as a big list on a camel band: number left, name right-aligned, thin
 * rules between, every row faded to 15%. Hovering a row brings it to full strength and a photo
 * of that part follows the pointer. Rows rise 50px into place, one after another, as the list
 * enters. Phones show the first part at full strength and the rest half-faded; tap to switch.
 */
export function HhhusherParts({ parts, id, className }: HhhusherPartsProps) {
  const [active, setActive] = useState(0);
  const [over, setOver] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const onMove = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || !box.current) return;
    const r = box.current.getBoundingClientRect();
    setPoint({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <section id={id} className={cn("bg-secondary py-section text-secondary-foreground", className)}>
      <div ref={box} className="relative mx-auto max-w-page px-gutter">
        <ul className="border-b border-foreground/25" onPointerMove={onMove} onPointerEnter={(e) => e.pointerType === "mouse" && setOver(true)} onPointerLeave={() => setOver(false)}>
          {parts.map((part, i) => (
            <li key={i} className="hhhusher-parts-row" style={{ "--hhhusher-row": i } as CSSProperties}>
              <button
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                onPointerEnter={() => setActive(i)}
                className={cn(
                  "flex w-full items-start justify-between gap-8 border-t border-foreground/25 py-1.5 text-left font-display text-[2.08rem] leading-[1] font-medium tracking-[-0.01em] transition-opacity duration-300 lg:py-[0.6rem] lg:text-[3.5625rem] lg:leading-none",
                  hhhusherEase,
                  i === active ? "opacity-100" : "opacity-55",
                  "lg:opacity-15 lg:hover:opacity-100 lg:focus-visible:opacity-100",
                )}
              >
                <span>{part.index}</span>
                <span className="text-right">{part.name}</span>
              </button>
            </li>
          ))}
        </ul>

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-0 left-0 hidden aspect-[0.88] w-[19.375rem] overflow-hidden rounded-lg bg-muted transition-[opacity,translate] duration-500 motion-reduce:transition-none lg:block [&>*]:size-full [&>*]:object-cover",
            hhhusherEase,
            over ? "opacity-100" : "opacity-0",
          )}
          style={{ translate: `calc(${point.x}px - 50%) calc(${point.y}px - 50%)` } as CSSProperties}
        >
          {parts[active]?.media}
        </div>
      </div>
    </section>
  );
}
