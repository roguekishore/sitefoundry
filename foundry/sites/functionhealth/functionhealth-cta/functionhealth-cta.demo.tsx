import { FunctionhealthCta, type FunctionhealthCtaProps } from "./functionhealth-cta";

export const ctaSample: FunctionhealthCtaProps = {
  title: ["Time is ", { accent: "tight?" }],
  text: "Your panel takes twenty minutes.",
  actions: [
    { label: "Begin testing", href: "#begin" },
    { label: "What we test", href: "#test" },
  ],
};

export default function Demo() {
  return <FunctionhealthCta {...ctaSample} />;
}
