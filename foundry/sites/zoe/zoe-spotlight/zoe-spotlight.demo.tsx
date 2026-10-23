import { ZoeSpotlight, type ZoeSpotlightProps } from "./zoe-spotlight";

export const spotlightSample: ZoeSpotlightProps = {
  title: "Fibre, now in your pocket.",
  body: [
    "The Fibre Crunch Bar turns a mid-afternoon snack into a win for your gut.",
    "Twelve plants and a toasted, nutty crunch keep you going and your microbes happy.",
  ],
  cta: { label: "Get the Fibre Crunch Bar", href: "#" },
};

export default function Demo() {
  return <ZoeSpotlight {...spotlightSample} />;
}
