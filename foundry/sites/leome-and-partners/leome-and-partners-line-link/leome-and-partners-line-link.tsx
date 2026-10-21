import { LeomeAndPartnersRollText } from "@foundry/leome-and-partners-roll-text";
import { cn } from "@foundry/foundry-utils";

export interface LeomeAndPartnersLineLinkProps {
  /** the link's label */
  label: string;
  href: string;
  className?: string;
}

/**
 * A 24px text link sitting on a 1px underline (the input colour, half-strength primary in
 * the original); its characters roll up on hover.
 */
export function LeomeAndPartnersLineLink({ label, href, className }: LeomeAndPartnersLineLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/roll inline-block border-b border-input px-0.5 pb-1 font-sans text-2xl font-medium tracking-[-0.01em] text-foreground",
        className,
      )}
    >
      <LeomeAndPartnersRollText text={label} />
    </a>
  );
}
