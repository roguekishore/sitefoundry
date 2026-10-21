import { Paperclip } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface StoreyarchitectureNoteCardProps {
  /** the mono heading at the top-left, one string per line */
  heading: string[];
  /** the small wordmark at the top-right */
  brand: string;
  /** the line written on the first rule */
  note?: string;
  /** the three mono labels along the bottom */
  labels: string[];
  /** how many ruled lines */
  rules?: number;
  /** show the paperclip over the top-left edge */
  clip?: boolean;
  className?: string;
}

export function StoreyarchitectureNoteCard({ heading, brand, note, labels, rules = 6, clip = true, className }: StoreyarchitectureNoteCardProps) {
  return (
    <div className={cn("relative w-[22em] bg-card font-[450] px-[2.2em] pt-[2.4em] pb-[1.6em] text-card-foreground", className)}>
      {clip && (
        <Paperclip
          aria-hidden
          strokeWidth={1.25}
          className="absolute top-[-1.8em] left-[1.2em] size-[4em] -rotate-[42deg] text-foreground/70"
        />
      )}
      <div className="flex items-start justify-between gap-[1em]">
        <p className="font-mono text-[0.8em] leading-none tracking-[-0.06em] uppercase">
          {heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <span className="text-[1.1em] leading-none font-medium tracking-[-0.02em]">{brand}</span>
      </div>
      <div className="mt-[2.4em]">
        {Array.from({ length: rules }, (_, i) => (
          <div key={i} className="flex h-[2.15em] items-end border-b border-card-foreground/70">
            {i === 0 && note && <span className="pb-[0.15em] text-[1.15em] leading-none italic">{note}</span>}
          </div>
        ))}
      </div>
      <div className="mt-[2.4em] flex justify-between font-mono text-[0.8em] leading-none tracking-[-0.06em] uppercase">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
