import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";
import { ParsleyhealthPlaceholder } from "@foundry/parsleyhealth-placeholder";

export interface ParsleyhealthSplitProps {
  /** the title */
  title: string;
  /** small capitals above the title */
  eyebrow?: string;
  /** the paragraph (or paragraphs) */
  body: string | string[];
  /** the pill under the text */
  action?: { label: string; href: string };
  /** pill colour: secondary (sage, as on the original) or primary (forest) */
  actionVariant?: "primary" | "secondary";
  /** the square photo (an img, sized to fill); a placeholder when empty */
  media?: ReactNode;
  /** screen-reader label of the placeholder */
  mediaLabel?: string;
  /** which side the photo sits on from lg up */
  mediaSide?: "left" | "right";
  className?: string;
}

/** Text beside a square photo; photo first on phones. */
export function ParsleyhealthSplit({
  title,
  eyebrow,
  body,
  action,
  actionVariant = "secondary",
  media,
  mediaLabel,
  mediaSide = "right",
  className,
}: ParsleyhealthSplitProps) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <section className={cn("bg-background px-gutter py-[calc(var(--section-y)*0.55)] lg:py-[calc(var(--section-y)*1.28)]", className)}>
      <div className="mx-auto grid max-w-page items-center gap-6 lg:grid-cols-2 lg:gap-16">
        <div
          className={cn(
            "aspect-square w-full overflow-clip [&>img]:size-full [&>img]:object-cover lg:max-w-[31.5rem]",
            mediaSide === "right" ? "lg:col-start-2 lg:row-start-1 lg:justify-self-end" : "lg:col-start-1 lg:row-start-1",
          )}
        >
          {media ?? <ParsleyhealthPlaceholder label={mediaLabel} />}
        </div>
        <div className={cn("text-center lg:row-start-1 lg:text-left", mediaSide === "right" ? "lg:col-start-1" : "lg:col-start-2")}>
          <ParsleyhealthHeading title={title} eyebrow={eyebrow} align="phone-center" titleClassName="lg:max-w-[23rem]" />
          <div className="mx-auto mt-6 flex max-w-[22rem] flex-col gap-6 text-[1.1rem] leading-[1.5] text-foreground lg:mx-0 lg:mt-9 lg:max-w-[28rem] lg:text-[1.2375rem] lg:leading-8">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {action ? (
            <ParsleyhealthButton href={action.href} variant={actionVariant} arrow block="phone" className="mt-10">
              {action.label}
            </ParsleyhealthButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
