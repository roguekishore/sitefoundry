import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FormenergyButton } from "@foundry/formenergy-button";
import { FormenergyHeading } from "@foundry/formenergy-heading";
import { FormenergyPlaceholder } from "@foundry/formenergy-placeholder";

export interface FormenergySplitProps {
  /** anchor id */
  id?: string;
  /** the title (shown uppercase) */
  title: string;
  /** the paragraph */
  text: string;
  /** the outlined button */
  action?: { label: string; href: string };
  /** a photo for the media side (cover); a placeholder when empty */
  media?: ReactNode;
  /** which side the photo sits on from desktop width (phones always show it first) */
  mediaSide?: "left" | "right";
  /** grey: the pale secondary band · white: the page colour */
  tone?: "grey" | "white";
  /** on phones, put the title's rule above it (for long titles) */
  ruleAboveOnPhone?: boolean;
  className?: string;
}

/** Photo-and-text band with a ruled uppercase title and an outlined button. */
export function FormenergySplit({
  id,
  title,
  text,
  action,
  media,
  mediaSide = "left",
  tone = "grey",
  ruleAboveOnPhone = false,
  className,
}: FormenergySplitProps) {
  const right = mediaSide === "right";
  return (
    <section
      id={id}
      className={cn(
        "py-section text-foreground",
        tone === "grey" ? "bg-secondary" : "bg-background",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-page items-center px-gutter lg:grid-cols-[49.2fr_50.8fr]",
          right && "lg:grid-cols-[50.8fr_49.2fr]",
        )}
      >
        <div
          className={cn(
            "aspect-[331/210] overflow-clip rounded-[6px] lg:aspect-[628/500] [&>img]:size-full [&>img]:object-cover",
            right && "lg:order-2",
          )}
        >
          {media ?? <FormenergyPlaceholder />}
        </div>
        <div className={cn("mt-11 lg:mt-0", right ? "lg:order-1 lg:pr-[6.125rem]" : "lg:pl-[5.75rem]")}>
          <FormenergyHeading title={title} ruleAboveOnPhone={ruleAboveOnPhone} />
          <p className="mt-6 text-base leading-[1.4] font-light lg:mt-[3.4rem] lg:text-xl lg:leading-[1.4]">{text}</p>
          {action && (
            <FormenergyButton label={action.label} href={action.href} className="mt-[2.3rem] w-full lg:w-auto" />
          )}
        </div>
      </div>
    </section>
  );
}
