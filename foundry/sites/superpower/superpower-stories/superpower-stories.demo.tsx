import { SuperpowerRating } from "@foundry/superpower-rating";
import { SuperpowerStories, type SuperpowerStoriesProps } from "./superpower-stories";

export const storiesSample: SuperpowerStoriesProps = {
  id: "stories",
  eyebrow: <SuperpowerRating score="4.8 out of 5" source="Verdict reviews" />,
  title: "Real changes, in real lives",
  lead: "Two in three members say their panel turned up something no one had flagged before.",
  stories: [
    { name: "Priya, 41", quote: "“I'd felt flat for two years and kept hearing it was stress. My panel showed an iron problem in the first week.”", outcome: "Found a deficiency three check-ups had missed", mediaLabel: "Photo: Priya at her kitchen window" },
    { name: "Marcus, 36", quote: "“My family history worried me, but nobody tested for it. Now I know my numbers and what to do about them.”", outcome: "Caught rising blood sugar early", mediaLabel: "Photo: Marcus smiling by a bright window" },
    { name: "Elena, 39", quote: "“Months of bloating, gone in six weeks once I understood what was behind it.”", outcome: "Traced her symptoms to a hormone imbalance", mediaLabel: "Photo: Elena looking out of a window" },
    { name: "Dev and Ana, 30 and 31", quote: "“We signed up together. Comparing results made it a project we actually enjoy.”", outcome: "Both lowered their cholesterol in a year", mediaLabel: "Photo: a couple on a sofa" },
    { name: "Walter, 58", quote: "“I trained hard and ate well and still felt worse. The plan finally told me where to put my effort.”", outcome: "A supplement plan that saved him time and money", mediaLabel: "Photo: Walter in a cap, mid-conversation" },
  ],
};

export default function Demo() {
  return <SuperpowerStories {...storiesSample} />;
}
