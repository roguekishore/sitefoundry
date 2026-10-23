import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthButton } from "@foundry/functionhealth-button";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";
import { FunctionhealthMedia } from "@foundry/functionhealth-media";

/** A sentence whose first words are in bold terracotta. */
export interface FunctionhealthLead {
  strong: string;
  rest: string;
}

export interface FunctionhealthLocationsProps {
  title: HeadingPart[];
  text: string;
  /** the form */
  form: { label: string; placeholder: string; submit: string; action?: string };
  /** tall card: caption, the big figure, and the chart slot */
  results: { caption: FunctionhealthLead; figure: string; chart?: ReactNode };
  /** map card: the big figure, caption below it, and the map slot */
  sites: { figure: string; caption: FunctionhealthLead; map?: ReactNode };
  /** wide card: an icon (any node), then the sentence */
  visit: { icon?: ReactNode; text: FunctionhealthLead };
  className?: string;
}

function Lead({ text }: { text: FunctionhealthLead }) {
  return (
    <>
      <strong className="font-semibold text-primary">{text.strong}</strong> {text.rest}
    </>
  );
}

const card = "rounded-xl border border-border bg-background";
const figureClass = "font-sans text-[clamp(3rem,1.5038vw+2.6466rem,4rem)] leading-none font-light text-muted-foreground";

export function FunctionhealthLocations({ title, text, form, results, sites, visit, className }: FunctionhealthLocationsProps) {
  return (
    <section id="scans" className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page grid-cols-[minmax(0,1fr)] gap-10 px-gutter lg:grid-cols-[minmax(0,1fr)_minmax(0,42rem)] lg:gap-[4.5rem]">
        <div className="lg:pt-0">
          <FunctionhealthHeading title={title} align="start" />
          <p className="mt-6 max-w-[34rem] text-[clamp(1.125rem,0.188vw+1.0808rem,1.25rem)] leading-[1.4] font-light">{text}</p>
          <form action={form.action} className="mt-8 lg:mt-12">
            <label htmlFor="functionhealth-zip" className="block text-base leading-none font-semibold">
              {form.label}
            </label>
            <div className="mt-4 flex gap-3">
              <input
                id="functionhealth-zip"
                name="zip"
                inputMode="numeric"
                placeholder={form.placeholder}
                className="h-12 min-w-0 flex-1 rounded-full border border-input bg-background px-6 text-base font-light transition-colors duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-primary lg:max-w-60"
              />
              <FunctionhealthButton type="submit" className="h-[3.125rem] px-7">
                {form.submit}
              </FunctionhealthButton>
            </div>
          </form>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:items-stretch">
          <div className={cn(card, "flex flex-col p-6 lg:row-span-2")}>
            <p className="text-sm leading-snug font-light">
              <Lead text={results.caption} />
            </p>
            <div className="mt-4 flex items-end gap-4 lg:mt-8 lg:flex-1 lg:flex-col lg:items-stretch lg:gap-6">
              <p className={cn(figureClass, "lg:mt-4")}>{results.figure}</p>
              <FunctionhealthMedia media={results.chart} ratio="h-36 flex-1 lg:h-auto lg:min-h-48 lg:w-full lg:flex-none" rounded="rounded-md" className="lg:mt-auto" />
            </div>
          </div>

          <div className={cn(card, "relative flex min-h-[12.5rem] flex-col p-6 lg:min-h-[18rem]")}>
            <FunctionhealthMedia
              media={sites.map}
              ratio="absolute right-6 bottom-6 h-28 w-1/2 lg:top-6 lg:right-6 lg:bottom-auto lg:h-36 lg:w-[calc(100%-3rem)]"
              rounded="rounded-md"
            />
            <p className="relative order-1 text-sm leading-snug font-light lg:order-3 lg:mt-3">
              <Lead text={sites.caption} />
            </p>
            <p className={cn(figureClass, "relative order-2 mt-auto pt-8 lg:mt-0 lg:pt-[8.5rem]")}>{sites.figure}</p>
          </div>

          <div className={cn(card, "flex items-center gap-4 p-6 lg:col-start-2")}>
            <span className="shrink-0 text-primary [&_svg]:size-12 [&_svg]:stroke-[1.25]">{visit.icon}</span>
            <p className="text-sm leading-snug font-light">
              <Lead text={visit.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
