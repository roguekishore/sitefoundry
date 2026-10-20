import { HhhusherReviewList, type HhhusherReviewListProps } from "./hhhusher-review-list";

export const reviewListSample: HhhusherReviewListProps = {
  label: "What drummers say",
  ratingLabel: "5 out of 5 stars",
  reviews: [
    { quote: "Put it on for one song and left it on for the whole record. The snare finally sounds like the snare and not the ride.", author: "Odalys Pereira" },
    { quote: "As the engineer I stopped fighting the hats in the snare channel. As the drummer I stopped being asked to play quieter.", author: "Teo Wakefield" },
    { quote: "Simple, solid, and it just works.", author: "Mirela Hanssen" },
    { quote: "“I can lean on the snare compressor now and the cymbals don't come up with it. Wish I'd had it years ago.”", author: "Jonah Achterberg, engineer at Low Barn Studio" },
    { quote: "Every drummer I know needs one.", author: "beatsbyrue" },
    { quote: "Tried it on a jazz kit and a rock kit the same week. Both snares came out drier and warmer, and the splashy top end that always got into the snare mic is mostly gone. I can actually EQ the drum now instead of the cymbals.", author: "Kalle Brannigan" },
    { quote: "I won't track drums without one again.", author: "Sunniva Okafor" },
    { quote: "Hats off to the team for a clever, well-made little thing. It makes drum sessions noticeably easier.", author: "tilde.on.drums" },
    { quote: "Two weeks in and I'm still surprised how much cleaner the snare is.", author: "Marcus Vellacott" },
    { quote: "Thanks for making something that saves me time on every mix.", author: "Ines Corbeau" },
    { quote: "Fitted it this morning before a session and the difference was obvious on playback: just the snare, hardly any spill.", author: "rafa.sticks" },
  ],
};

export default function Demo() {
  return <HhhusherReviewList {...reviewListSample} />;
}
