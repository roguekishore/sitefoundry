import { HhhusherV2Reviews, type HhhusherV2ReviewsProps } from "./hhhusher-v2-reviews";

export const reviewsSample: HhhusherV2ReviewsProps = {
  statement: "The Quello Hood stops cymbal wash where it starts, so drummers who record get a cleaner snare, an easier mix and a sound they can push.",
  label: "What players say",
  reviews: [
    { quote: "Every drummer who records should own one. It's the cheapest upgrade I've made to my snare sound in ten years. Get one before they run out!", name: "Marisol Q." },
    { quote: "As an engineer it has rescued more than one session with a heavy-handed drummer, and as a drummer it keeps my snare track tight and clean.", name: "Desmond Achterberg" },
    { quote: "Honestly a must-have. Wish I'd had it years ago.", name: "Priya Lindqvist" },
    { quote: "I can compress the snare as hard as I like now, and the hats just don't come up with it.", name: "Tomás Bergeron, engineer at Low Ceiling Rooms" },
    { quote: "Everyone needs one. Simple as that!", name: "Marisol Q." },
    { quote: "Fitted it, recorded a song, then soloed the snare: it's a snare again, not a cymbal mic. The top end is smoother, the harshness has gone up an octave and out of the way.", name: "Ilse van Wyk" },
    { quote: "I never want to track drums without one again.", name: "Jonah Rees" },
  ],
};

export default function Demo() {
  return <HhhusherV2Reviews {...reviewsSample} />;
}
