import { HhhusherReviews, type HhhusherReviewsProps } from "./hhhusher-reviews";

export const reviewsSample: HhhusherReviewsProps = {
  title: ["Heard in Real", "Sessions."],
  ratingLabel: "5 out of 5 stars",
  reviews: [
    { quote: "Put it on for one song and left it on for the whole record. The snare finally sounds like the snare and not the ride.", author: "Odalys Pereira" },
    { quote: "As the engineer I stopped fighting the hats in the snare channel. As the drummer I stopped being asked to play quieter. Everyone wins.", author: "Teo Wakefield" },
  ],
};

export default function Demo() {
  return <HhhusherReviews {...reviewsSample} />;
}
