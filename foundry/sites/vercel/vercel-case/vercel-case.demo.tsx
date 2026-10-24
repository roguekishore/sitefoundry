// Sample content (gallery only); the page reuses it. The customers are made up.
import { VercelCase, type VercelCaseProps } from "./vercel-case";

export const caseAgentsSample: VercelCaseProps = {
  title: "Give agents a runtime that reasons the way they do",
  titleClassName: "lg:max-w-[8em]",
  lead: "Pagewright handles millions",
  rest: "of assistant sessions a day on Halyard.",
  featuresLabel: "Built with",
  features: [
    { label: "Long-running Jobs", href: "#" },
    { label: "Isolated Workspaces", href: "#" },
    { label: "Model Router", href: "#" },
    { label: "Elastic Compute", href: "#" },
  ],
  align: "start",
  layered: "always",
  mediaLabel: "Customer product screenshot",
};

export const caseAppsSample: VercelCaseProps = {
  title: "Launch apps that go from first user to peak traffic overnight",
  titleClassName: "lg:max-w-[10.5em]",
  lead: "Relaylane serves 90 million",
  rest: "page views a month on Halyard.",
  featuresLabel: "Built with",
  features: [
    { label: "Edge Network", href: "#" },
    { label: "Preview Branches", href: "#" },
    { label: "On-demand Functions", href: "#" },
    { label: "Traffic Shield", href: "#" },
  ],
  align: "end",
  layered: "phone",
  mediaLabel: "Customer website screenshot",
};

export const casePlatformsSample: VercelCaseProps = {
  title: "Run platforms that give every client a home",
  titleClassName: "lg:max-w-[9em]",
  lead: "Docksmith hosts help centres for more than 18,000",
  rest: "teams on Halyard.",
  featuresLabel: "Built with",
  features: [
    { label: "Per-tenant Isolation", href: "#" },
    { label: "Custom Domains", href: "#" },
    { label: "Automatic Certificates", href: "#" },
    { label: "Branch Previews", href: "#" },
  ],
  align: "start",
  layered: "phone",
  mediaLabel: "Customer docs screenshot",
};

export default function Demo() {
  return (
    <>
      <VercelCase {...caseAgentsSample} />
      <VercelCase {...caseAppsSample} />
    </>
  );
}
