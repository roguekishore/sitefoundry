// Sample content lives here (gallery only); the page reuses it. Sorrel Power and its figures
// are made up.
import { OnEnergyStats, type OnEnergyStatsProps } from "./on-energy-stats";

export const statsSample: OnEnergyStatsProps = {
  items: [
    { value: "4", unit: "GW", title: "4 GW Live or Being Built", text: "Buffering supply for compute campuses, critical plants and the lines that feed them." },
    { value: "99", unit: ".99%", title: "99.99% Availability", text: "Rated for the strictest data-hall tiers, with the best uptime record in its class." },
    { value: "12", unit: "+", title: "12+ GW a Year of Output", text: "Lines running now, sized for the biggest builds on the books." },
    { showMedia: true, title: "60+ Sites Across Three Continents", text: "More than a century of combined field hours behind every cabinet." },
  ],
};

export default function Demo() {
  return <OnEnergyStats {...statsSample} className="pt-section" />;
}
