import { RiopropertyLaws, type RiopropertyLawsProps } from "./rioproperty-laws";

export const lawsSample: RiopropertyLawsProps = {
  heading: "Close enough deals and the same lessons show up.",
  subhead: "The Fenwick rulebook",
  moreLabel: "Hold on, there's more",
  laws: [
    { rule: "It isn't signed until the ink is dry.", aside: "Handshakes are a start, not a finish." },
    { rule: "Two buyers on the same street rarely want the same building.", aside: "Every block asks for its own plan." },
    { rule: "Know the zoning, the rent roll and the way out.", aside: "Not only where the good lunch is." },
    { rule: "If the sea view needs a stepladder, it isn't a sea view.", aside: "Good views don't need squinting." },
    { rule: "What a client tells us stays with us.", aside: "Keeping quiet is part of the job." },
    { rule: "An unread lease is an unknown building.", aside: "The clauses hold the real price." },
    { rule: "Rushing costs the most.", aside: "Dithering comes a close second." },
    { rule: "Good faith gets the deal done.", aside: "A good contract keeps it done." },
    { rule: "Few deals die over price.", aside: "They die over surprises." },
    { rule: "“No hurry” often means “not at that number.”", aside: "Timing is where objections hide." },
    { rule: "A comparable without context is just a rumour.", aside: "Figures need the story behind them." },
    { rule: "Don't make the brochure better than the building.", aside: "Honest words, honest photos." },
  ],
};

export default function Demo() {
  return <RiopropertyLaws {...lawsSample} />;
}
