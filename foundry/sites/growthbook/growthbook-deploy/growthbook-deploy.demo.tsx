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
      body: "We run it, you use it: always current, nothing to patch, reads straight from your warehouse.",
      cta: { label: "Try it free", href: "#" },
    },
    {
      icon: <ServerCog strokeWidth={1.25} className="text-highlight" />,
      title: ["Northvane on", "Your Servers"],
      body: "The very same product, running entirely inside your own cloud account or data centre.",
      cta: { label: "Get the package", href: "#" },
    },
  ],
};

export default function Demo() {
  return <GrowthbookDeploy {...deploySample} />;
}
