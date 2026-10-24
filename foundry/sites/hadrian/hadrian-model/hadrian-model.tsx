import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HadrianEyebrow } from "@foundry/hadrian-eyebrow";
import { HadrianPlaceholder } from "@foundry/hadrian-placeholder";

export interface HadrianModelItem {
  /** the offer's title */
  title: string;
  /** one or two sentences about it */
  text: string;
}

export interface HadrianModelProps {
  /** anchor id */
  id?: string;
  /** small gold label above the heading */
  eyebrow: string;
  /** the band's heading */
  title: string;
  /** the offers (three fill the row) */
  items: HadrianModelItem[];
  /** full-bleed background media (video or image, object-cover); a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Full-bleed veiled media band with a heading and three ruled offers. */
export function HadrianModel({ id, eyebrow, title, items, media, className }: HadrianModelProps) {
  return (
    <section
      id={id}
      className={cn(
        "dark relative isolate flex min-h-svh flex-col overflow-clip bg-background py-24 text-foreground lg:min-h-0 lg:py-36",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
        {media ?? <HadrianPlaceholder tone="muted" />}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-background/60" />
      <div className="mx-auto w-full max-w-page px-gutter">
        <HadrianEyebrow label={eyebrow} />
        <h2 className="mt-1.5 text-[1.875rem] leading-none tracking-[-0.03em] lg:mt-2 lg:text-[4rem] [word-spacing:-0.06em]">{title}</h2>
        <ul className="mt-14 grid gap-[3.25rem] lg:mt-[8.5rem] lg:grid-cols-3 lg:gap-4">
          {items.map((item) => (
            <li key={item.title}>
              <h3 className="border-b-2 border-foreground pb-3 text-[1.875rem] leading-none tracking-[-0.03em] [word-spacing:-0.06em] lg:pb-3.5 lg:text-[2.25rem]">
                {item.title}
              </h3>
              <p className="mt-6 text-lg leading-[1.2] tracking-[-0.02em] lg:mt-7 lg:pr-4 lg:text-xl lg:leading-[1.07]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
