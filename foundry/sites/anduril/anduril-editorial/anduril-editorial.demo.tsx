// Sample content lives here (gallery only); the page reuses it.
import { AndurilEditorial, type AndurilEditorialProps } from "./anduril-editorial";

export const editorialSample: AndurilEditorialProps = {
  parts: [
    { heading: "Why the Yard Comes First", linkLabel: "Keep reading", href: "#", label: "Pt — 01 / 02", tone: "accent" },
    { heading: "Building at Wartime Pace", linkLabel: "Keep reading", href: "#", label: "Pt — 02 / 02", tone: "secondary" },
  ],
};

export default function Demo() {
  return <AndurilEditorial {...editorialSample} />;
}
