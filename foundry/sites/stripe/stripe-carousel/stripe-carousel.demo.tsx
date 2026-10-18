// Sample content lives here (gallery only); the page reuses it.
import { StripeCarousel, type StripeCarouselProps } from "./stripe-carousel";

export const carouselSample: StripeCarouselProps = {
  segment: {
    title: "Give your startup a foundation that scales with it",
    text: "From two-person AI labs to the fastest-growing consumer apps, founders launch on fernpay because it's quick to wire up and never needs replacing.",
    action: { label: "fernpay for startups", href: "/startups" },
  },
  prevLabel: "Previous stories",
  nextLabel: "More stories",
  cards: [
    { brand: "petalbyte", text: "Petalbyte grows from side project to ₹400 crore in yearly sales.", link: { label: "Read Petalbyte's story", href: "/stories/petalbyte" }, art: "bloom" },
    { brand: "Solace", text: "Solace reaches 9 million listeners with one subscription stack.", link: { label: "Read Solace's story", href: "/stories/solace" }, art: "dusk" },
    { brand: "ripple", text: "Ripple frees its engineers from billing code for good.", link: { label: "Read Ripple's story", href: "/stories/ripple" }, art: "tide" },
    { brand: "boltdb", text: "Boltdb charges by the query in 120 countries.", link: { label: "Read Boltdb's story", href: "/stories/boltdb" }, art: "grid" },
    { brand: "Lumen", text: "Lumen cuts its failed renewals by a third.", link: { label: "Read Lumen's story", href: "/stories/lumen" }, art: "violet" },
  ],
  promos: [
    { lead: "fernpay Launchpad.", text: "Credits, perks, a founder community and experts on call while you find your feet.", link: { label: "Join Launchpad", href: "/launchpad" }, shape: "wedge" },
    { lead: "fernpay Incorporate.", text: "Form your company, open a bank account and take your first payment in two working days.", link: { label: "Start your company", href: "/incorporate" }, shape: "fold" },
  ],
};

export default function Demo() {
  return <StripeCarousel {...carouselSample} />;
}
