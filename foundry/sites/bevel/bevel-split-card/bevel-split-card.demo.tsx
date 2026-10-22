// Sample content (gallery only); the page reuses it.
import { BevelSplitCard, type BevelSplitCardProps } from "./bevel-split-card";

export const splitCardSample: BevelSplitCardProps = {
  title: "See what's on your plate",
  text: "Log a meal in seconds and get the full picture of what it gives you.",
  tint: "lavender",
};

export default function Demo() {
  return <BevelSplitCard {...splitCardSample} />;
}
