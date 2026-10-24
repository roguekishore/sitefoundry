// Sample content (gallery only).
import { HadrianPlaceholder } from "./hadrian-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-8 sm:grid-cols-2">
      <HadrianPlaceholder className="aspect-video" />
      <HadrianPlaceholder tone="muted" className="aspect-video" />
    </div>
  );
}
