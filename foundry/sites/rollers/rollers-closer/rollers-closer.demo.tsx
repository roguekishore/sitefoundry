import { RollersCloser, type RollersCloserProps } from "./rollers-closer";

export const closerSample: RollersCloserProps = {
  id: "contact",
  quotes: [
    {
      quote: "Stonebank has been on every subdivision we have built since 2014.",
      body: "They answer the phone, the machines turn up clean and serviced, and when the spec changes halfway through a stage their operators already know what the engineer wants. That is why we keep calling.",
      name: "Priya Lindqvist",
      role: "Halden Civil",
      initials: "HC",
    },
    {
      quote: "The operators make our supervisors' days easier.",
      body: "Ticketed, on time and happy to talk through the compaction results with the testers. We book the machine and the operator together now and stopped worrying about either.",
      name: "Marco Vettori",
      role: "Ridgeway Earthworks",
      initials: "RE",
    },
    {
      quote: "We hire their pneumatic rollers for every sealing run.",
      body: "Late-model machines with low hours, the service history in the cab and the paperwork ready for our principal's audit. A small team that moves quickly when we call.",
      name: "Aileen Okafor",
      role: "Project administration",
      initials: "TB",
    },
  ],
  dotLabel: "Show quote",
  eyebrow: "Work with us",
  heading: [{ text: "Plant hire is the easy part,", tone: "accent" }, { text: "we stay on the job." }],
  text: "The machines, the operators, the cabins and the know-how to finish the stage. Whatever the job and wherever the site, the floats are ready to go.",
  secondaryAction: { label: "Ask for a price", href: "#contact" },
  primaryAction: { label: "1800 940 220", href: "tel:1800940220" },
};

export default function Demo() {
  return <RollersCloser {...closerSample} />;
}
