import { MarryandbrideCategories, type MarryandbrideCategoriesProps } from "./marryandbride-categories";

export const categoriesSample: MarryandbrideCategoriesProps = {
  categories: [
    { label: "Pullovers", href: "#pullovers" },
    { label: "Cardigans", href: "#cardigans" },
    { label: "Shrugs", href: "#shrugs" },
  ],
};

export default function Demo() {
  return <MarryandbrideCategories {...categoriesSample} />;
}
