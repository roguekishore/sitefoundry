import { FunctionhealthStories, type FunctionhealthStoriesProps } from "./functionhealth-stories";

const playLabel = "Play story";

export const storiesSample: FunctionhealthStoriesProps = {
  title: ["Real people. ", { accent: "Real answers." }],
  stories: [
    { name: "Tidewell like Priya", text: "The signal her last clinic missed", playLabel },
    { name: "Tidewell like Walter", text: "From a warning to a plan", playLabel },
    { name: "Tidewell like Colm", text: "Catching a problem early, after one panel", playLabel },
    { name: "Tidewell like Joanna", text: "Proof that habits alone were not enough", playLabel },
  ],
};

export default function Demo() {
  return <FunctionhealthStories {...storiesSample} />;
}
