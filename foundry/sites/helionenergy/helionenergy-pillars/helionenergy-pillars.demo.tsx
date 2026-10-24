import type { HelionenergyPillarsProps } from "./helionenergy-pillars";
import { HelionenergyPillars } from "./helionenergy-pillars";

export const pillarsSample: HelionenergyPillarsProps = {
  id: "pillars",
  title: ["Abundant, quiet, steady energy"],
  items: [
    {
      label: "Plentiful fuel",
      lead: "Its fuel is found in seawater.",
      body: "The hydrogen we burn is drawn from ordinary water or made inside the machine, so supply never hangs on mines, pipelines or borders.",
    },
    {
      label: "Safe by design",
      lead: "Nothing to melt down, nothing to bury.",
      body: "The reaction only runs while we feed it, so any fault simply stops it. Nothing goes up a stack and no long-lived spent fuel is left behind.",
    },
    {
      label: "Round the clock",
      lead: "Power that ignores the weather.",
      body: "A plant runs day and night through every season, giving the grid a steady clean baseline it can plan around.",
    },
  ],
};

export default function Demo() {
  return <HelionenergyPillars {...pillarsSample} />;
}
