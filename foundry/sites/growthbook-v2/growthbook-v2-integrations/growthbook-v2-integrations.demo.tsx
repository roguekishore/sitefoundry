// Sample content (gallery only); the page reuses it. Every tool name is made up.
import { GrowthbookV2Integrations, type GrowthbookV2IntegrationsProps } from "./growthbook-v2-integrations";

export const integrationsSample: GrowthbookV2IntegrationsProps = {
  title: "Plugs into the\nstack you\nalready run",
  body: "Made by engineers, for engineers, to fit whatever languages, pipelines and tools you use.",
  action: { label: "Browse integrations", href: "#" },
  integrations: [
    "Kettle.js", "Snowdrift", "Pathwise", "Lumen DB", "Ferrocket", "Swiftlet",
    "Corvid", "Datapond", "Mintstack", "Brook", "Atlasgate", "Pebble SDK",
    "Quickbeam", "Northwind QL", "Stackyard",
  ].map((name) => ({ name })),
};

export default function Demo() {
  return <GrowthbookV2Integrations {...integrationsSample} />;
}
