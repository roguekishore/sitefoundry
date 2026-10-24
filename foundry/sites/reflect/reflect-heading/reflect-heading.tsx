import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectBadge } from "@foundry/reflect-badge";

export interface ReflectHeadingProps {
  /** the pill above the heading */
  eyebrow?: ReactNode;
  /** a small icon inside the pill */
  eyebrowIcon?: ReactNode;
  /** makes the pill a link */
  eyebrowHref?: string;
  /** the heading; "\n" breaks the line on desktop only */
  title: string;
  /** the muted paragraph under the heading; "\n" breaks the line on desktop only */
  lead?: string;
  /** h1 for the page's opening heading, h2 elsewhere */
  as?: "h1" | "h2";
  /** hero: 44→72px · section: 40→56px · display: 40→72px */
  size?: "hero" | "section" | "display";
  /** buttons (or anything) under the lead */
  children?: ReactNode;
  /** width of the lead, e.g. "max-w-[30rem]" */
  leadClassName?: string;
  className?: string;
}

const sizes = {
  hero: "text-[2.75rem]/[3.25rem] lg:text-[4.5rem]/[5rem]",
  section: "text-[2.5rem]/[3rem] lg:text-[3.5rem]/[4rem]",
  display: "text-[2.5rem]/[3rem] lg:text-[4.5rem]/[5rem]",
};

/** A desktop-only line break wherever the text has "\n". */
function lines(text: string) {
  return text.split("\n").map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <br className="max-lg:hidden" />}
      {i > 0 && " "}
      {part}
    </Fragment>
  ));
}

/** Badge, gradient heading, lead, actions: centred. */
export function ReflectHeading({
  eyebrow,
  eyebrowIcon,
  eyebrowHref,
  title,
  lead,
  as: Tag = "h2",
  size = "section",
  children,
  leadClassName,
  className,
}: ReflectHeadingProps) {
  return (
    <div className={cn("relative flex flex-col items-center text-center", className)}>
      {eyebrow && (
        <ReflectBadge icon={eyebrowIcon} href={eyebrowHref} className="mb-4">
          {eyebrow}
        </ReflectBadge>
      )}
      <Tag
        className={cn(
          sizes[size],
          "max-w-full bg-[linear-gradient(180deg,var(--foreground)_15%,color-mix(in_oklab,var(--foreground)_70%,transparent))] bg-clip-text pb-1 font-display font-[560] text-balance text-transparent",
        )}
      >
        {lines(title)}
      </Tag>
      {lead && (
        <p className={cn("mt-4 max-w-[34rem] text-base/6 text-pretty text-muted-foreground", leadClassName)}>
          {lines(lead)}
        </p>
      )}
      {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>}
    </div>
  );
}
