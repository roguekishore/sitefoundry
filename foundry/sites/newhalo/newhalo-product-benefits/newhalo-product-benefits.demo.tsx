import { NewhaloProductBenefits, type NewhaloProductBenefitsProps } from "./newhalo-product-benefits";

export const benefitsSample: NewhaloProductBenefitsProps = {
  id: "comfort",
  title: "Kind to the people using it",
  points: [
    { title: "Sit up straighter", text: "Light that comes from the instrument means less leaning and twisting to see past your own shadow." },
    { title: "34 g", text: "No heavier than a classic mirror, so your grip stays light and your hand muscles relaxed." },
  ],
};

export default function Demo() {
  return <NewhaloProductBenefits {...benefitsSample} />;
}
