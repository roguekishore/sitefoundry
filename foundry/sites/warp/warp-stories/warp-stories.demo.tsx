// Sample content (gallery only); the page reuses it. All companies are made up.
import { WarpStories, type WarpStoriesProps } from "./warp-stories";

export const storiesSample: WarpStoriesProps = {
  id: "teams",
  tag: "For teams",
  status: "online",
  title: "Lathe is ready for big teams",
  lead: "Let agents work with rules in place, access set up in one spot, and rights managed from one screen.",
  stories: [
    {
      headline: "Halden Clinics grew a weekend script into an agent that keeps getting better",
      text: "A staff engineer's side tool became Pip, an agent built on Lathe that now writes close to half of the team's merged code.",
      mediaLabel: "Hands on a keyboard in a clinic office",
      cta: { label: "Read the story", href: "#" },
    },
    {
      headline: "Cargoline cut onboarding time and gave every engineer one shared playbook",
      text: "Cargoline moved to Lathe for a friendlier shell, and uses shared playbooks to take the repeat work out of each week.",
      mediaLabel: "An engineer at a laptop late in the evening",
      cta: { label: "Read the story", href: "#" },
    },
  ],
};

export default function Demo() {
  return <WarpStories {...storiesSample} />;
}
