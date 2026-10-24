import type { CursorFrontierProps } from "./cursor-frontier";
import { CursorFrontier } from "./cursor-frontier";

export const frontierSample: CursorFrontierProps = {
  title: "Keep pace with the edge",
  cards: [
    {
      title: "Pick the right model each time",
      description: "Switch between the leading models from every major lab, plus our own tuned ones.",
      link: { label: "Compare models", href: "#", arrow: "up-right" },
      mediaLabel: "A model picker open over a prompt box",
    },
    {
      title: "Run a fleet in the background",
      description: "Start many agents at once on big, slow jobs that take hours or even days.",
      link: { label: "Read about hosted agents", href: "#", arrow: "up-right" },
      mediaLabel: "A phone showing running agents",
    },
    {
      title: "Build software that lasts",
      description: "Chosen by large engineering groups to move faster, safely and at scale.",
      link: { label: "Fernwork for companies", href: "#" },
      mediaLabel: "An engineer in front of code on several screens",
    },
  ],
};

export default function Demo() {
  return <CursorFrontier {...frontierSample} />;
}
