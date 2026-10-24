// Gallery only: an empty scene slot at the careers photo's proportions, and an empty render.
import { ImpulsespacePlaceholder } from "./impulsespace-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-gutter sm:grid-cols-2">
      <ImpulsespacePlaceholder label="Team photo" className="aspect-square rounded-lg" />
      <div className="grid place-items-center rounded-lg bg-card p-10">
        <ImpulsespacePlaceholder kind="render" label="Vehicle render" className="aspect-square w-4/5" />
      </div>
    </div>
  );
}
