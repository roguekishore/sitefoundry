import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./warp-section.css";

export interface WarpSectionProps {
  /** anchor id, so sub-navigation links can jump here */
  id?: string;
  /** the small uppercase label above the title, typed in after a "#" */
  tag?: string;
  /** a status shown in brackets after the tag once it is typed, e.g. "online" */
  status?: string;
  /** what the brackets hold while the tag is being typed */
  pending?: string;
  /** the section title */
  title?: ReactNode;
  /** the line under the title */
  lead?: ReactNode;
  /** colour of the lead: muted ink, or the brand colour */
  leadTone?: "muted" | "brand";
  /** a button shown at the right of the heading (under it on phones) */
  action?: ReactNode;
  /** page: the page colour with a dotted margin · brand: a brand-coloured band with white dots */
  tone?: "page" | "brand";
  /** draw the black tabs at the window edges level with the heading (on by default with a tag) */
  marks?: boolean;
  /** the section's content, under the heading */
  children?: ReactNode;
  className?: string;
  /** classes for the content column (e.g. a different vertical padding) */
  contentClassName?: string;
}

/** The six column guides with ticks under the top hairline, drawn over a section. */
export function WarpGuides({ tone = "page", ticks = true }: { tone?: "page" | "brand"; ticks?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="relative mx-2 h-full max-w-page lg:mx-auto">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <span key={i} className="absolute inset-y-0 w-px" style={{ left: `calc(${(i / 6) * 100}% - ${i === 6 ? 1 : 0}px)` }}>
            <span className={cn("absolute inset-0", tone === "brand" ? "bg-primary-foreground/10" : "bg-foreground/[0.05]")} />
            {ticks && <span className={cn("absolute inset-x-0 top-0 h-[5px]", tone === "brand" ? "bg-primary-foreground/60" : "bg-foreground")} />}
          </span>
        ))}
      </div>
    </div>
  );
}

const dots = {
  page: "bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--foreground)_7%,transparent)_1.2px,transparent_0)]",
  brand: "bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--primary-foreground)_18%,transparent)_1.2px,transparent_0)]",
};

/** A Warp-style section: hairline + ticks on top, guides, typed tag, mono title, reveal on entry. */
export function WarpSection({
  id,
  tag,
  status,
  pending = ".",
  title,
  lead,
  leadTone = "muted",
  action,
  tone = "page",
  marks,
  children,
  className,
  contentClassName,
}: WarpSectionProps) {
  const brand = tone === "brand";
  const showMarks = marks ?? Boolean(tag);
  const hasHeading = Boolean(tag || title || lead || action);
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-16 overflow-x-clip border-t bg-[size:24px_24px]",
        brand ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground",
        dots[tone],
        className,
      )}
    >
      {!brand && <div aria-hidden className="absolute inset-y-0 right-2 left-2 mx-auto max-w-page bg-background lg:right-0 lg:left-0" />}
      <WarpGuides tone={tone} />
      {showMarks && (
        <>
          <span aria-hidden className={cn("absolute top-[3.25rem] left-0 h-6 w-3", brand ? "bg-primary-foreground" : "bg-foreground")} />
          <span aria-hidden className={cn("absolute top-[3.25rem] right-0 h-6 w-3", brand ? "bg-primary-foreground" : "bg-foreground")} />
        </>
      )}
      <div className={cn("relative mx-2 max-w-page px-4 py-section lg:mx-auto lg:px-6", contentClassName)}>
        <div className="warp-section-reveal">
          {hasHeading && (
            <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="min-w-0">
                {tag && (
                  <p className="mb-4 font-mono text-xs leading-none font-semibold tracking-[calc(0.11em_-_var(--warp-squeeze,0em))] uppercase lg:mb-[1.125rem]">
                    <span aria-hidden>#</span>{" "}
                    <span className="warp-section-tag-label" style={{ "--warp-tag-chars": tag.length } as CSSProperties}>
                      {tag}
                    </span>
                    {status && (
                      <span className={cn("ml-[0.6ch] font-normal", brand ? "text-primary-foreground/70" : "text-muted-foreground")}>
                        [<span aria-hidden className="warp-section-tag-pending">{pending}</span>
                        <span className="warp-section-tag-status" style={{ "--warp-tag-chars": status.length } as CSSProperties}>
                          {status}
                        </span>]
                      </span>
                    )}
                  </p>
                )}
                {title && (
                  <h2 className="max-w-[20ch] font-mono text-[2rem] leading-[3.5rem] font-[380] tracking-[calc(0.01em_-_var(--warp-squeeze,0em))] text-balance sm:max-w-none">
                    {title}
                  </h2>
                )}
                {lead && (
                  <p
                    className={cn(
                      "mt-2.5 max-w-[42rem] text-sm leading-[1.65] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] lg:max-w-none",
                      leadTone === "brand" ? "text-primary" : brand ? "text-primary-foreground/80" : "text-muted-foreground",
                    )}
                  >
                    {lead}
                  </p>
                )}
              </div>
              {action && <div className="shrink-0">{action}</div>}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
