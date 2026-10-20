import { HhhusherProductHero, type HhhusherProductHeroProps } from "./hhhusher-product-hero";

export const productHeroSample: HhhusherProductHeroProps = {
  title: ["The Veil Snare", "Shield"],
  images: [
    { label: "The Veil fitted to a snare, seen from the drummer's seat" },
    { label: "A drummer tracking with the Veil fitted" },
    { label: "The Veil in a live room" },
    { label: "The Veil on its own" },
  ],
  wasPrice: "$339 USD",
  price: "$289 USD",
  badge: "-15%",
  priceNote: "This month",
  paragraphs: [
    "Meet the Veil. A felt-lined shield that clips to the snare rim and keeps cymbal wash out of the snare mic, because great drum sounds are made at the kit.",
    "The Veil is a curved acoustic barrier for snare drums. It grips the hoop with a sprung clip and wraps the top of the drum in dense wool felt over a closed-cell core, soaking up bright cymbal spill while letting the drum's own body come through.",
  ],
  checkout: { label: "Go to checkout", href: "#" },
  guarantee: "30 days to try it at home",
  labels: { previous: "Previous image", next: "Next image", decrease: "One less", increase: "One more", quantity: "Quantity" },
};

export default function Demo() {
  return <HhhusherProductHero {...productHeroSample} />;
}
