import { RollersNews, type RollersNewsProps } from "./rollers-news";

export const newsSample: RollersNewsProps = {
  items: [
    { title: "Loading a float properly: what the chain-of-custody rules ask of you", href: "#guides", tag: "Safety", arrowLabel: "Read the safety note" },
    { title: "Picking a compactor: begin with the soil test, not the brochure", href: "#guides", tag: "Guide", arrowLabel: "Read the guide" },
    { title: "Operated or bare: which hire suits the job in front of you?", href: "#guides", tag: "Guide", arrowLabel: "Read the comparison" },
  ],
  action: { label: "All the notes", href: "#guides" },
};

export default function Demo() {
  return <RollersNews {...newsSample} />;
}
