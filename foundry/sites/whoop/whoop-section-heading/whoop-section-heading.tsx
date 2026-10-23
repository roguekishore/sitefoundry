import { cn } from "@foundry/foundry-utils";

export interface WhoopSectionHeadingProps {
  /** the big heading */
  heading: string;
  /** the paragraph (leave out for a heading alone) */
  body?: string;
  className?: string;
}

/** A display heading, with its paragraph beside it on desktop. */
export function WhoopSectionHeading({ heading, body, className }: WhoopSectionHeadingProps) {
  return (
    <div className={cn("lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20", className)}>
      <h2 className="max-w-[13ch] font-display text-[3.125rem] leading-none font-normal tracking-[-0.03em] lg:text-[4.5rem]">
        {heading}
      </h2>
      {body && <p className="mt-8 max-w-[36rem] text-base leading-[1.6] lg:mt-0 lg:pb-2 lg:text-lg">{body}</p>}
    </div>
  );
}
