import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { VercelHeading } from "@foundry/vercel-heading";
import { VercelPlaceholder } from "@foundry/vercel-placeholder";

export interface VercelCaseProps {
  /** the big heading over the window */
  title: string;
  /** width of the heading, which sets where it breaks (a Tailwind max-w class) */
  titleClassName?: string;
  /** the statement's first words, in ink (e.g. "Pagewright handles millions") */
  lead: string;
  /** the rest of the statement, in grey */
  rest: string;
  /** small grey label over the feature list */
  featuresLabel?: string;
  /** feature links */
  features: { label: string; href: string }[];
  /** start: window left, text right · end: text left, window right */
  align?: "start" | "end";
  /** the front window's content (screenshot, video); a grey window when empty */
  media?: ReactNode;
  /** a second window behind-left of the front one; a grey window when empty and layered */
  backMedia?: ReactNode;
  /** always: two windows on every width · phone: two on phones, one wide window on desktop · none: one window */
  layered?: "always" | "phone" | "none";
  /** screen-reader label for the window placeholders */
  mediaLabel?: string;
  className?: string;
}

/** Alternating customer story: heading, window(s), two-tone statement, feature links. */
export function VercelCase({
  title,
  titleClassName,
  lead,
  rest,
  featuresLabel,
  features,
  align = "start",
  media,
  backMedia,
  layered = "always",
  mediaLabel,
  className,
}: VercelCaseProps) {
  const end = align === "end";
  return (
    <section className={cn("bg-background px-gutter py-12 text-foreground lg:pt-[16.875rem] lg:pb-0", className)}>
      <div className="mx-auto grid max-w-page grid-cols-1 lg:grid-cols-12 lg:gap-x-6">
        <VercelHeading className={cn("max-w-[8.5em] lg:col-span-8", end && "lg:col-start-5", titleClassName)}>{title}</VercelHeading>

        {/* the window(s) */}
        <div
          className={cn(
            "relative mt-12 aspect-[1.4] lg:row-start-2 lg:mt-11 lg:aspect-[2.05]",
            end ? "lg:col-span-8 lg:col-start-5" : "lg:col-span-8 lg:col-start-1",
          )}
        >
          {layered !== "none" ? (
            <div className={cn("absolute top-[16%] bottom-0 left-0 w-1/2 lg:w-[45%]", layered === "phone" && "lg:hidden")}>
              <VercelPlaceholder label={mediaLabel}>{backMedia}</VercelPlaceholder>
            </div>
          ) : null}
          <div
            className={cn(
              "absolute inset-y-0 right-0",
              layered === "none" ? "left-0" : "w-3/4 lg:w-[58%]",
              layered === "phone" && "lg:w-full",
            )}
          >
            <VercelPlaceholder label={mediaLabel}>{media}</VercelPlaceholder>
          </div>
        </div>

        {/* the statement and features */}
        <div
          className={cn(
            "mt-14 lg:row-start-2 lg:mt-11 lg:self-center",
            end ? "lg:col-span-3 lg:col-start-1" : "lg:col-span-3 lg:col-start-10",
          )}
        >
          <p className="text-2xl font-[450] tracking-[-0.04em] text-muted-foreground">
            <span className="text-foreground">{lead}</span> {rest}
          </p>
          {features.length ? (
            <div className="mt-12 text-sm">
              {featuresLabel ? <p className="text-muted-foreground">{featuresLabel}</p> : null}
              <ul className="mt-1.5 flex flex-col gap-1.5">
                {features.map((feature) => (
                  <li key={feature.label}>
                    <a
                      href={feature.href}
                      className="font-medium tracking-[0.015em] text-foreground transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-muted-foreground motion-reduce:transition-none"
                    >
                      {feature.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
