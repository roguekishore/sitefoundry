import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SlashPlaceholder } from "@foundry/slash-placeholder";

export interface SlashFeatureCardProps {
  /** the feature's name: a heading line ("stacked") or a white lead-in to the text ("inline") */
  title: string;
  /** the grey description */
  body: string;
  /** a small footnote mark after the title or text ("2") */
  note?: string;
  /** the art above the copy; a soft wash stands in when empty */
  media?: ReactNode;
  /** small extra content just above the copy (e.g. tier chips) */
  extra?: ReactNode;
  /** stacked: semibold title over 16px text; inline: one 18px paragraph with a white lead-in */
  layout?: "stacked" | "inline";
  /** height of the art area on desktop, as a CSS length (e.g. "17rem"); phones use `mediaHeightSm` */
  mediaHeight?: string;
  /** height of the art area on phones */
  mediaHeightSm?: string;
  /** top: art above the copy; behind: art fills the card and the copy sits over its lower left (the card is then at least mediaHeight tall) */
  mediaPosition?: "top" | "behind";
  /** inline styles for the card (e.g. a custom property the parent's classes read) */
  style?: CSSProperties;
  className?: string;
}

/** A dark slate card: art area on top (or behind), copy at the bottom. */
export function SlashFeatureCard({
  title,
  body,
  note,
  media,
  extra,
  layout = "stacked",
  mediaHeight = "17rem",
  mediaHeightSm = "13rem",
  mediaPosition = "top",
  style,
  className,
}: SlashFeatureCardProps) {
  const behind = mediaPosition === "behind";
  const sup = note ? <sup className="ml-0.5 text-[0.6em]">{note}</sup> : null;
  return (
    <article
      style={{ ["--slash-card-media" as string]: mediaHeight, ["--slash-card-media-sm" as string]: mediaHeightSm, ...style }}
      className={cn(
        "relative flex flex-col overflow-clip rounded-lg border border-border bg-linear-[201deg] from-card from-14% to-popover",
        behind && "min-h-(--slash-card-media-sm) lg:min-h-(--slash-card-media)",
        className,
      )}
    >
      <div className={cn("shrink-0", behind ? "absolute inset-0" : "relative h-(--slash-card-media-sm) lg:h-(--slash-card-media)")}>
        {media ?? <SlashPlaceholder tone="card" className="absolute inset-0" />}
      </div>
      <div className={cn("relative mt-auto px-5 pb-6 lg:px-8 lg:pb-7", layout === "inline" && "lg:px-6 lg:pb-6")}>
        {extra}
        {layout === "stacked" ? (
          <>
            <h3 className="text-base font-semibold tracking-[-0.02em] text-foreground lg:text-lg">{title}</h3>
            <p className="mt-2 max-w-[26rem] text-[0.9375rem] leading-[1.4] tracking-[-0.02em] text-foreground/70 lg:text-base">
              {body}
              {sup}
            </p>
          </>
        ) : (
          <p className="text-[0.9375rem] leading-[1.4] tracking-[-0.01em] text-foreground/70 lg:text-lg lg:leading-[1.375]">
            <strong className="font-medium text-foreground">
              {title}
              {sup}
            </strong>{" "}
            {body}
          </p>
        )}
      </div>
    </article>
  );
}
