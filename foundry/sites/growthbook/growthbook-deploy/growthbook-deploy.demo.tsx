// Sample content (gallery only); the page reuses it. Northvane and its figures are made up.
import { CloudSun, ServerCog } from "lucide-react";
import { GrowthbookDeploy, type GrowthbookDeployProps } from "./growthbook-deploy";

export const deploySample: GrowthbookDeployProps = {
  stats: [
    { value: "40B+", label: "Flag checks served every week" },
    { value: "4x", label: "More tests per quarter" },
    { value: "60%", label: "Less than the usual bill" },
  ],
  options: [
    {
      icon: <CloudSun strokeWidth={1.25} className="text-glow" />,
      title: ["Northvane", "Hosted"],
      body: "Always current, nothing to patch, warehouse-native.",
      cta: { label: "Try it free", href: "#" },
    },
    {
      icon: <ServerCog strokeWidth={1.25} className="text-highlight" />,
      title: ["Northvane on", "Your Servers"],
      body: "Same product, fully inside your own cloud or on site.",
      cta: { label: "Get the package", href: "#" },
    },
  ],
};

export default function Demo() {
  return <GrowthbookDeploy {...deploySample} />;
}
