import { cn } from "@foundry/foundry-utils";

export interface HhhusherPageTitleProps {
  /** the page's title */
  title: string;
  className?: string;
}

/**
 * A dark band that opens an inner page (terms, privacy): it sits under the fixed header and
 * holds just the page title, large, at its bottom-left. Short on phones, about 436px on desktop.
 */
export function HhhusherPageTitle({ title, className }: HhhusherPageTitleProps) {
  return (
    <section className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[4.1rem] pb-[0.9rem] lg:pt-[19rem] lg:pb-[2.6rem]">
        <h1 className="font-display text-[2.6rem] leading-[1] font-medium tracking-[-0.02em] lg:text-[4.75rem] lg:leading-[1]">{title}</h1>
      </div>
    </section>
  );
}
