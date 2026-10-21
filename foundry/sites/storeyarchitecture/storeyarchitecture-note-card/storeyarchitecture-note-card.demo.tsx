import { StoreyarchitectureNoteCard, type StoreyarchitectureNoteCardProps } from "./storeyarchitecture-note-card";

export const noteSample: StoreyarchitectureNoteCardProps = {
  heading: ["A word from", "Ashlar"],
  brand: "Ashlar",
  note: "Quiet rooms, long lives",
  labels: ["AS / FRM", "With thanks", "ashlar.studio"],
};

export default function Demo() {
  return (
    <div className="flex flex-wrap items-start gap-16 bg-background p-16 text-foreground">
      <StoreyarchitectureNoteCard {...noteSample} className="text-[14px]" />
      <StoreyarchitectureNoteCard {...noteSample} note={undefined} className="-rotate-[4deg] text-[11px]" />
    </div>
  );
}
