import { NewhaloShowcase, type NewhaloShowcaseProps } from "./newhalo-showcase";

export const partnersSample: NewhaloShowcaseProps = {
  title: "Good partners make good instruments",
  cards: [
    { title: "Kestrel Circuits", text: "Our electronics partner: they design the boards inside every Lumen One and the firmware that runs them.", href: "#" },
    { title: "Halden & Moor", text: "An industrial design studio that sweated every millimetre of the grip, the head and the dock.", href: "#" },
    { title: "Northlight Labs", text: "A software and vision team that helped train the lighting to follow what you are doing.", href: "#" },
    { title: "Pellucid Glass", text: "They make the heated mirror glass, polished and coated by hand in small batches.", href: "#" },
  ],
  controlLabels: { previous: "Previous partner", next: "Next partner" },
};

export const eventsSample: NewhaloShowcaseProps = {
  title: "Come say hello",
  titleSize: "xl",
  cards: [{ title: "Where we'll be", text: "Our calendar of dental shows and conferences is coming soon. Check back for dates." }],
};

export default function Demo() {
  return <NewhaloShowcase {...partnersSample} />;
}
