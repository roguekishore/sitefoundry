import { StructureengineeringMedia } from "./structureengineering-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-10 sm:grid-cols-2">
      <StructureengineeringMedia className="aspect-[618/388]" />
      <StructureengineeringMedia tone="dark" veil className="aspect-[618/388]" />
    </div>
  );
}
