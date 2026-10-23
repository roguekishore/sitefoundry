import { FunctionhealthHeading } from "./functionhealth-heading";

export default function Demo() {
  return (
    <div className="space-y-16 bg-background px-gutter py-section">
      <FunctionhealthHeading title={["Getting started is ", { accent: "simple" }]} />
      <FunctionhealthHeading title={["A year of answers, ", { accent: "for less than a coffee a day" }]} text="Clinician-reviewed panels, explained in plain words." />
      <FunctionhealthHeading as="h1" size="hero" align="start" title={[{ accent: "Know your body." }]} />
      <FunctionhealthHeading title={["What could cost you ", { accent: "$9,000", strike: true }, " is $480"]} />
    </div>
  );
}
