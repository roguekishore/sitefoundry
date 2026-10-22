import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ApexspaceButton, type ApexspaceButtonProps } from "@foundry/apexspace-button";
import { ApexspaceHeading } from "@foundry/apexspace-heading";

export interface ApexspaceFactoryProps {
  /** the title; a \n starts a new line */
  title: string;
  /** a small icon at the gutter beside the paragraphs */
  icon: ReactNode;
  /** the paragraphs */
  paragraphs: string[];
  /** the yellow button under them */
  cta: Pick<ApexspaceButtonProps, "label" | "href">;
  /** the photo filling the right half (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

/** Text half with indented paragraphs; a full-height photo half. */
export function ApexspaceFactory({ title, icon, paragraphs, cta, media, className }: ApexspaceFactoryProps) {
  return (
    <section className={cn("grid bg-background text-foreground lg:grid-cols-2", className)}>
      <div className="px-gutter py-section">
        <ApexspaceHeading text={title} />
        <div className="mt-8 grid grid-cols-[2.875rem_minmax(0,1fr)] lg:mt-12 lg:grid-cols-[4.75rem_minmax(0,30rem)]">
          <span aria-hidden className="mt-1 flex size-2.5 items-center [&>svg]:size-full">
            {icon}
          </span>
          <div>
            <div className="flex flex-col gap-5 text-[length:clamp(0.875rem,0.82rem_+_0.19vw,1rem)] leading-[1.4]">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ApexspaceButton {...cta} className="mt-10" />
          </div>
        </div>
      </div>
      <div className="aspect-square overflow-clip lg:aspect-auto lg:min-h-[51.5rem] [&>*]:size-full [&>img]:object-cover [&>video]:object-cover">{media ?? <div className="bg-muted" />}</div>
    </section>
  );
}
