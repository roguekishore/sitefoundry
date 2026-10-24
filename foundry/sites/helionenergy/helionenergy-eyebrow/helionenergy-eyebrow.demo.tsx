import { HelionenergyEyebrow } from "./helionenergy-eyebrow";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8 text-foreground">
      <HelionenergyEyebrow>From fuel to the grid</HelionenergyEyebrow>
      <HelionenergyEyebrow bracket>Plentiful fuel</HelionenergyEyebrow>
    </div>
  );
}
