import { HelionenergyPlaceholder } from "./helionenergy-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-5 bg-background p-8 sm:grid-cols-2">
      <HelionenergyPlaceholder zoom className="aspect-video rounded-lg" />
      <HelionenergyPlaceholder tone="film" className="aspect-[1.48] rounded-md" />
    </div>
  );
}
