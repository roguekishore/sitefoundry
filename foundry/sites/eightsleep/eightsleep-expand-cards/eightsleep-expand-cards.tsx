import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepMedia } from "@foundry/eightsleep-media";

export interface EightsleepExpandCard {
  /** the short pill label top-left (e.g. the part's name) */
  tag: ReactNode;
  /** caption title */
  title: ReactNode;
  /** the sentence shown when the card is open (and under the media on phones) */
  text?: ReactNode;
  /** photo or video filling the card; a muted placeholder when empty */
  media?: ReactNode;
}

export interface EightsleepExpandCardsProps {
  /** two to four cards */
  items: EightsleepExpandCard[];
  /** which card starts open; -1 for none */
  defaultOpen?: number;
  /** phones: caption (title + text) under the media in page colours, or title only over the media */
  phoneCaption?: "below" | "over";
  /** corner size: xl (20px) or 2xl (24px) with the default theme */
  radius?: "xl" | "2xl";
  /** screen-reader labels for the toggle */
  openLabel?: string;
  closeLabel?: string;
  className?: string;
}

export function EightsleepExpandCards({
  items,
  defaultOpen = 0,
  phoneCaption = "over",
  radius = "2xl",
  openLabel,
  closeLabel,
  className,
}: EightsleepExpandCardsProps) {
  const [open, setOpen] = useState(defaultOpen);
  const below = phoneCaption === "below";
  const round = radius === "xl" ? "rounded-lg lg:rounded-xl" : "rounded-lg lg:rounded-2xl";

  return (
    <ul className={cn("flex flex-col gap-4 lg:h-[clamp(360px,31.5vw,454px)] lg:flex-row", below && "gap-12 lg:gap-4", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className={cn(
              "flex min-w-0 flex-col transition-[flex-grow] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none lg:basis-0",
              isOpen ? "lg:grow-[1.85]" : "lg:grow",
            )}
          >
            {/* the frame is dark-scoped: white text and a black scrim over the photo */}
            <div className={cn("dark relative w-full overflow-clip bg-background text-foreground lg:h-full", round, below ? "aspect-[350/263] lg:aspect-auto" : "aspect-[350/320] lg:aspect-auto")}>
              <EightsleepMedia media={item.media} className="absolute inset-0 bg-muted-foreground/40" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-50% to-background/50" />
              <span className="absolute top-4 left-4 rounded-full bg-foreground/25 px-3 py-1 text-[13px] leading-[1.2] backdrop-blur-md">{item.tag}</span>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-label={isOpen ? closeLabel : openLabel}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={cn(
                  "absolute top-3 right-3 size-10 items-center justify-center rounded-full bg-foreground/20 backdrop-blur-md transition-colors duration-200 hover:bg-foreground/35",
                  below ? "hidden lg:flex" : "flex",
                )}
              >
                <Plus strokeWidth={1.5} className={cn("size-6 transition-transform duration-500 motion-reduce:transition-none", isOpen && "rotate-45")} />
              </button>
              <div className={cn("absolute inset-x-0 bottom-0 p-5 lg:p-8", below && "hidden lg:block")}>
                <h3 className="max-w-[30ch] text-[17px] leading-[1.2] font-medium lg:text-[22px]">{item.title}</h3>
                {item.text && (
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 motion-reduce:transition-none max-lg:hidden",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="min-h-0 max-w-[26rem] overflow-hidden pt-2 text-[15px] leading-[1.4] lg:text-[18px]">{item.text}</p>
                  </div>
                )}
              </div>
            </div>
            {below && (
              <div className="mx-auto mt-5 max-w-[22rem] text-center lg:hidden">
                <h3 className="text-[22px] leading-[1.1] text-foreground">{item.title}</h3>
                {item.text && <p className="mt-2 text-[15px] leading-[1.35] text-muted-foreground">{item.text}</p>}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
