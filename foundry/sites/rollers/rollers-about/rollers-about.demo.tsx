import { RollersAbout, type RollersAboutProps } from "./rollers-about";

export const aboutSample: RollersAboutProps = {
  heading: [
    { text: "Two brothers, one yard,", tone: "accent" },
    { text: "and the same phone number since 1987." },
  ],
  paragraphs: [
    "It began with a single second-hand compactor and a borrowed tray truck. Thirty-odd years on, the yard runs one of the larger specialist compaction fleets in the region, and the work still comes from people we have worked with before.",
    "We keep about 450 machines across three depots, each one serviced in our own workshop, and the person who quotes the job is the person who answers when something goes wrong on site.",
  ],
  secondaryAction: { label: "Our story", href: "#story" },
  primaryAction: { label: "Browse the yard", href: "#yard" },
};

export default function Demo() {
  return <RollersAbout {...aboutSample} />;
}
