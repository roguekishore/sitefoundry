import { OndoBeliefs, type OndoBeliefsProps } from "./ondo-beliefs";

export const beliefsSample: OndoBeliefsProps = {
  label: "What we hold to",
  items: [
    { title: "Markets should never close.", text: "Value ought to move at the speed of the networks it lives on." },
    { title: "Access shouldn’t depend on a postcode.", text: "Sound assets belong in reach of anyone who plays by the rules." },
    { title: "Trust is earned in public.", text: "Reserves, audits and rules you can read for yourself, every day." },
  ],
};

export default function Demo() {
  return <OndoBeliefs {...beliefsSample} />;
}
