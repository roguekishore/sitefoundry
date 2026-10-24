// Gallery only: the three empty tones (the two washes inside a dark scope, as the blocks use them).
import { CastelionPlaceholder } from "./castelion-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-gutter sm:grid-cols-3">
      <CastelionPlaceholder label="Post picture" className="aspect-square rounded-lg" />
      <CastelionPlaceholder tone="dusk" label="Range film" className="dark aspect-square rounded-lg" />
      <CastelionPlaceholder tone="sky" label="Launch photo" className="dark aspect-square rounded-lg" />
    </div>
  );
}
