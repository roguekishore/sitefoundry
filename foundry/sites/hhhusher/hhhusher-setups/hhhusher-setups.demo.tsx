import { HhhusherSetups, type HhhusherSetupsProps } from "./hhhusher-setups";

export const setupsSample: HhhusherSetupsProps = {
  id: "positions",
  title: ["Mic", "Positions"],
  primary: { label: "Order", href: "#shop" },
  setups: [
    {
      index: "01",
      label: "Top head, classic",
      text: "A dynamic mic over the batter head, two fingers in from the hoop, angled at the centre. The Veil shades it from the cymbals above, so you can bring the snare up without the wash coming with it.",
    },
    {
      index: "02",
      label: "Side port",
      text: "Feed the capsule through the shield's side port and point it at the drum's sweet spot. The felt closes round the mic body, sealing out spill from the left-hand cymbals.",
    },
    {
      index: "03",
      label: "Top and bottom",
      text: "Pair the top mic with one under the snare wires. The Veil keeps the top track dry, which makes blending in the wires much easier.",
    },
    {
      index: "04",
      label: "Small condenser",
      text: "Condensers hear more of everything. Under the Veil a small-diaphragm condenser gives you detail on ghost notes without the bright cymbal fizz.",
    },
    {
      index: "05",
      label: "Two-mic stream",
      text: "With just a kick mic and an overhead pair, the Veil still helps: tucked over the snare it evens out the kit balance at the overheads.",
    },
    {
      index: "06",
      label: "Room and close",
      text: "Close mic under the Veil, room pair out front. The dry close track gives you punch to blend against the room without phasey cymbal smear.",
    },
  ],
};

export default function Demo() {
  return <HhhusherSetups {...setupsSample} />;
}
