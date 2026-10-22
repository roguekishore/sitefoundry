import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ApexspaceButton, type ApexspaceButtonProps } from "@foundry/apexspace-button";
import { ApexspaceHeading } from "@foundry/apexspace-heading";

export interface ApexspaceMissionProps {
  /** the sub-head; a \n starts a new line */
  title: string;
  /** the paragraphs under it */
  paragraphs: string[];
  /** the yellow button at the end */
  cta: Pick<ApexspaceButtonProps, "label" | "href">;
  /** the photo on the left (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

/** Edge-bleeding photo left, statement + paragraphs + button right; both flush to the bottom. */
export function ApexspaceMission({ title, paragraphs, cta, media, className }: ApexspaceMissionProps) {
  return (
    <section className={cn("bg-background pt-section text-foreground", className)}>
      <div className="flex flex-col lg:flex-row-reverse lg:justify-end lg:gap-[9.45%]">
        <div className="px-gutter lg:max-w-[45rem] lg:pl-0">
          <ApexspaceHeading size="sub" text={title} />
          <div className="mt-10 flex flex-col gap-5 text-[length:clamp(0.875rem,0.82rem_+_0.19vw,1rem)] leading-[1.4]">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ApexspaceButton {...cta} className="mt-[2.75rem] lg:mt-10" />
        </div>
        <div className="mt-[4.25rem] aspect-[390/281] overflow-clip lg:mt-0 lg:aspect-auto lg:min-h-[29.875rem] lg:w-[34.75%] lg:shrink-0 [&>*]:size-full [&>img]:object-cover [&>video]:object-cover">
          {media ?? <div className="bg-muted" />}
        </div>
      </div>
    </section>
  );
}
