// Sample content lives here (gallery only); the page reuses it. Sorrel Power is made up.
import { OnEnergyPerformance, type OnEnergyPerformanceProps } from "./on-energy-performance";

export const performanceSample: OnEnergyPerformanceProps = {
  eyebrow: "Field record",
  title: "Tested Hard, Running Wide",
  text: "Keel is the only buffer of its class certified by an independent grid lab, cleared under the newest ride-through rules and already wired into live campuses.",
  cta: { label: "Tour the sites", href: "#" },
};

export default function Demo() {
  return <OnEnergyPerformance {...performanceSample} />;
}
