// Sample content (gallery only); the page reuses it. Kestrel Works is made up.
import { HadrianModel, type HadrianModelProps } from "./hadrian-model";

export const modelSample: HadrianModelProps = {
  id: "model",
  eyebrow: "How we work",
  title: "Capacity, Delivered",
  items: [
    {
      title: "Machined Parts",
      text: "We machine tight-tolerance parts for aerospace and energy programs, holding drawing and date from first article to full-rate runs.",
    },
    {
      title: "Dedicated Cells",
      text: "Reserved machining or inspection cells, run by our own crews inside a Kestrel plant or on your floor.",
    },
    {
      title: "Turnkey Plants",
      text: "Whole part, assembly and component plants that Kestrel designs, builds and runs around the country's toughest and most urgent production programs.",
    },
  ],
};

export default function Demo() {
  return <HadrianModel {...modelSample} />;
}
