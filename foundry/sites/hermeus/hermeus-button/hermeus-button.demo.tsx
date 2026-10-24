// Gallery only: both tones on their bands.
import { HermeusButton } from "./hermeus-button";

export default function Demo() {
  return (
    <div className="grid sm:grid-cols-2">
      <div className="bg-background p-gutter">
        <HermeusButton label="Read the story" href="#" />
      </div>
      <div className="bg-muted p-gutter">
        <HermeusButton label="See the aircraft" href="#" tone="secondary" />
      </div>
    </div>
  );
}
