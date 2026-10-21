import { RollersArrowCard } from "./rollers-arrow-card";

export default function Demo() {
  return (
    <div className="grid gap-10 bg-background p-gutter text-foreground md:grid-cols-2">
      <RollersArrowCard title="Smooth-drum compactors" href="#" arrowLabel="See the compactors" />
      <RollersArrowCard
        title="Reading a compaction test before you book the roller"
        href="#"
        tag="Guide"
        size="md"
        arrowLabel="Read the guide"
      />
    </div>
  );
}
