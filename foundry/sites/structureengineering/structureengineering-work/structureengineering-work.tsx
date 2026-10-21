import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StructureengineeringButton } from "@foundry/structureengineering-button";
import { StructureengineeringMedia } from "@foundry/structureengineering-media";
import { StructureengineeringTags, type StructureengineeringTag } from "@foundry/structureengineering-tags";
import "./structureengineering-work.css";

export interface StructureengineeringProject {
  /** the project's name (bold uppercase) */
  title: string;
  /** where its row goes */
  href: string;
  /** its image. Empty: a placeholder */
  media?: ReactNode;
}

export interface StructureengineeringWorkProps {
  /** the huge heading at the top left */
  heading: string;
  /** the sans paragraph at the bottom left */
  lead: string;
  /** the sector tags under it */
  tags: StructureengineeringTag[];
  /** the button under the tags */
  cta: { label: string; href: string };
  /** the label of the box that appears over a hovered project's image */
  viewLabel: string;
  /** the projects, in order */
  projects: StructureengineeringProject[];
  className?: string;
}

// A two-column work index on paper. Left: a huge heading at the top and, at the bottom, a lead,
// tags and a button. A hairline divides it from a column of project rows (name at the left,
// a near-square image at the right) that slides up through a fixed window as you scroll past;
// on phones the rows become a sideways track that slides left. A hovered row turns ink with a
// "view" box over its image.
export function StructureengineeringWork({ heading, lead, tags, cta, viewLabel, projects, className }: StructureengineeringWorkProps) {
  return (
    <section className={cn("structureengineering-work bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page grid-cols-[minmax(0,1fr)] gap-16 px-gutter py-section lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-0 lg:py-16 xl:grid-cols-[34rem_40.25rem]">
        <div className="flex flex-col lg:pr-10">
          <h2 className="font-display text-[3.7rem] leading-none font-medium tracking-[-0.04em] lg:text-[5.1rem]">{heading}</h2>
          <div className="mt-10 lg:mt-auto lg:pb-8">
            <p className="max-w-[30rem] text-xl leading-[1.25] font-medium tracking-tight">{lead}</p>
            <StructureengineeringTags tags={tags} className="mt-6" />
            <StructureengineeringButton href={cta.href} className="mt-12">
              {cta.label}
            </StructureengineeringButton>
          </div>
        </div>

        <div className="structureengineering-work-window -mx-gutter px-gutter lg:mx-0 lg:border-l lg:border-border lg:px-0 lg:pl-4">
          <ul className="structureengineering-work-track flex w-max gap-4 lg:w-auto lg:flex-col lg:gap-0">
            {projects.map((project) => (
              <li key={project.title} className="w-[calc(100vw_-_2*var(--page-gutter))] shrink-0 lg:w-auto lg:border-t lg:border-border">
                <a
                  href={project.href}
                  className="group/secard flex flex-col gap-4 transition-colors duration-250 ease-out motion-reduce:transition-none lg:flex-row lg:justify-between lg:p-4 lg:hover:bg-foreground lg:hover:text-background"
                >
                  <span className="text-xl leading-[1.25] font-semibold tracking-tight uppercase lg:max-w-[14rem]">{project.title}</span>
                  <span className="relative block">
                    <StructureengineeringMedia media={project.media} className="aspect-[2/1] w-full lg:aspect-[323/306] lg:w-[20.2rem]" />
                    <StructureengineeringButton
                      decorative
                      variant="solid"
                      className="absolute top-1/2 left-1/2 hidden h-16 w-44 -translate-x-1/2 -translate-y-1/2 border-transparent opacity-0 transition-opacity duration-250 group-hover/secard:opacity-100 lg:flex"
                    >
                      {viewLabel}
                    </StructureengineeringButton>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
