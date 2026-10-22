import { Smartphone } from "lucide-react";
import { GranolaFeatures, type GranolaFeaturesProps } from "./granola-features";

export const featuresSample: GranolaFeaturesProps = {
  eyebrow: "Capabilities",
  title: "Wherever you talk, it takes notes",
  cta: { label: "Get it free", href: "#download" },
  rows: [
    {
      title: "People in the call, not plug-ins",
      body: "Nothing extra appears in your meeting. Tidemark records quietly on your own device while you stay in the conversation.",
      media: { slots: 2 },
      order: "wide-first",
    },
    {
      title: "Plays well with every call app",
      body: "Huddle, Parley, Ringround, a phone on speaker or a chat in the hallway: catch it wherever it happens.",
      media: { slots: 1 },
    },
    {
      title: "Private first, shared on purpose",
      body: "Notes stay yours until you decide otherwise. Search them, refine them, then pass them on in a click.",
      media: { slots: 1 },
    },
    {
      title: "Out of the office, too",
      body: "Site visits, conference corridors, a walk round the block: the phone app takes notes wherever you are.",
      cta: { label: "Get the phone app", href: "#phone", icon: <Smartphone /> },
      media: { slots: 2 },
      order: "narrow-first",
      stackOnPhone: true,
    },
    {
      title: "Reads your calendar for you",
      body: "Tidemark spots upcoming calls the moment they're booked. One tap at start time and the whole conversation is kept and easy to find.",
      media: { slots: 1 },
    },
  ],
};

export default function Demo() {
  return <GranolaFeatures {...featuresSample} />;
}
