import type { FramerCtaProps } from "./framer-cta";
import { FramerCta } from "./framer-cta";

export const ctaSample: FramerCtaProps = {
  title: "Your next site begins here",
  prompts: [
    "Build a studio portfolio with a case-study page and a contact form…",
    "Make a launch page for a coffee subscription, warm and simple…",
    "Set up a company site with a jobs board and a blog…",
  ],
  promptLabel: "Describe the site you want",
  model: "Draft 4 Swift",
  sendLabel: "Send",
  chips: [
    { label: "Make a portfolio", href: "#" },
    { label: "Build a startup site", href: "#" },
    { label: "Ship a launch page", href: "#" },
    { label: "Start a team blog", href: "#" },
  ],
  secondary: { label: "Begin from a blank page", href: "#" },
  action: { label: "Start building free", href: "#" },
  mediaLabel: "Canvas panel",
};

export default function Demo() {
  return <FramerCta {...ctaSample} />;
}
