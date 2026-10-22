import { RhoStories, type RhoStoriesProps } from "./rho-stories";

export const storiesSample: RhoStoriesProps = {
  title: "Teams that moved to Ostra",
  stories: [
    { company: "Lumenfold", quote: "“We stopped dreading month-end.”", name: "Priya Malhotra", role: "Co-founder & COO" },
    { company: "Gridwell", quote: "“Support answers before I finish typing.”", name: "Theo Aranda & Mina Cole", role: "Founders" },
    { company: "Kitebase", quote: "“Our runway finally feels visible.”", name: "Jonas Feld", role: "CEO" },
  ],
  prevLabel: "Previous story",
  nextLabel: "Next story",
};

export default function Demo() {
  return <RhoStories {...storiesSample} />;
}
