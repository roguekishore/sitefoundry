// Sample content lives here (gallery only); the page reuses it.
import { AndurilProducts, type AndurilProductsProps } from "./anduril-products";

export const productsSample: AndurilProductsProps = {
  items: [
    { name: "Tern", tagline: "Light Strike, Long Reach", href: "#" },
    { name: "Pike", tagline: "Numbers Over Weight", href: "#" },
    { name: "Meshwork", tagline: "One Picture, Every Team", href: "#" },
    { name: "Kestrel", tagline: "Climb, Hover, Return, Repeat", href: "#", shape: "tall" },
    { name: "Gale", tagline: "Wingman by Design", href: "#", shape: "wide" },
    { name: "Ridgeline", tagline: "Hold the High Ground", href: "#" },
    { name: "Deepline", tagline: "Quiet Below the Thermocline", href: "#" },
  ],
};

export default function Demo() {
  return <AndurilProducts {...productsSample} />;
}
