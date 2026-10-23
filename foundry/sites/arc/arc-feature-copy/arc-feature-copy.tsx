import { cn } from "@foundry/foundry-utils";
import { ArcBadge } from "@foundry/arc-badge";

export interface ArcFeatureCopyProps {
  /** the pill above the title, e.g. the product name */
  badge: string;
  /** the feature's headline */
  title: string;
  /** one or two sentences under it */
  body: string;
  /** the medium-weight link at the foot, e.g. "Learn more" */
  linkLabel: string;
  className?: string;
}

/** Badge, title, body and a bold text link: the copy stack inside Arc's feature cards and panels. */
export function ArcFeatureCopy({ badge, title, body, linkLabel, className }: ArcFeatureCopyProps) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <ArcBadge label={badge} />
      <h3 className="mt-4 font-display text-[1.4125rem]/[1.2] font-normal tracking-[-0.015em] text-foreground lg:text-[1.875rem]/[1.15]">
        {title}
      </h3>
      <p className="mt-4 max-w-[32rem] text-[0.884rem]/[1.5] text-muted-foreground lg:mt-5 lg:text-base/6">{body}</p>
      <span className="mt-auto pt-6 text-[0.884rem] font-medium text-foreground lg:pt-8 lg:text-base">{linkLabel}</span>
    </div>
  );
}
