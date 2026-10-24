// All people are made up.
import type { CursorHighlightsProps } from "./cursor-highlights";
import { CursorHighlights } from "./cursor-highlights";

export const highlightsSample: CursorHighlightsProps = {
  title: "From the journal",
  posts: [
    { href: "#", date: "Sep 30, 2026", category: "Research", title: "How our agents read a stack trace", author: "Odile Brant", readTime: "6 min read" },
    { href: "#", date: "Sep 12, 2026", category: "Company", title: "A second studio in Lisbon", author: "Fernwork Team", readTime: "2 min read" },
    { href: "#", date: "Aug 28, 2026", category: "Research", title: "Small models, long plans", author: "Fernwork Team", readTime: "4 min read" },
    { href: "#", date: "Aug 3, 2026", category: "Research", title: "Merging at monorepo scale", author: "Ravi Okonkwo", readTime: "19 min read" },
  ],
  more: { label: "Read all journal posts", href: "#" },
};

export default function Demo() {
  return <CursorHighlights {...highlightsSample} />;
}
