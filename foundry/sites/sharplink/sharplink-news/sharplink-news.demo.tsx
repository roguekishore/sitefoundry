import { SharplinkNews, type SharplinkNewsProps } from "./sharplink-news";

export const newsSample: SharplinkNewsProps = {
  label: "From the journal",
  title: "Recent Notes",
  cta: { label: "All articles", href: "#journal" },
  previousLabel: "Previous article",
  nextLabel: "Next article",
  articles: [
    { title: "Inside our validator rotation policy", tag: "Research", date: "Oct 02, 2026", href: "#rotation" },
    { title: "Ferrowell joins the Lumen custody working group", tag: "Announcement", date: "Sep 18, 2026", href: "#custody" },
    { title: "What reserve-per-share tells a shareholder", tag: "Explainer", date: "Aug 27, 2026", href: "#reserve" },
  ],
};

export default function Demo() {
  return <SharplinkNews {...newsSample} />;
}
