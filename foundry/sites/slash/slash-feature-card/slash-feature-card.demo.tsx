import { SlashFeatureCard } from "./slash-feature-card";

export default function Demo() {
  return (
    <div className="grid gap-3 bg-background p-8 lg:grid-cols-2">
      <SlashFeatureCard title="Accounts and Treasury" body="Free domestic transfers on Plus, a yield on idle cash, and deposit cover spread across partner banks." note="2" />
      <SlashFeatureCard layout="inline" title="Open API." body="Every account comes with read and write keys, so the dull parts can run themselves." />
    </div>
  );
}
