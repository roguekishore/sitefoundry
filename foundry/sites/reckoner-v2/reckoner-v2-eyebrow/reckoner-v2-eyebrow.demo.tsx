import { ReckonerV2Eyebrow } from "./reckoner-v2-eyebrow";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-10 text-foreground">
      <ReckonerV2Eyebrow label="Approach" />
      <ReckonerV2Eyebrow label="Who we are" />
    </div>
  );
}
