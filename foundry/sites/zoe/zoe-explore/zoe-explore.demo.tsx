import { ZoeExplore, type ZoeExploreProps } from "./zoe-explore";

export const exploreSample: ZoeExploreProps = {
  eyebrow: "More from Tillwell",
  newsletter: {
    title: "Get the Tillwell letter",
    inputLabel: "Your email address",
    placeholder: "Your email address",
    submitLabel: "Sign up",
    note: "A fortnightly note on food science and new recipes, plus member news and offers.",
  },
  cards: [
    { tag: "Podcast", text: "Hear the food science show everyone’s quoting", href: "#", placeholder: "sun" },
    { tag: "Plantful 40", text: "Stir a little science into your breakfast", href: "#" },
    { tag: "Midlife Check", text: "Understand your midlife changes. See where you stand.", href: "#" },
  ],
};

export default function Demo() {
  return <ZoeExplore {...exploreSample} />;
}
