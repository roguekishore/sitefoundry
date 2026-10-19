import { NewhaloValues, type NewhaloValuesProps } from "./newhalo-values";

export const valuesSample: NewhaloValuesProps = {
  title: "What we hold to",
  values: [
    { title: "People first", text: "In the instrument and in the office, we design for the humans using it. No egos, plenty of laughs." },
    { title: "Give back", text: "Dentistry gave us a reason to build. We try to return the favour with open data and honest pricing." },
    { title: "Say it plainly", text: "We share what we know, early and in full, with the team and with partners, so everyone pulls the same way." },
    { title: "Keep going", text: "Progress comes from shipping, learning and shipping again. Small steps, every week." },
  ],
};

export default function Demo() {
  return <NewhaloValues {...valuesSample} />;
}
