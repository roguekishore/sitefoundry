import { BasepowercompanySteps, type BasepowercompanyStepsProps } from "./basepowercompany-steps";

export const stepsSample: BasepowercompanyStepsProps = {
  tag: "Switching takes a week",
  title: "Cheaper, steadier power is three steps from here",
  cta: { label: "Sign up", href: "#signup" },
  steps: [
    {
      number: "01",
      title: "Send us a few photos",
      body: "Snap your breaker panel and the side of the house. Our electricians work out which Hub setup suits your home.",
      mediaLabel: "An installer and a homeowner looking at photos on a phone",
    },
    {
      number: "02",
      title: "We handle the install",
      body: "One visit, usually a single morning. We pull the permits, fit the Hub and switch your service over.",
      mediaLabel: "An installer mounting the Hub beside a house",
    },
    {
      number: "03",
      title: "Covered from day one",
      body: "From then on the Hub keeps watch: it trims your bill on busy hours and takes over the house when the lines go down.",
      mediaLabel: "A family on the porch in the evening, lights on",
    },
  ],
};

export default function Demo() {
  return <BasepowercompanySteps {...stepsSample} />;
}
