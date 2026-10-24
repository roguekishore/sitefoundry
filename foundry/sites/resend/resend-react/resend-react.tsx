import type { ReactNode } from "react";
import { FileCode, Monitor, Moon, Smartphone, Sun } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ResendButton } from "@foundry/resend-button";
import { ResendCode } from "@foundry/resend-code";
import { ResendHeading } from "@foundry/resend-heading";
import { ResendPlaceholder } from "@foundry/resend-placeholder";

export interface ResendReactProps {
  /** the title; a list sets its desktop line breaks */
  title: string | string[];
  /** the lead; a list sets its desktop line breaks */
  text: string | string[];
  /** fills the icon slot above the title; empty shows a placeholder tile */
  media?: ReactNode;
  /** the graphite button */
  primary: { label: string; href: string };
  /** the text link beside it */
  secondary?: { label: string; href: string };
  /** template files in the side list; the open one is highlighted */
  files: { name: string; open?: boolean }[];
  /** the part of the open file shown in the code pane */
  code: string;
  /** number of the code's first line */
  startLine?: number;
  /** the rendered email beside the code; empty shows a placeholder */
  preview?: ReactNode;
  className?: string;
}

function FileBadge() {
  return (
    <span aria-hidden className="flex size-4 shrink-0 items-center justify-center rounded-[3px] bg-accent text-muted-foreground [&_svg]:size-3">
      <FileCode strokeWidth={2} />
    </span>
  );
}

export function ResendReact({ title, text, media, primary, secondary, files, code, startLine = 1, preview, className }: ResendReactProps) {
  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ResendHeading tile media={media} title={title} text={text} />
        <div className="mt-8 flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          <ResendButton href={primary.href} chevron className="w-full max-w-[16.25rem] lg:w-auto">
            {primary.label}
          </ResendButton>
          {secondary && (
            <ResendButton href={secondary.href} variant="ghost" chevron>
              {secondary.label}
            </ResendButton>
          )}
        </div>

        <div className="mt-14 overflow-clip rounded-2xl border border-border lg:mt-20">
          <div className="flex h-12 items-center border-b border-border px-4 max-lg:border-b-0">
            <span aria-hidden className="flex gap-2">
              <span className="size-2.5 rounded-full bg-destructive" />
              <span className="size-2.5 rounded-full bg-chart-3" />
              <span className="size-2.5 rounded-full bg-chart-2" />
            </span>
            <span aria-hidden className="ml-auto hidden gap-2 text-muted-foreground lg:flex [&_svg]:size-3.5">
              <span className="flex rounded-md border border-border">
                <span className="flex size-8 items-center justify-center rounded-md bg-accent text-foreground"><Monitor strokeWidth={1.75} /></span>
                <span className="flex size-8 items-center justify-center"><Smartphone strokeWidth={1.75} /></span>
              </span>
              <span className="flex rounded-md border border-border">
                <span className="flex size-8 items-center justify-center rounded-md bg-accent text-foreground"><Moon strokeWidth={1.75} /></span>
                <span className="flex size-8 items-center justify-center"><Sun strokeWidth={1.75} /></span>
              </span>
            </span>
          </div>

          <div className="lg:grid lg:h-[40.6rem] lg:grid-cols-[12.5rem_minmax(0,1fr)_minmax(0,1fr)]">
            <ul className="flex gap-6 overflow-x-auto border-b border-border px-4 py-3 [scrollbar-width:none] lg:flex-col lg:gap-0 lg:border-r lg:border-b-0 lg:py-2">
              {files.map((f) => (
                <li key={f.name} className={cn("flex h-10 shrink-0 items-center gap-2 text-sm whitespace-nowrap lg:text-[0.9375rem]", f.open ? "text-chart-1" : "text-foreground/85")}>
                  <FileBadge />
                  {f.name}
                </li>
              ))}
            </ul>
            <div className="hidden overflow-clip px-4 lg:block">
              <ResendCode code={code} startLine={startLine} size="sm" className="-mt-2 overflow-hidden" />
            </div>
            <div className="relative h-[32.5rem] lg:h-full">
              {preview ?? <ResendPlaceholder className="absolute inset-0 rounded-none border-0 lg:inset-y-2 lg:right-2" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
