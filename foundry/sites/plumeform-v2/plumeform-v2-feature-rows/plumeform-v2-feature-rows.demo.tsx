import { PlumeformV2FeatureRows, type PlumeformV2FeatureRowsProps } from "./plumeform-v2-feature-rows";

export const askSample: PlumeformV2FeatureRowsProps = {
  intro: "A questionnaire builder with 150 free replies a month. No card needed to begin.",
  introLink: { label: "Browse every starter draft", href: "#drafts" },
  rows: [
    {
      eyebrow: "Two ways to reply",
      title: "Step by step. Or all on one page.",
      body: "Let people step through one prompt at a time, or scroll a single page of them. Every plan has both, and the switch is one click away.",
      panelHeight: "21rem",
      fog: "cool",
    },
    {
      eyebrow: "Branches & recall",
      title: "Follow-ups that suit the reply.",
      body: "Send people to a different page, or skip what doesn't concern them. On Plus, quote an earlier reply inside a later prompt, and change a live questionnaire without losing what's already in.",
      panelHeight: "18.5rem",
      fog: "warm",
    },
    {
      eyebrow: "Replies",
      title: "See replies arrive, live.",
      body: "Charts move as people answer. Read one reply on its own or narrow the results by any answer. Each page is saved as it's finished, so you can see where people stop even if they never submit.",
      panelHeight: "16rem",
      fog: "mint",
    },
  ],
};

export const compareSample: PlumeformV2FeatureRowsProps = {
  startWith: "panel",
  rows: [
    {
      eyebrow: "Once the replies are in",
      title: "Put groups side by side.",
      body: "Cross-tab any two questions on every plan, and on Plus test whether a gap is real. Group sizes sit next to every figure, so nobody reads too much into ten replies.",
      bullets: [
        { title: "Any group", text: "set any audience against any other, on any question" },
        { title: "Weights", text: "match your sample to the people you meant to reach" },
        { title: "One tidy set", text: "drop unusable replies once and every chart follows" },
      ],
      panelHeight: "31rem",
      fog: "mint",
    },
    {
      eyebrow: "Written replies",
      title: "Find the threads in what people wrote.",
      body: "On Plus, Murmur reads the latest written replies to a question and gives you a short summary, the overall mood and the recurring topics, each with a rough count and a quote. Questionnaires in several languages land in one set of results.",
      panelHeight: "43rem",
      fog: "cool",
    },
  ],
};

export default function Demo() {
  return <PlumeformV2FeatureRows {...askSample} />;
}
