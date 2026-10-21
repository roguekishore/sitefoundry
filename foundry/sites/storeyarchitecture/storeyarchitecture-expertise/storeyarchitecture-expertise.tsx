import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureRise } from "@foundry/storeyarchitecture-rise";
import "./storeyarchitecture-expertise.css";

export interface StoreyarchitectureExpertiseItem {
  /** the row title */
  title: string;
  /** the paragraph in the right half */
  text: string;
  /** the small photo (object-cover); empty shows a placeholder */
  media?: ReactNode;
}

export interface StoreyarchitectureExpertiseProps {
  /** the huge heading */
  heading: string;
  /** the short paragraph at the right of the heading */
  intro: string;
  /** the numbered rows (numbered 1, 2, 3… in order) */
  items: StoreyarchitectureExpertiseItem[];
  className?: string;
}

export function StoreyarchitectureExpertise({ heading, intro, items, className }: StoreyarchitectureExpertiseProps) {
  return (
    <section className={cn("overflow-clip bg-background pt-section font-[450] text-foreground", className)}>
      <div className="grid grid-cols-6 gap-x-gutter px-gutter tracking-[-0.02em] sm:grid-cols-12">
        <StoreyarchitectureRise as="h2" className="col-span-6 text-[12vw] leading-none sm:text-[7vw]">
          {heading}
        </StoreyarchitectureRise>
        <StoreyarchitectureRise
          step={1}
          className="col-span-6 mt-[10vw] text-[4.3vw] leading-[1.2] sm:col-span-4 sm:col-start-9 sm:mt-[2vw] sm:text-[1.6vw]"
        >
          <p>{intro}</p>
        </StoreyarchitectureRise>
      </div>

      <ol className="mt-[30vw] sm:mt-[19.5vw]">
        {items.map((item, i) => (
          <li key={item.title} className="storeyarchitecture-expertise-row relative border-t border-border bg-background">
            <div className="storeyarchitecture-expertise-sink grid grid-cols-6 gap-x-gutter px-gutter pt-[6vw] pb-[5vw] tracking-[-0.02em] sm:min-h-[39.6vw] sm:grid-cols-12 sm:grid-rows-[auto_1fr] sm:pt-[1.6vw] sm:pb-[5vw]">
              <span className="col-start-1 row-start-1 self-center text-[8vw] leading-none sm:row-start-2 sm:-mb-[2.1vw] sm:self-end sm:text-[15vw] sm:text-muted">
                {i + 1}
              </span>
              <h3 className="col-span-5 col-start-2 row-start-1 text-[8vw] leading-none sm:col-span-6 sm:col-start-1 sm:text-[2.2vw]">
                {item.title}
              </h3>
              <p className="col-span-5 col-start-2 row-start-2 mt-[22vw] text-[4.3vw] leading-[1.2] sm:col-start-7 sm:row-start-1 sm:mt-0 sm:text-[1.6vw]">
                {item.text}
              </p>
              <div className="col-span-5 col-start-2 row-start-3 mt-[10vw] aspect-[2/1] overflow-clip bg-muted sm:col-span-3 sm:col-start-7 sm:row-start-2 sm:mt-[11vw] sm:aspect-[5/3] sm:self-end [&>*]:size-full [&>*]:object-cover">
                {item.media}
              </div>
            </div>
            <div aria-hidden className="storeyarchitecture-expertise-veil pointer-events-none absolute inset-0 bg-foreground" />
          </li>
        ))}
      </ol>
    </section>
  );
}
