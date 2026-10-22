// Sample content lives here (gallery only); the page reuses it. Sorrel Power is made up.
import { OnEnergyShowcase, type OnEnergyShowcaseProps } from "./on-energy-showcase";

export const showcaseSample: OnEnergyShowcaseProps = {
  title: "Fault-proof\nfrom the first volt",
  cta: { label: "Read the test report", href: "#" },
  lead: "Keel",
  copy: "rides through every sag and swell in the newest interconnect codes, so a campus stays online while the grid stumbles.",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <OnEnergyShowcase {...showcaseSample} screens={4} />
    </div>
  );
}
