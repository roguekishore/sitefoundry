import type { CursorPostRowProps } from "./cursor-post-row";
import { CursorPostRow } from "./cursor-post-row";

export const postRowSample: CursorPostRowProps = {
  title: "Field notes",
  posts: [
    { href: "#", meta: "Sep 30, 2026 · Research", title: "Teaching agents to read a stack trace", byline: "Odile Brant · 6 min read" },
    { href: "#", meta: "Sep 12, 2026 · Company", title: "Our second studio opens in Lisbon", byline: "Fernwork Team · 2 min read" },
    { href: "#", meta: "Aug 28, 2026 · Research", title: "Small models, long plans", byline: "Ravi Okonkwo · 9 min read" },
    { href: "#", meta: "Aug 03, 2026 · Product", title: "Reviews that run while you sleep", byline: "Fernwork Team · 4 min read" },
  ],
  more: { label: "Read every note", href: "#" },
};

export default function Demo() {
  return <CursorPostRow {...postRowSample} />;
}
