import { EightsleepLife, type EightsleepLifeProps } from "./eightsleep-life";

export const lifeSample: EightsleepLifeProps = {
  title: "Built around your days",
  sub: "Hard training, lazy Sundays, late flights, new parenthood: the Mantle reads the day you had and sets the night to match.",
  link: { label: "See more ways people use it", href: "#" },
  scenes: [
    { widget: { label: "Bed temperature · 11:40 PM", figure: "66°", caption: "Cooling early, so you drop off sooner." } },
    { widget: { label: "Today's training", chips: ["Long ride", "Swim"], caption: "A cooler night to help the legs recover." } },
    { widget: { label: "Your side", chips: ["Warm", "Even", "Cool"], caption: "Running warm? The Layer is already cooling." } },
  ],
};

export default function Demo() {
  return <EightsleepLife {...lifeSample} />;
}
