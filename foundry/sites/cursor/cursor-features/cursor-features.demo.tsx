import type { CursorFeaturesProps } from "./cursor-features";
import { CursorFeatures } from "./cursor-features";

export const featuresSample: CursorFeaturesProps = {
  features: [
    {
      title: "Plans become pull requests",
      description: "Hand Fernwork the tedious parts of a change and keep your attention on the calls that matter.",
      link: { label: "How planning works", href: "#" },
      mediaLabel: "A plan being drafted in the Fernwork editor",
    },
    {
      title: "Agents that work while you don't",
      description: "Each agent gets its own machine to build, test and record a demo, ready for your review.",
      link: { label: "Meet hosted agents", href: "#" },
      mediaLabel: "A hosted agent's run log in the browser",
    },
    {
      title: "Wherever the work happens",
      description: "Fernwork lives in your shell, answers in team chat, and leaves notes on every review.",
      link: { label: "See the integrations", href: "#" },
      command: "curl -fsSL https://get.fernwork.dev/install | sh",
      copyLabel: "Copy the install command",
      mediaLabel: "Fernwork replying in a team chat and in a terminal",
    },
    {
      title: "Give chores to digital colleagues",
      description: "Helpers log in to the tools you already use, follow your steps, and report back when done.",
      link: { label: "Try Fernwork Helpers", href: "#" },
      mediaLabel: "A list of helpers and a conversation with one",
    },
  ],
};

export default function Demo() {
  return <CursorFeatures {...featuresSample} />;
}
