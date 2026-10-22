// Sample content lives here (gallery only); the page reuses it. Sorrel Power is made up.
import { Building2, Factory, ShieldCheck, TrendingUp } from "lucide-react";
import { OnEnergyFeatures, type OnEnergyFeaturesProps } from "./on-energy-features";

export const featuresSample: OnEnergyFeaturesProps = {
  items: [
    { icon: <ShieldCheck />, title: "Insurable Hardware, Named Suppliers", text: "Every core part comes from a listed maker and carries a 25-year guarantee." },
    { icon: <TrendingUp />, title: "Output That Scales by the Gigawatt", text: "Lines already running at volume, ready to ship worldwide." },
    { icon: <Factory />, title: "Built at Home, Sourced Clean", text: "Assembled in our own plants with an audited parts chain." },
    { icon: <Building2 />, title: "Redundant by Design", text: "Engineered for the strictest uptime targets a campus can set." },
  ],
};

export default function Demo() {
  return <OnEnergyFeatures {...featuresSample} />;
}
