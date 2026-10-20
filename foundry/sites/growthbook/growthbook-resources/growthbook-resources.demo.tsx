// Sample content (gallery only); the page reuses it. Northvane is a made-up company.
import { GrowthbookResources, type GrowthbookResourcesProps } from "./growthbook-resources";

export const resourcesSample: GrowthbookResourcesProps = {
  title: "Fresh from the lab",
  featured: {
    category: "Changelog",
    title: "Northvane 3.2: a chat assistant, scheduled holdouts and faster dashboards",
    summary: "Chat assistant, holdouts and speed",
    href: "#",
  },
  posts: [
    { category: "Playbooks", title: "Moving your flags over in a single afternoon", href: "#" },
    { category: "Statistics", title: "Why adding up your test wins oversells them", href: "#" },
    { category: "The Control Group", title: "A podcast on the tests that failed and what they taught", href: "#" },
  ],
};

export default function Demo() {
  return <GrowthbookResources {...resourcesSample} />;
}
