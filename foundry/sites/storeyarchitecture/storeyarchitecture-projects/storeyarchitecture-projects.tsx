import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureFrame } from "@foundry/storeyarchitecture-frame";
import { StoreyarchitectureNoteCard, type StoreyarchitectureNoteCardProps } from "@foundry/storeyarchitecture-note-card";

export interface StoreyarchitectureProject {
  /** where the photo leads */
  href: string;
  /** the photo (object-cover); empty shows a placeholder */
  media?: ReactNode;
  /** accessible name of the link */
  name: string;
}

export interface StoreyarchitectureProjectsProps {
  /** three projects: the tall left photo, the top-right one and the bottom-right one */
  projects: StoreyarchitectureProject[];
  /** the label that follows the pointer over a photo */
  hoverLabel: string;
  /** the paper note at the bottom-left (desktop) */
  note?: StoreyarchitectureNoteCardProps;
  className?: string;
}

// Phone ratio first, then the desktop frame's ratio.
const slots = [
  { ratio: "358 / 390", ratioWide: "690 / 1008" },
  { ratio: "358 / 312", ratioWide: "690 / 576" },
  { ratio: "3 / 2", ratioWide: "3 / 2" },
];

export function StoreyarchitectureProjects({ projects, hoverLabel, note, className }: StoreyarchitectureProjectsProps) {
  const [tall, top, bottom] = projects;
  const frame = (project: StoreyarchitectureProject | undefined, i: number) =>
    project && (
      <a href={project.href} aria-label={project.name} className="block">
        <StoreyarchitectureFrame media={project.media} ratio={slots[i].ratio} ratioWide={slots[i].ratioWide} label={hoverLabel} />
      </a>
    );

  return (
    <section className={cn("grid gap-gutter bg-background p-gutter text-foreground sm:grid-cols-2", className)}>
      <div className="flex flex-col">
        {frame(tall, 0)}
        {note && <StoreyarchitectureNoteCard {...note} className="mt-[30vw] mb-[8vw] ml-[3vw] hidden text-[1vw] sm:block" />}
      </div>
      <div className="flex flex-col gap-[30vw] sm:justify-between sm:gap-gutter">
        {frame(top, 1)}
        {frame(bottom, 2)}
      </div>
    </section>
  );
}
