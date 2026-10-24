import type { ParsleyhealthExpertsProps } from "./parsleyhealth-experts";
import { ParsleyhealthExperts } from "./parsleyhealth-experts";

export const expertsSample: ParsleyhealthExpertsProps = {
  title: "See physicians who are trained to dig further",
  lead: (
    <>
      <a href="#">Halden physicians</a> hold board certification and years of practice in everyday, root-cause and
      preventive medicine.
    </>
  ),
  points: [
    "Board certified, plus extra training in root-cause care",
    "Can prescribe when it helps, from hormone support to weight-loss medicine",
    "Measure how you feel over time with our own symptom score",
  ],
  person: { name: "Dr. Mara Okafor, MD", role: "Internal medicine physician and Halden's medical director" },
  mediaLabel: "Cut-out portrait of the medical director",
};

export default function Demo() {
  return <ParsleyhealthExperts {...expertsSample} />;
}
