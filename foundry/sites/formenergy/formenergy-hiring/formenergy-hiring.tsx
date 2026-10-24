import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FormenergyButton } from "@foundry/formenergy-button";
import { FormenergyHeading } from "@foundry/formenergy-heading";
import { FormenergyPlaceholder } from "@foundry/formenergy-placeholder";

export interface FormenergyHiringProps {
  /** anchor id */
  id?: string;
  /** the title (shown uppercase) */
  title: string;
  /** the paragraph */
  text: string;
  /** the outlined button */
  action?: { label: string; href: string };
  /** a photo filling the band (cover); a dark placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Full-bleed darkened photo band with a hiring call to action on the left. */
export function FormenergyHiring({ id, title, text, action, media, className }: FormenergyHiringProps) {
  return (
    <section
      id={id}
      className={cn(
        "dark relative isolate overflow-clip bg-background py-section text-foreground lg:min-h-[37.3rem]",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 [&>img]:size-full [&>img]:object-cover">
        {media ?? <FormenergyPlaceholder tone="dark" />}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-[141deg] from-background/75 to-background/30" />
      <div className="mx-auto max-w-page px-gutter">
        <div className="lg:max-w-[39rem]">
          <FormenergyHeading title={title} />
          <p className="mt-7 text-base leading-[1.4] font-light lg:mt-11 lg:text-xl lg:leading-[1.4]">{text}</p>
          {action && (
            <FormenergyButton label={action.label} href={action.href} className="mt-[2.3rem] w-full lg:w-auto" />
          )}
        </div>
      </div>
    </section>
  );
}
