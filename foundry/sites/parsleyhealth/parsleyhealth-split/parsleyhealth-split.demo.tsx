import type { ParsleyhealthSplitProps } from "./parsleyhealth-split";
import { ParsleyhealthSplit } from "./parsleyhealth-split";

export const splitSample: ParsleyhealthSplitProps = {
  title: "A physician who keeps asking until it makes sense.",
  body: "Unhurried visits with doctors trained to trace stubborn problems to where they begin. Settle what has been bothering you for years and get your energy back.",
  action: { label: "Become a member", href: "#" },
  mediaLabel: "Portrait of a member in sunlight",
};

export default function Demo() {
  return <ParsleyhealthSplit {...splitSample} />;
}
