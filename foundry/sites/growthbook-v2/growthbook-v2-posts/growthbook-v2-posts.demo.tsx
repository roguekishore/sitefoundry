// Sample content (gallery only); the page reuses it. Every title here is made up.
import { GrowthbookV2Posts, type GrowthbookV2PostsProps } from "./growthbook-v2-posts";

export const postsSample: GrowthbookV2PostsProps = {
  title: "Fresh from the lab",
  featured: {
    category: "Release notes",
    title: "Fernlight 7.2: a terminal assistant, chat alerts and smarter traffic splitting",
    excerpt: "Terminal assistant, chat alerts, adaptive splits",
    href: "#",
    tone: "violet",
  },
  posts: [
    { category: "Playbooks", title: "Moving off a legacy flag tool in one afternoon", href: "#", tone: "sky" },
    { category: "Statistics", title: "Why adding up your test wins inflates the total", href: "#", tone: "violet" },
    { category: "The Lab Podcast", title: "Quiet failures: the tests that look flat but aren't", href: "#", tone: "navy" },
  ],
};

export default function Demo() {
  return <GrowthbookV2Posts {...postsSample} />;
}
