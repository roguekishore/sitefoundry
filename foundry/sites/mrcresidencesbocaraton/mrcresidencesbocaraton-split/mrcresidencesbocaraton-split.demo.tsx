import { MrcresidencesbocaratonSplit, type MrcresidencesbocaratonSplitProps } from "./mrcresidencesbocaraton-split";

export const residencesSample: MrcresidencesbocaratonSplitProps = {
  id: "residences",
  title: ["Carefully made", "homes on the bay"],
  body: "Three generations of the Aldani family have run small hotels on the Ligurian coast, and Velloro brings that habit of quiet attention home to Sarasota. Ninety-six residences rise over the bayfront, with a rooftop trattoria, shaded loggias and gardens indoors and out, and two- to four-bedroom homes finished in stone, oak and linen for the way people actually live.",
  link: { label: "See the residences", href: "#residences" },
};

export const amenitiesSample: MrcresidencesbocaratonSplitProps = {
  id: "amenities",
  tone: "soft",
  title: ["Swim, dine,", "unwind"],
  body: "Owners and their guests share the run of a small hotel: a lanai pool deck, a spa with two treatment rooms, a residents' bar and a concierge who remembers how you take your coffee. Step out and the city is on foot: galleries and theatres along the bay, markets on Saturdays, boutiques and long lunches, then the beach by bicycle. Everything is close, and nothing is hurried.",
  link: { label: "See the amenities", href: "#amenities" },
};

export const sarasotaSample: MrcresidencesbocaratonSplitProps = {
  id: "sarasota",
  title: ["Sarasota", "a coast of culture"],
  body: "Sarasota keeps its circus-town wit and its opera-house manners. Mornings start with a swim off Lido Key and end with a concert on the water; between them, a sailing club, an arts district, two golf courses and the long white sand of the keys, all within a short drive.",
  link: { label: "Discover Sarasota", href: "#sarasota" },
};

export default function Demo() {
  return (
    <>
      <MrcresidencesbocaratonSplit {...residencesSample} />
      <MrcresidencesbocaratonSplit {...amenitiesSample} />
    </>
  );
}
