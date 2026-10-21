import type { CSSProperties, ReactNode } from "react";
import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { KononenkogroupMedia } from "@foundry/kononenkogroup-media";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-people.css";

export interface KononenkogroupPeopleProps {
  /** small serif label beside the statement */
  label: string;
  /** the big serif statement */
  text: string;
  /** the centred heading inside the ring, one item per line */
  heading: string[];
  /** two short grey notes under the heading */
  notes: string[];
  /** the team photos around the ring; a number makes that many empty placeholders */
  photos: ReactNode[] | number;
  className?: string;
}

const small = "text-[3.733vw] leading-[1.2] tracking-[-0.02em] lg:text-[max(10px,0.833vw)]";

/**
 * The studio, on black: a small label and a big serif statement, then a ring of team photos
 * turned to face a huge centred heading (the founding year), with two grey notes beneath it.
 * Lines rise from their masks; the ring turns slowly with the scroll.
 */
export function KononenkogroupPeople({ label, text, heading, notes, photos, className }: KononenkogroupPeopleProps) {
  const slots: (ReactNode | undefined)[] = typeof photos === "number" ? Array.from({ length: photos }) : photos;
  return (
    <section className={cn("dark overflow-clip bg-background pt-[16vw] pb-section text-foreground lg:pt-[13vw]", className)}>
      <div className="relative px-gutter">
        <KononenkogroupLines text={label} className={cn(small, "font-display tracking-[-0.01em] lg:absolute lg:top-[0.6vw] lg:max-w-[5vw]")} />
        <KononenkogroupLines
          as="h2"
          text={text}
          className="mt-[2vw] font-display text-[9.6vw] leading-[0.9] tracking-[-0.03em] lg:mt-0 lg:w-[57.6vw] lg:text-[6.146vw] lg:indent-[6.53vw]"
        />
      </div>

      <div className="relative mt-[23vw] lg:mt-[21vw]">
        <div className="kononenkogroup-people-ring relative h-[91vw] lg:h-[97.4vw]">
          <div className="kononenkogroup-people-orbit absolute inset-0" aria-hidden={typeof photos === "number"}>
            {slots.map((photo, i) => (
              <div
                key={i}
                className="kononenkogroup-people-slot"
                style={{ "--kononenkogroup-people-angle": `${(360 / slots.length) * i}deg` } as CSSProperties}
              >
                <KononenkogroupMedia media={photo} className="size-full" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-gutter">
            <KononenkogroupLines
              as="p"
              text={heading}
              className="relative text-center font-sans text-[10.67vw] leading-[0.85] tracking-[-0.045em] lg:text-[9.115vw] lg:leading-[0.82]"
            />
          </div>
        </div>
        <div className="mt-[6vw] grid gap-[5vw] px-gutter text-center text-muted-foreground lg:absolute lg:inset-x-0 lg:top-[calc(50%+11.5vw)] lg:mt-0 lg:grid-cols-15 lg:gap-x-[1.11vw]">
          {notes.map((note, i) => (
            <KononenkogroupLines
              key={i}
              text={note}
              className={cn(small, "mx-auto max-w-[88vw] lg:col-span-3 lg:max-w-none", i === 0 ? "lg:col-start-5" : "lg:col-start-9")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
