import { FunctionhealthSteps, type FunctionhealthStepsProps } from "./functionhealth-steps";

export const stepsSample: FunctionhealthStepsProps = {
  title: ["Getting started is ", { accent: "simple" }],
  steps: [
    { number: "01", title: "140+ markers", text: "Draw at any of 2,000 sites, or we send someone to you" },
    { number: "02", title: "Results in plain words", text: "Written by clinicians, with the research behind every line" },
    { number: "03", title: "Act on your plan", text: "Follow it for a season. Then retest." },
  ],
  actions: [
    { label: "Begin testing", href: "#begin" },
    { label: "How it works", href: "#how" },
  ],
};

export default function Demo() {
  return <FunctionhealthSteps {...stepsSample} />;
}
