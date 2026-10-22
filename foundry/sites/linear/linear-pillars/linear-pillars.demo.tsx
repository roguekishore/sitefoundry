// Sample content lives here (gallery only); the page reuses it.
import { LinearPillars, type LinearPillarsProps } from "./linear-pillars";

export const pillarsSample: LinearPillarsProps = {
  pillars: [
    {
      figure: "Fig 0.1",
      title: "Opinionated by design",
      text: "Built around the habits of teams that ship well, so good process comes without the paperwork.",
      mediaLabel: "Illustration: stacked layers",
    },
    {
      figure: "Fig 0.2",
      title: "Agents on the team",
      text: "Hand work to agents the way you would to a colleague. From first draft to merged change.",
      mediaLabel: "Illustration: a cluster of blocks",
    },
    {
      figure: "Fig 0.3",
      title: "Fast at every step",
      text: "Less clutter, fewer clicks and instant search keep the whole team in a steady flow.",
      mediaLabel: "Illustration: a row of rising plates",
    },
  ],
};

export default function Demo() {
  return <LinearPillars {...pillarsSample} className="py-section" />;
}
