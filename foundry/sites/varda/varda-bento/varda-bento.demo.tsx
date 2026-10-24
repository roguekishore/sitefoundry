// Sample content lives here (gallery only); the page reuses it. Halden Orbital Works is made up.
import type { VardaBentoProps } from "./varda-bento";
import { VardaBento } from "./varda-bento";

export const bentoSample: VardaBentoProps = {
  feature: {
    eyebrow: "The Halden Kiln",
    title: "One capsule for growing, shielding and landing, built under one roof",
    href: "#",
    mediaLabel: "Capsule descent footage",
  },
  tall: {
    eyebrow: "Purpose",
    title: "Making low orbit a place where things get made",
    href: "#",
    mediaLabel: "A recovered capsule on a salt flat",
  },
  pair: [
    { eyebrow: "Defense", title: "A returning test vehicle for high-speed flight research", href: "#" },
    { eyebrow: "Pharma", title: "Grow purer crystal forms you can't reach on the ground", href: "#" },
  ],
  wide: {
    eyebrow: "Jobs",
    title: "Help build the first factories above the sky",
    href: "#",
    mediaLabel: "The team lifting a capsule in the hangar",
  },
};

export default function Demo() {
  return <VardaBento {...bentoSample} />;
}
