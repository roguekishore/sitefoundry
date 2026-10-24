import { ZoeProducts, type ZoeProductsProps } from "./zoe-products";

export const productsSample: ZoeProductsProps = {
  title: "What we make",
  products: [
    {
      name: "Plantful 40 Daily Blend",
      description:
        "One spoonful a day for digestion, steady energy and everyday nutrition*. Forty plants in a single blend, built by our microbiome researchers.",
      badge: "From £18",
      cta: { label: "Shop now", href: "#" },
    },
    {
      name: "Fibre Crunch Bar",
      description:
        "Swap the biscuit for a bar your gut will thank you for. Twelve plants and real crunch, made by Tillwell nutritionists.",
      cta: { label: "Shop now", href: "#" },
    },
    {
      name: "Tillwell App",
      description:
        "Snap your meals, see how they score and build habits that stick. No calorie counting, just clearer choices.",
      badge: "Start for £2.50",
      cta: { label: "Find out more", href: "#" },
    },
    {
      name: "Microbe Map Test",
      description:
        "Find out which bacteria call your gut home, get your diversity score and the foods that suit you best. Works with the Tillwell App.",
      cta: { label: "Find out more", href: "#" },
    },
  ],
  footnote:
    "*Plantful 40 and the Fibre Crunch Bar are high in fibre. Wheat bran fibre contributes to faster intestinal transit, and iron contributes to the reduction of tiredness and fatigue.",
};

export default function Demo() {
  return <ZoeProducts {...productsSample} />;
}
