import type { ReflectPricingProps } from "./reflect-pricing";
import { ReflectPricing } from "./reflect-pricing";

export const pricingSample: ReflectPricingProps = {
  eyebrow: "Getting it",
  title: "Pick your screen.",
  plans: [
    {
      name: "Laptop",
      price: "Free",
      text: "No account, no fee.",
      action: { label: "Get it for Mac", href: "#" },
    },
    {
      name: "Phone & tablet",
      price: "Yearly plan",
      priceSize: "small",
      text: "Local prices are in the app store.",
      action: { label: "Open the app store page", href: "#" },
      actionVariant: "secondary",
    },
  ],
  note: "The assistant needs a key from a model provider of your choice, billed by them.",
  mediaLabel: "A glowing planet rising out of the dark",
};

export default function Demo() {
  return <ReflectPricing {...pricingSample} />;
}
