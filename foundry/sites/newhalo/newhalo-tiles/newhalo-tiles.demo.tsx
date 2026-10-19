import { NewhaloTiles } from "./newhalo-tiles";

export default function Demo() {
  return (
    <div className="max-w-md bg-background p-8 text-foreground">
      <NewhaloTiles items={[{ label: "Ordering" }, { label: "Waiting list" }, { label: "Batteries" }, { label: "The instrument" }, { label: "Companion app" }]} />
    </div>
  );
}
