// Sample content lives here (gallery only).
import { HalodentalOpusHeading } from "./halodental-opus-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <HalodentalOpusHeading title="Seen in a new light" />
      <HalodentalOpusHeading title="Brighter checkups" size="card" as="h3" />
      <div className="dark rounded-lg bg-card p-6">
        <HalodentalOpusHeading title="Making the chair a happier place" size="mega" gradient />
      </div>
    </div>
  );
}
