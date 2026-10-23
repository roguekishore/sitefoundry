import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EzraButton } from "@foundry/ezra-button";
import { EzraPlaceholder } from "@foundry/ezra-placeholder";
import "./ezra-scan.css";

export interface EzraScanAction {
  label: string;
  href: string;
  /** a small icon before the label (e.g. a lucide Play) */
  icon?: ReactNode;
}

export interface EzraScanProps {
  /** tiny caps line above the heading */
  eyebrow: string;
  /** the serif heading */
  title: string;
  /** the line under it */
  body: string;
  /** one or two outline pills */
  actions: EzraScanAction[];
  /** the small dark card over the photo */
  result?: {
    /** its serif title */
    title: string;
    /** a tiny caps label */
    label: string;
    /** one or two lines */
    text: string;
  };
  /** the photo (an <img> filling its box, object-cover); a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Text panel on the left, a photo bleeding off the right edge, a dark result card on it. */
export function EzraScan({ eyebrow, title, body, actions, result, media, className }: EzraScanProps) {
  return (
    <section className={cn("bg-background pb-47.5 lg:pb-0", className)}>
      <div className="relative mt-12 bg-card text-card-foreground lg:mt-0">
        <div className="mx-auto box-content max-w-page lg:px-gutter">
          <div className="px-gutter pt-19 pb-6 lg:w-[36rem] lg:bg-muted lg:px-[2.125rem] lg:pt-[6.5rem] lg:pb-[6.25rem]">
            <p className="text-xs uppercase">{eyebrow}</p>
            <h2 className="mt-5 font-display text-[1.9rem] leading-[1.1] font-light tracking-[-0.01em] lg:mt-8 lg:text-[2.8rem]">
              {title}
            </h2>
            <p className="mt-5 text-base leading-[1.6] lg:mt-6 lg:max-w-[29rem]">{body}</p>
            <div className="mt-10 flex flex-col gap-4 lg:mt-12 lg:flex-row">
              {actions.map((action) => (
                <EzraButton key={action.label} href={action.href} variant="outline" icon={action.icon} className="w-full lg:w-57">
                  {action.label}
                </EzraButton>
              ))}
            </div>
          </div>
        </div>
        <div className="ezra-scan-media relative h-[23.4rem] bg-muted lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto">
          {media ?? <EzraPlaceholder className="absolute inset-0" />}
          {result && (
            <div className="dark absolute top-0 right-0 left-[3.7rem] bg-background p-6 text-foreground lg:top-[58%] lg:left-auto lg:w-[31.25rem]">
              <p className="font-display text-[1.375rem] leading-[1.2] font-light lg:text-[2.25rem]">{result.title}</p>
              <p className="mt-4 text-xs uppercase lg:mt-5">{result.label}</p>
              <p className="mt-3 text-sm leading-[1.6] lg:mt-4">{result.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
