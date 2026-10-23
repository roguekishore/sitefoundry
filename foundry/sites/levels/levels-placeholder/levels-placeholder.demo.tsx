import { LevelsPlaceholder } from "./levels-placeholder";

export default function Demo() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-background p-8">
      <LevelsPlaceholder tone="film" className="aspect-[1.25] rounded-lg" label="App screens" />
      <LevelsPlaceholder tone="photo" className="aspect-[1.25] rounded-lg" label="Photo" />
      <LevelsPlaceholder tone="wash" className="aspect-[1.25] rounded-lg border border-border" label="Chart" />
    </div>
  );
}
