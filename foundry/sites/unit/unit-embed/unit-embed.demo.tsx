import { UnitEmbed, type UnitEmbedProps } from "./unit-embed";

export const embedSample: UnitEmbedProps = {
  heading: "Drop a full banking suite into your app",
  body: "Let customers run their money from your product, with ready-made accounts and bill pay.",
  cta: { label: "See how it works", href: "#" },
};

export default function Demo() {
  return <UnitEmbed {...embedSample} />;
}
