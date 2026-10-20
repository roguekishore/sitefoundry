import { ChartNoAxesColumn } from "lucide-react";
import { ReckonerV2Wordmark } from "./reckoner-v2-wordmark";

export const wordmarkSample = { name: "Caldergrove", tagline: "Credit partners" };

export default function Demo() {
  return (
    <div>
      <div className="bg-primary p-10 text-primary-foreground">
        <ReckonerV2Wordmark {...wordmarkSample} icon={<ChartNoAxesColumn strokeWidth={2.5} />} />
      </div>
      <div className="bg-background p-10 text-foreground">
        <ReckonerV2Wordmark {...wordmarkSample} icon={<ChartNoAxesColumn strokeWidth={2.5} />} iconClassName="text-glow" />
      </div>
    </div>
  );
}
