// Sample content (gallery only); the page reuses it. Fernlight is a made-up company.
import { GrowthbookV2Deploy, type GrowthbookV2DeployProps } from "./growthbook-v2-deploy";

export const deploySample: GrowthbookV2DeployProps = {
  stats: [
    { value: "900B+", label: "Flag checks served every day" },
    { value: "4x", label: "Tests per team per quarter" },
    { value: "60%", label: "Less than the tools it replaced" },
  ],
  options: [
    {
      title: "Fernlight\nHosted",
      body: "Always current, nothing to maintain, and it still reads from your warehouse.",
      action: { label: "Try it free", href: "#" },
    },
    {
      title: "Fernlight on\nyour servers",
      body: "Every feature, the same product, running entirely in your cloud or racks.",
      action: { label: "Get the build", href: "#" },
    },
  ],
};

export default function Demo() {
  return <GrowthbookV2Deploy {...deploySample} />;
}
