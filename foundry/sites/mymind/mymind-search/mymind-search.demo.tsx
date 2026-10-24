// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { MymindSearch, type MymindSearchProps } from "./mymind-search";

export const searchSample: MymindSearchProps = {
  eyebrow: "Find it in a blink",
  title: ["Forget the folders. Just ask", "and it comes back to you."],
  text: "Look things up by shade, word, maker or month, whatever comes to mind first. Search that follows loose memories and visual hints finds it right away.",
  link: { label: "See it find things", href: "#" },
  chips: ["chair", "#someday"],
  searchLabel: "A search line where the words chair and #someday appear one after the other",
};

export default function Demo() {
  return <MymindSearch {...searchSample} />;
}
