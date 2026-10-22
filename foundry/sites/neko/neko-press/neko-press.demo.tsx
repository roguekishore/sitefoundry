// Sample content lives here (gallery only); the page reuses it. Ardent Health is made up.
import { NekoPress, type NekoPressProps } from "./neko-press";

export const pressSample: NekoPressProps = {
  label: "In the news",
  title: "From the journal",
  body: "We publish what our check-ups teach us: open studies, yearly numbers and plain-spoken notes on staying well.",
  link: { label: "Visit the newsroom", href: "#news" },
  featured: {
    chip: "Featured",
    meta: "2 October 2026",
    title: "What forty thousand check-ups taught us",
    source: { label: "Ardent Journal", href: "#journal" },
  },
};

export default function Demo() {
  return (
    <div className="pb-section">
      <NekoPress {...pressSample} />
    </div>
  );
}
