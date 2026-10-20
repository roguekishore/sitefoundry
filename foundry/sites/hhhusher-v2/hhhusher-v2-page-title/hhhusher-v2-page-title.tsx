import { cn } from "@foundry/foundry-utils";
import { HhhusherV2RevealText } from "@foundry/hhhusher-v2-reveal";

export interface HhhusherV2PageTitleProps {
  /** the page's title */
  title: string;
  className?: string;
}

export function HhhusherV2PageTitle({ title, className }: HhhusherV2PageTitleProps) {
  return (
    <section className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto flex max-w-page items-end px-gutter pt-[4.6rem] pb-3 lg:h-[27.25rem] lg:pt-0 lg:pb-[2.6rem]">
        <HhhusherV2RevealText as="h1" text={title} className="font-display text-[2.6rem] leading-[1] font-[570] tracking-[-0.02em] lg:text-[4.75rem]" />
      </div>
    </section>
  );
}
