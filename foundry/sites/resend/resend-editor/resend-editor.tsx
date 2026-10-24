import type { ReactNode } from "react";
import { Clock } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ResendHeading } from "@foundry/resend-heading";
import { ResendPlaceholder } from "@foundry/resend-placeholder";

export interface ResendEditorField {
  label: string;
  value: string;
  /** shows the value as a rounded chip (an audience) */
  chip?: boolean;
  /** an icon inside the chip */
  icon?: ReactNode;
}

export interface ResendEditorProps {
  /** the title; a list sets its desktop line breaks */
  title: string | string[];
  /** the lead; a list sets its desktop line breaks */
  text: string | string[];
  /** fills the icon slot above the title; empty shows a placeholder tile */
  media?: ReactNode;
  /** the toolbar: styles button (label + icon), the draft's name, when it was saved, test and send labels */
  toolbar: { styles: string; stylesIcon?: ReactNode; name: string; saved: string; test: string; send: string };
  /** the rows at the top of the message (From, To, Subject) */
  fields: ResendEditorField[];
  /** the banner image at the top of the message; empty shows a placeholder */
  banner?: ReactNode;
  /** the hint on the empty page */
  hint: string;
  className?: string;
}

export function ResendEditor({ title, text, media, toolbar, fields, banner, hint, className }: ResendEditorProps) {
  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ResendHeading tile media={media} title={title} text={text} />

        <div className="relative mx-4 mt-16 lg:mx-auto lg:max-w-[69.25rem]">
          {/* the frame: background and hairline fade out downwards; the sheet above it doesn't */}
          <div aria-hidden className="absolute inset-0 rounded-lg border border-border bg-card/60 mask-b-from-45% mask-b-to-80%" />
          <span aria-hidden className="absolute -top-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-highlight to-transparent" />
          <div className="relative flex h-16 items-center gap-3 px-6 lg:border-b lg:border-border">
            <span className="flex h-8 items-center gap-2 rounded-md border border-border bg-accent px-2.5 text-sm text-muted-foreground [&_svg]:size-4">
              {toolbar.stylesIcon}
              {toolbar.styles}
            </span>
            <span className="hidden flex-1 text-center text-sm text-muted-foreground lg:block">{toolbar.name}</span>
            <span className="ml-auto flex items-center gap-4 lg:ml-0">
              <span className="hidden items-center gap-2 text-sm text-muted-foreground lg:flex">
                <Clock aria-hidden className="size-4" strokeWidth={1.75} />
                {toolbar.saved}
              </span>
              <span className="flex h-8 items-center rounded-md border border-border bg-background px-3 text-sm text-foreground">{toolbar.test}</span>
              <span className="flex h-8 items-center rounded-md bg-primary px-3 text-sm text-primary-foreground">{toolbar.send}</span>
            </span>
          </div>

          <div className="relative lg:px-[13.75rem] lg:pt-10">
            <div className="overflow-clip rounded-t-lg border border-b-0 border-border bg-background">
              <dl className="px-8">
                {fields.map((f, i) => (
                  <div key={f.label} className={cn("flex h-[3.3rem] items-center", i < fields.length - 1 && "border-b border-border")}>
                    <dt className="w-24 shrink-0 text-sm text-muted-foreground">{f.label}</dt>
                    <dd className="min-w-0 truncate text-sm text-foreground">
                      {f.chip ? (
                        <span className="-ml-1 inline-flex h-7 items-center gap-1.5 rounded-full bg-accent px-2.5 [&_svg]:size-4">
                          {f.icon}
                          {f.value}
                        </span>
                      ) : (
                        f.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="aspect-[662/214]">{banner ?? <ResendPlaceholder className="size-full rounded-none border-x-0" />}</div>
            <div className="h-[26.75rem] bg-foreground px-12 pt-6 lg:h-[19.7rem]">
              <p className="text-base text-background/40">{hint}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
