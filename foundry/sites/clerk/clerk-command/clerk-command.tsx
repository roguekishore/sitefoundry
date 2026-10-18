import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronRight, Copy } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ClerkCommandProps {
  /** label on the tab or pill (e.g. "Build with agents") */
  label: string;
  /** the text that gets copied; shown in the bar in the tab style */
  command: string;
  /** small round marks stacked before the label (agent or tool logos) */
  marks?: ReactNode[];
  /** screen-reader label of the copy button */
  copyLabel?: string;
  /** tab: dark folder tab over a command bar · pill: compact grey pill */
  variant?: "tab" | "pill";
  className?: string;
}

function Marks({ marks }: { marks: ReactNode[] }) {
  return (
    <span className="flex items-center">
      {marks.map((m, i) => (
        <span
          key={i}
          className={cn(
            "flex size-[1.125rem] items-center justify-center overflow-hidden rounded-full ring-2 ring-current [&_svg]:size-3",
            i > 0 && "-ml-1.5",
          )}
          style={{ zIndex: marks.length - i }}
        >
          {m}
        </span>
      ))}
    </span>
  );
}

export function ClerkCommand({ label, command, marks = [], copyLabel = "Copy", variant = "tab", className }: ClerkCommandProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = () => {
    navigator.clipboard?.writeText(command).then(() => setCopied(true), () => {});
  };
  const Icon = copied ? Check : Copy;

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={copy}
        aria-label={`${copyLabel}: ${command}`}
        className={cn(
          "inline-flex h-[1.875rem] items-center gap-2 rounded-full bg-muted pr-2.5 pl-1.5 text-[0.8125rem] font-medium text-foreground transition-colors duration-200 hover:bg-accent [&>span:first-child]:text-muted",
          className,
        )}
      >
        <Marks marks={marks} />
        {label}
        <Icon className="size-3.5 text-muted-foreground" strokeWidth={1.75} />
      </button>
    );
  }

  return (
    <div className={cn("w-full max-w-[27.25rem]", className)}>
      {/* the folder tab; its S-curved right edge is a small svg */}
      <div className="flex h-10 items-start">
        <div className="flex h-full items-start gap-2 rounded-tl-[0.875rem] bg-foreground pt-1.5 pl-2 text-[0.8125rem] font-medium text-background [&>span:first-child]:text-foreground">
          <Marks marks={marks} />
          <span className="leading-[1.125rem]">{label}</span>
        </div>
        <svg aria-hidden viewBox="0 0 24 40" preserveAspectRatio="none" className="h-10 w-6 fill-foreground">
          <path d="M0 0h2c8 0 9 4 12 12 3 8 4 16 10 16v12H0Z" />
        </svg>
      </div>
      <div className="relative -mt-3 flex h-[2.375rem] items-center gap-2 rounded-xl bg-background pr-1.5 pl-3 shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_6%,transparent),0_2px_6px_color-mix(in_oklab,var(--foreground)_6%,transparent),0_8px_20px_-6px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
        <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" strokeWidth={1.75} />
        <code className="min-w-0 flex-1 truncate font-mono text-[0.8125rem] text-foreground">{command}</code>
        <button
          type="button"
          onClick={copy}
          aria-label={copyLabel}
          className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
        >
          <Icon className="size-3.5" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
