// Sample content (gallery only).
import { FormenergySplit, type FormenergySplitProps } from "./formenergy-split";

export const cellSample: FormenergySplitProps = {
  id: "cell",
  title: "The salt cell",
  text: "Power demand keeps climbing while the grid is asked to run cleaner and never fail. Our answer is a sealed cell of molten salt and plain steel, designed and built in the United States, that soaks up surplus wind and solar and gives it back for up to seven days, at a cost utilities can plan around.",
  action: { label: "See the cell", href: "#cell" },
  mediaSide: "left",
  tone: "grey",
};

export const worksSample: FormenergySplitProps = {
  id: "works",
  title: "Rebuilding an old rail works for the next grid",
  text: "Calder Falls Works is our first full-scale battery plant, raised inside the brick sheds of a nineteenth-century locomotive yard. Some 700 people now work across its forty acres of floor, turning out salt cells by the thousand and proving that heavy industry still has a home in the river towns that built the railways.",
  action: { label: "Tour the works", href: "#works" },
  mediaSide: "right",
  tone: "white",
  ruleAboveOnPhone: true,
};

export default function Demo() {
  return (
    <>
      <FormenergySplit {...cellSample} />
      <FormenergySplit {...worksSample} />
    </>
  );
}
