import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AatArchitectenLineLink } from "@foundry/aat-architecten-line-link";
import "./aat-architecten-projects.css";

export interface AatArchitectenProject {
  /** the project's name (ink) */
  title: string;
  /** its kind or sector (grey, under the title) */
  category: string;
  href: string;
  /** portrait: 4 of 12 columns from 1024px; landscape: 8 columns, the same height */
  shape: "portrait" | "landscape";
  /** the photo (an <img> with object-cover fills it); empty: a muted placeholder */
  media?: ReactNode;
}

export interface AatArchitectenProjectsProps {
  /** the grey section head */
  heading: string;
  /** label of the link to every project */
  allLabel: string;
  allHref: string;
  projects: AatArchitectenProject[];
  id?: string;
  className?: string;
}

export function AatArchitectenProjects({ heading, allLabel, allHref, projects, id, className }: AatArchitectenProjectsProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page grid-cols-1 px-gutter lg:grid-cols-12 lg:gap-x-10">
        <h2 className="text-[clamp(20px,1.3vw+0.8rem,32px)] leading-[1.25] font-normal text-muted-foreground lg:col-span-6 lg:row-start-1">
          {heading}
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-y-[3.75rem] lg:col-span-12 lg:row-start-2 lg:mt-32 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-40">
          {projects.map((project) => (
            <li
              key={project.href + project.title}
              className={cn("aat-architecten-projects-card", project.shape === "landscape" ? "lg:col-span-8" : "lg:col-span-4")}
            >
              <a href={project.href} className="group block">
                <div className="overflow-clip bg-muted">
                  {/* the photo swells slowly on hover, inside its fixed frame */}
                  <div
                    className={cn(
                      "transition-[scale] duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04] motion-reduce:transition-none [&>img]:size-full [&>img]:object-cover",
                      project.shape === "landscape" ? "aspect-[1.585]" : "aspect-[0.76]",
                    )}
                  >
                    {project.media}
                  </div>
                </div>
                <p className="mt-5 text-xl leading-[1.375]">{project.title}</p>
                <p className="text-xl leading-[1.375] text-muted-foreground">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>

        <AatArchitectenLineLink href={allHref} className="mt-[5.5rem] lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:mt-0 lg:self-start lg:justify-self-end">
          {allLabel}
        </AatArchitectenLineLink>
      </div>
    </section>
  );
}
