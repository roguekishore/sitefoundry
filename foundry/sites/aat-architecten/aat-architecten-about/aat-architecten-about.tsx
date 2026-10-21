import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AatArchitectenLineLink } from "@foundry/aat-architecten-line-link";
import { AatArchitectenLineReveal } from "@foundry/aat-architecten-line-reveal";
import "./aat-architecten-about.css";

export interface AatArchitectenAboutProps {
  /** the credo, one paragraph; its first line is indented by the photo's width */
  text: string;
  /** label of the link under the paragraph */
  linkLabel: string;
  linkHref: string;
  /** the small portrait photo (an <img> with object-cover fills it); empty: a muted placeholder */
  media?: ReactNode;
  id?: string;
  className?: string;
}

export function AatArchitectenAbout({ text, linkLabel, linkHref, media, id, className }: AatArchitectenAboutProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="aat-architecten-about-fade aspect-[0.72] w-[7.125rem] overflow-clip bg-muted lg:w-[11.5rem] [&>img]:size-full [&>img]:object-cover">
          {media}
        </div>

        <AatArchitectenLineReveal
          text={text}
          className="mt-11 max-w-[56rem] indent-[7.125rem] text-[clamp(20px,1.3vw+0.8rem,32px)] leading-[1.375] lg:mt-[7.5rem] lg:indent-[11.5rem] lg:leading-[1.25]"
        />

        <AatArchitectenLineLink href={linkHref} className="aat-architecten-about-fade mt-12 w-[10rem] lg:mt-[7.5rem] lg:w-[14.375rem]">
          {linkLabel}
        </AatArchitectenLineLink>
      </div>
    </section>
  );
}
