import { WildAgPortrait, type WildAgPortraitProps } from "./wild-ag-portrait";

export const portraitSample: WildAgPortraitProps = {
  id: "about",
  title: "About.",
  paragraphs: [
    "We look for land that has more in it than it shows: an awkward corner lot, an old workshop yard, a plot the zoning plan has quietly grown around. We measure what it could hold and what it would be worth.",
    "Many owners sit on ground or buildings they no longer use. We study the market, test what the rules allow and set out clear options, from a careful upgrade to a sale at the right moment.",
    "The first site visit and the first study cost nothing and commit you to nothing.",
  ],
  valuesTitle: "Values.",
  values: [
    { title: "Care", text: "Every joint and threshold drawn and checked before anyone pours concrete." },
    { title: "Keeping our word", text: "Dates and budgets we agree are the ones we hand over on." },
    { title: "One of a kind", text: "Each plot gets its own answer, never a type plan pulled from a drawer." },
    { title: "Long view", text: "We build for the people who will live here in fifty years, and for the hill behind it." },
  ],
};

export default function Demo() {
  return <WildAgPortrait {...portraitSample} />;
}
