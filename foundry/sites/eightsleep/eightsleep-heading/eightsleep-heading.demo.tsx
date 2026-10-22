import { EightsleepHeading } from "./eightsleep-heading";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-section">
      <EightsleepHeading
        eyebrow="Sleep lab"
        title="Rested is a number you can move"
        sub="Our research team has spent a decade measuring what a cooler, steadier night does for the next day."
        link={{ label: "Read the findings", href: "#" }}
      />
    </div>
  );
}
