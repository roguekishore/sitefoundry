import { cn } from "@foundry/foundry-utils";

export interface StructureengineeringTag {
  /** the tag's text (set in uppercase mono) */
  label: string;
  /** where it goes */
  href: string;
}

export interface StructureengineeringTagsProps {
  /** the tags, in order */
  tags: StructureengineeringTag[];
  /** ink: ink outline on paper · media: light outline over a dark photo */
  tone?: "ink" | "media";
  className?: string;
}

// A tight row of small outlined mono tags (4px apart, 5px corners) that fill on hover.
export function StructureengineeringTags({ tags, tone = "ink", className }: StructureengineeringTagsProps) {
  const toneClass =
    tone === "ink"
      ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
      : "border-card text-card hover:bg-card hover:text-card-foreground dark:border-card-foreground dark:text-card-foreground dark:hover:bg-card-foreground dark:hover:text-card";
  return (
    <ul className={cn("flex flex-wrap gap-1", className)}>
      {tags.map((tag) => (
        <li key={tag.label}>
          <a
            href={tag.href}
            className={cn(
              "block rounded-lg border px-1.5 py-px font-mono text-base leading-snug uppercase transition-colors duration-250 ease-out motion-reduce:transition-none",
              toneClass,
            )}
          >
            {tag.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
