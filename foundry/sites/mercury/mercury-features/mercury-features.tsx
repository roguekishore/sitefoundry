import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MercuryHeading } from "@foundry/mercury-heading";

export interface MercuryFeature {
  /** the short bold line under the picture */
  title: string;
  /** one or two sentences in the muted colour */
  text: ReactNode;
  /** the picture (art, mock UI, a photo) */
  media: ReactNode;
}

export interface MercuryFeaturesProps {
  /** the section heading, under a hairline */
  title?: string | string[];
  /** the features */
  items: MercuryFeature[];
  /** 2: wide 3:2 pictures · 3: tall 4:5 pictures */
  columns?: 2 | 3;
  /** draw the hairline above the heading */
  rule?: boolean;
  className?: string;
}

/**
 * Mercury's feature grid: a hairline and heading, then rounded picture panels each with a
 * bold title and a soft muted sentence under them. Two wide or three tall columns on
 * desktop; one column on phones.
 */
export function MercuryFeatures({ title, items, columns = 2, rule = true, className }: MercuryFeaturesProps) {
  return (
    <section className={cn("py-[calc(var(--section-y)*0.6)] lg:py-[calc(var(--section-y)*0.75)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {title && <MercuryHeading rule={rule} title={title} className="[&>h2]:max-w-[37rem]" />}
        <ul className={cn("grid gap-x-8 gap-y-8 lg:gap-y-12", title && "mt-8 lg:mt-10", columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2")}>
          {items.map((item) => (
            <li key={item.title}>
              <div className={cn("overflow-hidden rounded-xl", columns === 3 ? "aspect-[4/5]" : "aspect-[3/2]")}>{item.media}</div>
              <h3 className="mt-5 text-[0.875rem] font-[600] text-foreground lg:mt-6 lg:text-lg lg:leading-[1.35]">{item.title}</h3>
              <p className="mt-0.5 text-[0.875rem] leading-[1.4] text-muted-foreground lg:text-lg lg:leading-[1.35]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
