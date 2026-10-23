import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WhoopPlaceholder } from "@foundry/whoop-placeholder";
import { WhoopSectionHeading } from "@foundry/whoop-section-heading";
import { WhoopSnapTrack } from "@foundry/whoop-snap-track";

export interface WhoopInsight {
  /** the title at the top of the card */
  title: string;
  /** the text the plus button reveals over the card */
  detail: string;
  /** the photo, filling the card (object-cover); a grey placeholder when empty */
  media?: ReactNode;
}

export interface WhoopInsightsProps {
  /** the big heading above the track */
  heading: string;
  /** the paragraph beside or under it */
  body?: string;
  /** the cards */
  items: WhoopInsight[];
  /** screen-reader labels: the track, each dot ("Show card" → "Show card 2"), and the plus button's two states */
  labels: { track: string; dot: string; open: string; close: string };
  className?: string;
}

function InsightCard({ item, labels }: { item: WhoopInsight; labels: WhoopInsightsProps["labels"] }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="group relative aspect-[333/446] overflow-clip rounded-lg">
      <div className="absolute inset-0 transition-transform duration-250 ease-out group-hover:scale-[1.015] motion-reduce:transition-none *:size-full *:object-cover">
        {item.media ?? <WhoopPlaceholder tone="photo" />}
      </div>
      <div aria-hidden className="absolute inset-x-0 top-0 h-2/5 bg-linear-to-b from-background/70 to-transparent" />
      <h3 className="relative px-8 pt-7 text-2xl leading-[1.1] font-semibold tracking-[-0.01em] text-foreground">
        {item.title}
      </h3>
      {/* the detail panel: fades over the card like the original's popup (0.5s) */}
      <div
        className={cn(
          "absolute inset-0 flex items-end bg-foreground/85 p-8 pb-24 text-background backdrop-blur-sm transition-[opacity,visibility] duration-500 ease-in-out motion-reduce:transition-none",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <p className="text-base leading-[1.6]">{item.detail}</p>
      </div>
      <button
        type="button"
        aria-label={open ? labels.close : labels.open}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="absolute right-[2.125rem] bottom-6 grid size-10 place-items-center rounded-full bg-background text-foreground transition-colors duration-125 ease-in-out hover:bg-muted motion-reduce:transition-none"
      >
        <Plus
          aria-hidden
          className={cn("size-5 transition-transform duration-300 ease-out motion-reduce:transition-none", open && "rotate-45")}
          strokeWidth={2}
        />
      </button>
    </article>
  );
}

/** Heading, then a snapping track of tall photo cards with reveal-on-plus details. */
export function WhoopInsights({ heading, body, items, labels, className }: WhoopInsightsProps) {
  return (
    <section className={cn("bg-background py-section text-foreground lg:py-24", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <WhoopSectionHeading heading={heading} body={body} />
      </div>
      <WhoopSnapTrack
        className="mt-24 lg:mt-20"
        slides={items.map((item, i) => (
          <InsightCard key={i} item={item} labels={labels} />
        ))}
        slideClassName="w-[20.8rem] lg:w-[24.5rem]"
        label={labels.track}
        dotLabel={labels.dot}
      />
    </section>
  );
}
