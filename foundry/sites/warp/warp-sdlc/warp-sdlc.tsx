import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WarpMedia } from "@foundry/warp-media";
import { WarpSection } from "@foundry/warp-section";
import "./warp-sdlc.css";

export interface WarpSdlcItem {
  title: string;
  text: string;
}

export interface WarpSdlcProps {
  id?: string;
  /** the typed label above the title */
  tag?: string;
  /** shown in brackets after the tag */
  status?: string;
  title: string;
  lead?: string;
  /** the numbered rows (2 to 8 for the stepping highlight) */
  items: WarpSdlcItem[];
  /** the tall product shot at the right (desktop); a placeholder when empty */
  media?: ReactNode;
  /** what the product shot shows, for screen readers */
  mediaLabel?: string;
  className?: string;
}

/** Numbered rows beside a tall product shot; a highlight steps down the rows. */
export function WarpSdlc({ id, tag, status, title, lead, items, media, mediaLabel, className }: WarpSdlcProps) {
  const n = Math.min(Math.max(items.length, 2), 8);
  return (
    <WarpSection id={id} tag={tag} status={status} title={title} lead={lead} className={className}>
      <div className="grid grid-cols-1 border border-border bg-card lg:grid-cols-2">
        <ol className="flex flex-col">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="warp-sdlc-row flex min-h-[7.375rem] gap-4 border-b border-border px-5 pt-6 pb-7 last:border-b-0 lg:min-h-32 lg:gap-3.5 lg:pt-[1.625rem]"
              style={{ "--warp-sdlc-n": n, "--warp-sdlc-i": i, animationName: i < 8 ? `warp-sdlc-lit-${n}` : undefined } as CSSProperties}
            >
              <span className="w-[1.125rem] shrink-0 pt-1 font-mono text-[0.6875rem] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h3 className="font-display text-[1.1875rem] leading-[1.5] font-bold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-1.5 text-[0.8125rem] leading-[1.6] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <WarpMedia label={mediaLabel} className={cn("hidden min-h-full border-l border-border lg:block")}>
          {media}
        </WarpMedia>
      </div>
    </WarpSection>
  );
}
