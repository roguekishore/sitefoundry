import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { ReckonerWordmark, type ReckonerWordmarkProps } from "./reckoner-wordmark";

export const wordmarkSample: ReckonerWordmarkProps = {
  name: "Wexmoor",
  descriptor: "Credit partners",
  icon: <ChartNoAxesColumnIncreasing strokeWidth={2.5} />,
  href: "#",
};

export default function Demo() {
  return (
    <div className="flex flex-col gap-0 text-foreground">
      <div className="bg-background p-10">
        <ReckonerWordmark {...wordmarkSample} tone="highlight" />
      </div>
      <div className="dark bg-background p-10 text-foreground">
        <ReckonerWordmark {...wordmarkSample} />
      </div>
    </div>
  );
}
