import { useRef, type ReactNode } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerMedia } from "@foundry/superpower-media";

export interface SuperpowerVoiceMedia {
  /** narrow (portrait) or wide (landscape) */
  width?: "narrow" | "wide";
  /** the photo or video; empty: a placeholder */
  media?: ReactNode;
  mediaLabel?: string;
  /** white caption at the foot */
  caption?: string;
  /** the publication's name, in bold under the caption */
  source?: ReactNode;
  /** a creator's handle, with a verified mark */
  handle?: string;
  /** e.g. "212k followers" */
  followers?: string;
  /** shows a frosted play button */
  video?: boolean;
}

export interface SuperpowerVoiceQuote {
  quote: string;
  /** the publication's name (styled text) */
  source: ReactNode;
}

export type SuperpowerVoice =
  | ({ kind: "media" } & SuperpowerVoiceMedia)
  /** a short photo stacked over a press quote */
  | { kind: "stack"; top: SuperpowerVoiceMedia; quote: SuperpowerVoiceQuote };

export interface SuperpowerVoicesProps {
  title: string;
  voices: SuperpowerVoice[];
  /** screen-reader labels of the arrow buttons */
  prevLabel?: string;
  nextLabel?: string;
  id?: string;
  className?: string;
}

const edge = "px-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))]";
const snapEdge = "scroll-px-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))]";

function MediaCard({ v, className }: { v: SuperpowerVoiceMedia; className?: string }) {
  return (
    <div className={className}>
      <SuperpowerMedia media={v.media} label={v.mediaLabel} className="size-full rounded-lg">
        {(v.caption || v.source || v.handle) && (
          <div className="dark absolute inset-x-0 bottom-0 bg-linear-to-b from-transparent to-background/90 px-5 pt-20 pb-5 text-foreground">
            {v.caption && <p className="text-[1rem] leading-[1.35] lg:text-[1.0625rem]">{v.caption}</p>}
            {v.source && <div className="mt-3 text-[1.25rem] leading-none font-bold">{v.source}</div>}
            {v.handle && (
              <p className="flex items-center gap-1 text-[0.9375rem]">
                {v.handle}
                <BadgeCheck className="size-4 fill-chart-1 text-background" aria-hidden />
              </p>
            )}
            {v.followers && <p className="mt-1 text-[0.8125rem] text-foreground/70">{v.followers}</p>}
          </div>
        )}
        {v.video && (
          <span className="dark absolute top-1/2 left-1/2 grid size-12 -translate-1/2 place-items-center rounded-full bg-background/30 text-foreground backdrop-blur-md">
            <Play className="size-5 fill-foreground text-foreground" aria-hidden />
          </span>
        )}
      </SuperpowerMedia>
    </div>
  );
}

export function SuperpowerVoices({ title, voices, prevLabel = "Previous", nextLabel = "Next", id, className }: SuperpowerVoicesProps) {
  const row = useRef<HTMLDivElement>(null);
  const nudge = (dir: 1 | -1) => row.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  const arrow =
    "absolute top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-[0_4px_16px_-4px_color-mix(in_oklab,var(--foreground)_25%,transparent)] backdrop-blur-md transition-transform duration-200 hover:scale-105 motion-reduce:transition-none lg:grid";

  return (
    <section id={id} className={cn("bg-background py-12 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 className="max-w-[38rem] text-[1.5rem] leading-[1.3] font-normal tracking-[-0.02em] lg:text-[2.8125rem] lg:leading-[1.2]">{title}</h2>
      </div>
      <div className="relative mt-8 lg:mt-[5.5rem]">
        <button type="button" aria-label={prevLabel} onClick={() => nudge(-1)} className={cn(arrow, "left-4")}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button type="button" aria-label={nextLabel} onClick={() => nudge(1)} className={cn(arrow, "right-4")}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
        <div ref={row} className={cn("snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", edge, snapEdge)}>
          <ul className="flex w-max gap-4 lg:gap-[0.9375rem]">
            {voices.map((v, i) => (
              <li key={i} className="h-[22rem] shrink-0 snap-start lg:h-[24.625rem]">
                {v.kind === "media" ? (
                  <MediaCard v={v} className={cn("h-full", v.width === "wide" ? "w-[20rem] lg:w-[23.4rem]" : "w-[13rem] lg:w-[14.625rem]")} />
                ) : (
                  <div className="flex h-full w-[13rem] flex-col gap-4 lg:w-[14.625rem]">
                    <MediaCard v={v.top} className="h-[10.4rem] shrink-0" />
                    <figure className="flex flex-1 flex-col items-center justify-center gap-5 rounded-lg bg-secondary px-5 text-center">
                      <blockquote className="text-[0.9375rem] leading-[1.4]">{v.quote.quote}</blockquote>
                      <figcaption className="text-muted-foreground">{v.quote.source}</figcaption>
                    </figure>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
