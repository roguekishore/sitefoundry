import { VastspacePress, type VastspacePressProps } from "./vastspace-press";

export const pressSample: VastspacePressProps = {
  title: "In the press",
  prevLabel: "Previous quote",
  nextLabel: "Next quote",
  quotes: [
    { outlet: { name: "Orbit Ledger", style: "heavy" }, quote: "The company said its lunar plans will draw on the same modules it is flying in low orbit, with each flight feeding back into the next design." },
    { outlet: { name: "Thrustline", style: "mono" }, quote: "A Nordic experiment tested on the station could open the way for new partnerships and jobs across the region." },
    { outlet: { name: "The Apogee", style: "italic" }, quote: "A crewed Nordic mission is no longer an aspiration: it is a signed contract. The agency formally agreed with Corvane to fly its flight surgeon to the space station, making her the first citizen of her country in orbit." },
    { outlet: { name: "Cislunar Times", style: "light" }, quote: "Corvane's test-first approach keeps surprising the incumbents." },
  ],
  outlets: [
    { name: "Deck Nine", style: "mono" },
    { name: "Orbit Ledger", style: "heavy" },
    { name: "The Apogee", style: "italic" },
    { name: "Stagewire", style: "heavy" },
    { name: "Cislunar Times", style: "light" },
    { name: "Thrustline", style: "mono" },
    { name: "Perigee Post", style: "italic" },
  ],
};

export default function Demo() {
  return <VastspacePress {...pressSample} />;
}
