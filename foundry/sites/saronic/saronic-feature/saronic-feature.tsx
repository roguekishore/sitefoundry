import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SaronicPlaceholder } from "@foundry/saronic-placeholder";
import { SaronicSectionHeading } from "@foundry/saronic-section-heading";

export interface SaronicFeatureProps {
  /** the mono caption above the title */
  eyebrow?: ReactNode;
  /** the section title */
  title: ReactNode;
  /** the large paragraph under the title */
  lead?: ReactNode;
  /** a button at the right of the title (under it on phones) */
  action?: ReactNode;
  /** the 16:9 video or photo under the text; empty it is a placeholder */
  media?: ReactNode;
  /** light: on the page's paper · dark: a slate band */
  tone?: "light" | "dark";
  /** the section's anchor id */
  id?: string;
  className?: string;
}

/**
 * One idea, one film: a section heading (caption, big title, large lead, lime button at the
 * right) over a full-width 16:9 frame with an 8px radius. On the paper or on a slate band.
 */
export function SaronicFeature({ eyebrow, title, lead, action, media, tone = "light", id, className }: SaronicFeatureProps) {
  return (
    <section
      id={id}
      className={cn(
        "bg-background px-gutter py-section text-foreground lg:py-[calc(var(--section-y)*2)]",
        tone === "dark" && "dark",
        className,
      )}
    >
      <div className="mx-auto max-w-page">
        <SaronicSectionHeading eyebrow={eyebrow} title={title} lead={lead} action={action} />
        <SaronicPlaceholder media={media} className="mt-16 aspect-video rounded-xl" />
      </div>
    </section>
  );
}
