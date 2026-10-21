import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { M3PgLink } from "@foundry/m3-pg-link";
import { M3PgMedia } from "@foundry/m3-pg-media";

export interface M3PgProject {
  /** the project's name */
  title: string;
  /** one or two sentences about it */
  body: string;
  /** the link to the project page */
  link: { label: string; href: string };
  /** a photo of it; empty: a placeholder */
  media?: ReactNode;
}

export interface M3PgProjectsProps {
  /** the small heading of the first column */
  heading: string;
  /** the intro under it */
  intro: string;
  /** the link to every project */
  allLink: { label: string; href: string };
  /** the projects; numbered 1, 2, 3… in order */
  projects: M3PgProject[];
  /** which project starts open (0 = the first) */
  initialOpen?: number;
  /** an id for in-page links */
  id?: string;
  className?: string;
}

// The original's accordion timing: background-color and flex over 0.25s, ease.
const swing = "transition-[flex,background-color,color] duration-250 ease-[ease] motion-reduce:transition-none";

export function M3PgProjects({ heading, intro, allLink, projects, initialOpen = 0, id, className }: M3PgProjectsProps) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <section id={id} className={cn("relative z-10 bg-background px-gutter pt-10 pb-24 text-foreground lg:pt-20 lg:pb-36", className)}>
      <div className="mx-auto max-w-page lg:grid lg:grid-cols-4 lg:gap-x-5">
        <div className="flex flex-col">
          <h2 className="text-xl leading-7 tracking-[-0.02em] lg:mt-2.5 lg:text-2xl lg:leading-7">{heading}</h2>
          <p className="mt-3 text-base leading-6 tracking-[-0.01em] lg:pr-4">{intro}</p>
          <M3PgLink href={allLink.href} className="mt-auto hidden text-2xl leading-7 lg:block">
            {allLink.label}
          </M3PgLink>
        </div>

        {/* phones and tablets: a vertical list */}
        <div className="mt-8 border border-border lg:hidden">
          {projects.map((project, i) =>
            i === open ? (
              <div key={project.title} className={cn("p-4", i > 0 && "border-t border-border")}>
                <a href={project.link.href} className="group/media block">
                  <M3PgMedia media={project.media} zoom className="aspect-[1.54] w-full md:aspect-[1.77]" />
                </a>
                <h3 className="mt-6 text-2xl leading-8 font-semibold tracking-[-0.02em] text-highlight">{project.title}</h3>
                <p className="mt-3 text-base leading-6 tracking-[-0.01em]">{project.body}</p>
                <M3PgLink href={project.link.href} className="mt-3 inline-block text-base leading-6">
                  {project.link.label}
                </M3PgLink>
                <p className="mt-6 text-[2.25rem] leading-none text-muted-foreground">{i + 1}</p>
              </div>
            ) : (
              <button
                key={project.title}
                type="button"
                aria-expanded={false}
                onClick={() => setOpen(i)}
                className={cn(
                  "flex h-14 w-full items-center gap-3 border-t border-border px-4 text-left hover:bg-foreground hover:text-background",
                  swing,
                )}
              >
                <span className="w-6 text-[2.25rem] leading-none text-muted-foreground">{i + 1}</span>
                <span className="flex-1 text-xl leading-6 font-semibold tracking-[-0.02em]">{project.title}</span>
                <Plus className="size-6 text-muted-foreground" strokeWidth={1.5} aria-hidden />
              </button>
            ),
          )}
        </div>
        <M3PgLink href={allLink.href} className="mt-6 inline-block text-base leading-6 lg:hidden">
          {allLink.label}
        </M3PgLink>

        {/* desktop: open panel beside narrow columns */}
        <div className="hidden h-[42.5rem] border border-border lg:col-span-3 lg:flex">
          {projects.map((project, i) => {
            const isOpen = i === open;
            return (
              <div
                key={project.title}
                className={cn(
                  "relative min-w-0 overflow-clip",
                  i > 0 && "border-l border-border",
                  isOpen ? "flex-[1_1_0%]" : "flex-[0_0_4.125rem] hover:bg-foreground hover:text-background",
                  swing,
                )}
              >
                {isOpen ? (
                  <div className="flex h-full min-w-[22rem] flex-col p-5">
                    <a href={project.link.href} className="group/media block">
                      <M3PgMedia media={project.media} zoom className="aspect-[1.77] w-full" />
                    </a>
                    <h3 className="mt-8 text-2xl leading-7 font-semibold tracking-[-0.02em] text-highlight">{project.title}</h3>
                    <p className="mt-5 max-w-[42rem] text-base leading-6 tracking-[-0.01em]">{project.body}</p>
                    <M3PgLink href={project.link.href} className="mt-3 inline-block self-start text-lg leading-6">
                      {project.link.label}
                    </M3PgLink>
                    <p className="mt-auto text-[3.75rem] leading-none text-muted-foreground">{i + 1}</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    aria-expanded={false}
                    aria-label={project.title}
                    onClick={() => setOpen(i)}
                    className="flex h-full w-full flex-col items-center px-1 pt-7 pb-5"
                  >
                    <Plus className="size-10 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                    <span className="mt-auto rotate-180 text-2xl leading-7 font-semibold tracking-[-0.02em] whitespace-nowrap [writing-mode:vertical-rl]">
                      {project.title}
                    </span>
                    <span className="mt-4 text-[3.75rem] leading-none text-muted-foreground">{i + 1}</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
