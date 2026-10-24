// Sample content (gallery only); the page reuses it. Tallgrass Fission is made up.
import { ValaratomicsMission, type ValaratomicsMissionProps } from "./valaratomics-mission";

export const missionSample: ValaratomicsMissionProps = {
  title: "Cheap heat grows everything",
  paragraphs: [
    "Every leap in farming came with a cheaper fire. Coal dried the first grain at scale, and gas made the fertiliser that fed the last century.",
    "The next one needs heat that is clean, constant and close by, on every farm road and at every mine head. That is the job we took on.",
  ],
  cta: { label: "Read our reasons", href: "#mission" },
};

export default function Demo() {
  return <ValaratomicsMission {...missionSample} />;
}
