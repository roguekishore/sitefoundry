import { FlaskConical } from "lucide-react";
import { GrowthbookV2Eyebrow } from "./growthbook-v2-eyebrow";

export default function Demo() {
  return (
    <div className="bg-background p-8">
      <GrowthbookV2Eyebrow icon={<FlaskConical />}>Experiments</GrowthbookV2Eyebrow>
    </div>
  );
}
