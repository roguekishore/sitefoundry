// Sample content (gallery only); the page reuses it. Tallgrass Fission is made up.
import { ValaratomicsProducts, type ValaratomicsProductsProps } from "./valaratomics-products";

export const productsSample: ValaratomicsProductsProps = {
  title: "What we sell",
  body: "We don't sell reactors. We sell what comes out of them, by the tonne and the megawatt-hour, on twenty-year contracts that keep the yard building and the price falling with every unit.",
  items: [
    {
      name: "Steam heat",
      body: "Process steam at 550°C, piped straight into dryers, mills and kilns that burn gas today.",
    },
    {
      name: "Ammonia",
      body: "Fertiliser made on the farm belt instead of shipped up the river, with no gas in the recipe.",
    },
    {
      name: "Mine power",
      body: "Round-the-clock power for remote pits and smelters, sited where the ore is rather than where the grid ends.",
    },
    {
      name: "Fresh water",
      body: "Waste heat runs a thermal desalter beside every unit, turning brackish wells into irrigation water for the fields around it.",
    },
  ],
};

export default function Demo() {
  return <ValaratomicsProducts {...productsSample} />;
}
