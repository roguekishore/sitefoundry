import { StructureengineeringPrinciple, type StructureengineeringPrincipleProps } from "./structureengineering-principle";

export const principleSample: StructureengineeringPrincipleProps = {
  heading: "Think twice. Pour once.",
  lead: "What sets us apart is the thinking before the drawing. We dig further into the brief, talk early and often, and keep everyone at the same table. The payoff is a job that moves from sketch to slab without stalling, with the structure treated as part of the design.",
  paragraphs: [
    "Because we understand the whole job, we can usually make the engineering simpler: fewer members, smaller footings, shorter programmes. Every choice, from the first sketch to the last connection detail, follows one rule we keep coming back to: if it's clear, it gets built right.",
    "We would rather answer a question before it's asked. The engineer you meet at the start is the one who visits the site and signs the certificate, and they care about the result for the owner as much as for the architect and the builder.",
  ],
};

export default function Demo() {
  return <StructureengineeringPrinciple {...principleSample} />;
}
