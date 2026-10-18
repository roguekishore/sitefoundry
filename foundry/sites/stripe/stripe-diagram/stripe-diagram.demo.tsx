// Sample content lives here (gallery only); the page reuses it.
import { StripeDiagram, type StripeDiagramProps } from "./stripe-diagram";

export const diagramSample: StripeDiagramProps = {
  title: "Plug into what you already run.",
  rest: "Route payments across processors, automate your own workflows, and connect everything else with APIs, partner apps or ready-made connectors.",
  sources: ["ERP", "CRM", "Plans", "Old billing", "Scheduling"],
  brand: "fern",
  labels: { sdk: "SDKs", events: "Webhooks", apps: "App directory", pipeline: "Data sync", routing: "Smart routing" },
  processors: ["P1", "P2", "P3", "P4"],
};

export default function Demo() {
  return <StripeDiagram {...diagramSample} />;
}
