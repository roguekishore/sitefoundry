// Sample content lives here (gallery only); the page reuses it. Ardent Health and its members are made up.
import { NekoReviews, type NekoReviewsProps } from "./neko-reviews";

export const reviewsSample: NekoReviewsProps = {
  title: "Members give us 4.8 stars",
  subtitle: "We set the bar high, and our members keep us to it.",
  reviews: [
    {
      quote: "Sitting down with a doctor ten minutes after the scan, with every number already on the screen, felt like the future of check-ups.",
      name: "Priya",
      place: "Leeds · Park Row",
    },
    {
      quote: "Calm, unhurried and remarkably thorough. I left knowing more about my own body than after years of GP visits.",
      name: "Tom",
      place: "Bristol · Harbourside",
    },
    {
      quote: "An hour well spent. Nothing matters more than knowing you are well.",
      name: "Aisha",
      place: "Manchester · Ancoats",
    },
  ],
};

export default function Demo() {
  return (
    <div className="pb-section">
      <NekoReviews {...reviewsSample} />
    </div>
  );
}
