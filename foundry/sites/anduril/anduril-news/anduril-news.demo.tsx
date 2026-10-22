// Sample content lives here (gallery only); the page reuses it.
import { AndurilNews, type AndurilNewsProps } from "./anduril-news";

export const newsSample: AndurilNewsProps = {
  heading: "Notes & Dispatches",
  allLabel: "Every dispatch",
  allHref: "#",
  article: {
    date: "09/14/2026",
    title: "Northwatch Opens a Second Coastal Yard to Double Hull Output by Spring",
    excerpt: "Northwatch opens a second coastal yard to double hull output by spring.",
    linkLabel: "Keep reading",
    href: "#",
  },
};

export default function Demo() {
  return <AndurilNews {...newsSample} />;
}
