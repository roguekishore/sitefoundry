import { NewhaloMedia } from "./newhalo-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-3">
      <NewhaloMedia className="aspect-square rounded-lg" />
      <NewhaloMedia className="aspect-[1.81] rounded-lg" />
      <div className="dark bg-background p-4">
        <NewhaloMedia tone="glow" className="aspect-[0.85]" />
      </div>
    </div>
  );
}
