import { HalodentalSonnetHeading } from "./halodental-sonnet-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-8 text-foreground">
      <HalodentalSonnetHeading title={["The Digital", "Mirror"]} />
      <HalodentalSonnetHeading size="giant" className="text-primary" title={["Rebranding", "dentistry"]} />
      <HalodentalSonnetHeading size="card" as="h3" title="A small clinic wins a design award" />
    </div>
  );
}
