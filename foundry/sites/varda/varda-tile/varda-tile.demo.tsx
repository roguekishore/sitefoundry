// Gallery only: the three tones side by side. The company is made up.
import { VardaTile } from "./varda-tile";

export default function Demo() {
  return (
    <div className="grid bg-background sm:grid-cols-3">
      <VardaTile tone="navy" size="sm" eyebrow="Defense" title="A returning test vehicle for high-speed flight research" href="#" />
      <VardaTile tone="light" size="sm" eyebrow="Pharma" title="Grow purer crystal forms you can't reach on the ground" href="#" />
      <VardaTile tone="orange" size="sm" eyebrow="Purpose" title="Making low orbit a place where things get made" href="#" />
    </div>
  );
}
