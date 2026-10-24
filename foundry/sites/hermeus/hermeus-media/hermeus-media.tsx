import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HermeusMediaProps {
  /** a real image or video; it is stretched to cover the slot. Empty: a plain placeholder */
  media?: ReactNode;
  /** what the slot will show, for screen readers (only used while it is empty) */
  label?: string;
  /**
   * the empty look: "flat" a grey surface (photos), "deep" a darker grey (film),
   * "soft" a soft light on the band's own colour (cut-out renders)
   */
  look?: "flat" | "deep" | "soft";
  className?: string;
}

const looks = {
  flat: "bg-foreground/12",
  deep: "bg-foreground/40",
  soft: "bg-[radial-gradient(55%_65%_at_62%_52%,color-mix(in_oklab,var(--glow)_75%,transparent),transparent_72%)]",
};

/** A square-cornered media slot; empty, a token-grey placeholder. */
export function HermeusMedia({ media, label, look = "flat", className }: HermeusMediaProps) {
  return (
    <div
      role={media ? undefined : "img"}
      aria-label={media ? undefined : label}
      className={cn(
        "relative overflow-clip",
        !media && looks[look],
        "[&>img]:absolute [&>img]:inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:absolute [&>video]:inset-0 [&>video]:size-full [&>video]:object-cover",
        className,
      )}
    >
      {media}
    </div>
  );
}
