import { WiemerV2Intro, type WiemerV2IntroProps } from "./wiemer-v2-intro";

export const introSample: WiemerV2IntroProps = {
  tag: "Pre-order",
  heading: "Four plates,\none Ilse.",
  subheading: "Simple on purpose. Ilse, the side table.",
  paragraphs: [
    "Ilse is made of almost nothing: two punched aluminium plates, four steel rods and a handful of nuts. Everything else we left out on purpose. Cut, bent and finished in our Bremen workshop.",
    "It stands as easily next to a reading chair as it does by the front door, holding a stack of records, a lamp or tomorrow's shoes without asking for attention.",
    "No glue, no screws to lose: Ilse goes together in under ten minutes with one spanner, and comes apart just as quickly for the next move.",
    "Choose the low side table or the taller three-shelf version.",
  ],
  link: { label: "Join the list", href: "#reserve" },
};

export default function Demo() {
  return <WiemerV2Intro {...introSample} />;
}
