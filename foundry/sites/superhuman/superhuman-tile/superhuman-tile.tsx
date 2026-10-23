import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperhumanPlaceholder } from "@foundry/superhuman-placeholder";

const tones = {
  teal: "bg-chart-1 text-primary-foreground",
  maroon: "bg-chart-2 text-primary-foreground",
  indigo: "bg-chart-3 text-primary-foreground",
  purple: "bg-chart-4 text-primary-foreground",
  stone: "bg-muted text-foreground",
  lilac: "bg-accent text-accent-foreground",
} as const;

export interface SuperhumanTileProps {
  /** the surface colour */
  tone: keyof typeof tones;
  /** the small label above the headline */
  eyebrow: string;
  /** the headline */
  title: string;
  /** the image or screenshot; empty shows a placeholder */
  media?: ReactNode;
  /** side: text left, media right (phones: text then media) · stack: media above, text below at every width */
  layout?: "side" | "stack";
  /** phones only (stack layout): the media fills the whole tile behind the text instead of sitting above it, so the tile stays short */
  overlay?: boolean;
  /** pad the media from the top and left so a window sits inside the tile instead of bleeding in */
  inset?: boolean;
  /** width of the media area at desktop when layout is side (a Tailwind width class) */
  mediaWidth?: string;
  /** height and grid placement at desktop */
  className?: string;
}

export function SuperhumanTile({ tone, eyebrow, title, media, layout = "side", overlay, inset, mediaWidth = "lg:w-[57%]", className }: SuperhumanTileProps) {
  const side = layout === "side";
  const text = (
    <div className={cn("p-8", side && "lg:w-[43%] lg:self-end", !side && "lg:pt-6", overlay && "relative max-lg:mt-auto max-lg:pt-24")}>
      <p className="text-sm/[1.2] font-medium opacity-80">{eyebrow}</p>
      <h3 className="mt-4 text-xl/[1.2] font-[460] tracking-[-0.0275em] lg:text-[1.5625rem]/[1.2]">{title}</h3>
    </div>
  );
  const slot = (
    <div
      className={cn(
        "aspect-[3/2] overflow-clip lg:aspect-auto [&_img]:size-full [&_img]:object-cover",
        side ? cn("lg:absolute lg:inset-y-0 lg:right-0", mediaWidth) : cn("lg:min-h-0 lg:flex-1", overlay && "max-lg:absolute max-lg:inset-0 max-lg:aspect-auto"),
        inset && "pt-3 pl-8 lg:pt-12 lg:pl-4",
      )}
    >
      {media ?? <SuperhumanPlaceholder tone={inset ? "panel" : "tint"} className={cn("size-full", inset && "rounded-tl-lg bg-popover/80 text-foreground")} />}
    </div>
  );
  return (
    <article className={cn("relative flex flex-col overflow-clip rounded-lg", tones[tone], side ? "lg:flex-row" : "", className)}>
      {side ? (
        <>
          {text}
          {slot}
        </>
      ) : (
        <>
          {slot}
          {text}
        </>
      )}
    </article>
  );
}
