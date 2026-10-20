import { HhhusherV2ProductHero, type HhhusherV2ProductHeroProps } from "./hhhusher-v2-product-hero";

export const productHeroSample: HhhusherV2ProductHeroProps = {
  name: "Quello Hood\nCut the Cymbal Wash",
  oldPrice: "$339 USD",
  price: "$289 USD",
  tag: "-15%",
  tagNote: "This month",
  paragraphs: [
    "The Quello Hood is a felt-lined shield that clamps under your hi-hats and keeps their wash out of the snare mic. Clean snare, clean mix, from the first take.",
    "It's a curved shell of moulded fibre lined with dense wool felt. Clamped to the hi-hat stand, it sits between the hats and the snare, soaking up the high hiss of the cymbals and letting the low end through, so the snare keeps its body.",
  ],
  pictures: [
    { label: "The hood on a hi-hat stand, from the drummer's side" },
    { label: "A drummer tracking in a live room" },
    { label: "The hood in a studio kit, wide shot" },
    { label: "The hood from below, with the mic flap open" },
  ],
  checkout: { label: "Go to checkout", href: "#checkout" },
  note: "Love it or send it back",
  labels: { previous: "Previous picture", next: "Next picture", less: "One fewer", more: "One more", quantity: "Quantity" },
};

export default function Demo() {
  return <HhhusherV2ProductHero {...productHeroSample} />;
}
