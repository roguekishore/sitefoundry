import { LevelsStories, type LevelsStoriesProps } from "./levels-stories";

export const storiesSample: LevelsStoriesProps = {
  eyebrow: "120,000+ members",
  title: "What progress can feel like.",
  lead: "The app only matters because it lets people see something clearly enough to finally act on it.",
  watchLabel: "Play story",
  stories: [
    { quote: "“My LDL dropped by a third without a new prescription.”", name: "Rafael Ortiz", role: "Ballast member", mediaLabel: "Still from Rafael's story" },
    { quote: "“I started at 168. This morning I was 139.”", name: "Mona Fielding", role: "Ballast member", mediaLabel: "Still from Mona's story" },
    { quote: "“Twelve more pounds and I hit my goal.”", name: "Dev Anand", role: "Ballast member", mediaLabel: "Still from Dev's story" },
    { quote: "“Honestly, I think it changed how long I'll live.”", name: "Joan Whitlock", role: "Ballast member", mediaLabel: "Still from Joan's story" },
  ],
};

export default function Demo() {
  return <LevelsStories {...storiesSample} />;
}
