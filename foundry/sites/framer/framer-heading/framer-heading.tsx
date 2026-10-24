import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface FramerHeadingProps {
  /** the text; a "\n" marks a line break used on desktop only */
  children: string;
  /** the element: h1 for the page title, h2 for sections */
  as?: "h1" | "h2";
  /** title: 36px → 54px · section: 28px → 44px */
  size?: "title" | "section";
  className?: string;
}

const sizes = {
  title: "text-4xl leading-[1.02] tracking-[-0.025em] lg:text-[3.375rem]",
  section: "text-[1.75rem] leading-[1.1] tracking-[-0.025em] lg:text-[2.75rem]",
};

/** Splits on "\n" and breaks there only from lg up, so phone lines wrap naturally. */
export function DesktopLines({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              <br className="max-lg:hidden" />{" "}
            </>
          )}
          {line}
        </Fragment>
      ))}
    </>
  );
}

/** The site's tight geometric heading. */
export function FramerHeading({ children, as: Tag = "h2", size = "section", className }: FramerHeadingProps) {
  return (
    <Tag className={cn("font-display font-[450] text-balance text-foreground", sizes[size], className)}>
      <DesktopLines text={children} />
    </Tag>
  );
}

export interface FramerSectionHeadProps {
  /** the section title; "\n" breaks on desktop only */
  title: string;
  /** one line of copy under the title */
  subtitle?: string;
  /** small actions (buttons, a count) at the bottom right; below the title on phones */
  actions?: ReactNode;
  /** keep the actions beside the title on phones too (the showcase head does this) */
  actionsInline?: boolean;
  /** extra classes for the subtitle (e.g. its measure) */
  subtitleClassName?: string;
  className?: string;
}

/** Heading on the left, small actions pinned to its bottom right. */
export function FramerSectionHead({ title, subtitle, actions, actionsInline, subtitleClassName, className }: FramerSectionHeadProps) {
  return (
    <div
      className={cn(
        "flex gap-4 lg:flex-row lg:items-end lg:justify-between",
        actionsInline ? "flex-row items-end justify-between" : "flex-col items-start",
        className,
      )}
    >
      <div>
        <FramerHeading>{title}</FramerHeading>
        {subtitle && (
          <p
            className={cn(
              "mt-3 max-w-[26rem] text-lg leading-[1.35] tracking-[-0.01em] text-muted-foreground lg:mt-4",
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-4">{actions}</div>}
    </div>
  );
}
