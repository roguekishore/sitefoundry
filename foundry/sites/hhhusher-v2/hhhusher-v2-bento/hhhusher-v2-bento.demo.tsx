import { HhhusherV2Bento, type HhhusherV2BentoProps } from "./hhhusher-v2-bento";

export const bentoSample: HhhusherV2BentoProps = {
  cards: [
    {
      title: "Form",
      text: "The hood curves away from the hats on every side, so nothing inside it can ring. The cymbals keep their own voice while the snare mic stops hearing them.",
      link: { label: "Read more", href: "#form" },
    },
    {
      title: "Felt",
      text: "Months of swapping liners led to a dense wool felt that soaks up the top end of a cymbal and lets the low end pass, so the snare keeps its body and loses the hiss.",
      link: { label: "Read more", href: "#felt" },
    },
    {
      title: "One-minute fit",
      text: "A single side clamp holds the hood on any hi-hat stand, and it slides to fit hats from 13 to 16 inches.",
      link: { label: "Read more", href: "#fit" },
    },
  ],
};

export default function Demo() {
  return <HhhusherV2Bento {...bentoSample} padTop />;
}
