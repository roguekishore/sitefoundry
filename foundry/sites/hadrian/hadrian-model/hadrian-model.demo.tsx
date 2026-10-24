// Sample content (gallery only); the page reuses it. Kestrel Works is made up.
import { HadrianModel, type HadrianModelProps } from "./hadrian-model";

export const modelSample: HadrianModelProps = {
  id: "model",
  eyebrow: "How we work",
  title: "Capacity, Delivered",
  items: [
    {
      title: "Machined Parts",
      text: "Tight-tolerance parts for aerospace and energy programs, from first article to full-rate runs.",
    },
    {
      title: "Dedicated Cells",
      text: "Reserved machining and inspection cells, run by our crews in our plants or on your floor.",
    },
    {
      title: "Turnkey Plants",
      text: "Whole part, assembly and component plants that we design, build and run around your hardest programs.",
    },
  ],
};

export default function Demo() {
  return <HadrianModel {...modelSample} />;
}
