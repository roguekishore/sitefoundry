import { cn } from "@foundry/foundry-utils";

export interface CfsSectionTitleProps {
  /** the title text */
  children: string;
  /** heading level; h2 by default */
  as?: "h1" | "h2" | "h3";
  /** show the orange tick from the page edge (wide screens only) */
  tick?: boolean;
  className?: string;
}

/** Big light title; on wide screens a 1px orange tick runs in from the page edge. */
export function CfsSectionTitle({ children, as: Tag = "h2", tick = true, className }: CfsSectionTitleProps) {
  return (
    <Tag
      className={cn(
        "relative max-w-[14em] font-display text-[clamp(2.125rem,4.383vw,3.945rem)] leading-[1.2] font-[350] text-balance",
        className,
      )}
    >
      {tick && (
        <span
          aria-hidden
          className="absolute top-[0.6em] right-[calc(100%+1.25rem)] hidden h-px w-[calc(var(--page-gutter)-1.25rem)] bg-primary lg:block"
        />
      )}
      {children}
    </Tag>
  );
}
