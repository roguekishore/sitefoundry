import { HalodentalVagueFlashProduct, type HalodentalVagueFlashProductProps } from "./halodental-vague-flash-product";

export const productSample: HalodentalVagueFlashProductProps = {
  title: "The Optical Loupe",
  description:
    "The Sola Optical Loupe is engineered to elevate chairside communication. Effortlessly transition from shadow-free coaxial illumination to live 4K chairside streaming with a single tap.",
  specs: [
    { icon: "light", label: "Coaxial front and ambient halo light" },
    { icon: "antifog", label: "Thermal anti-fogging sapphire lens" },
    { icon: "camera", label: "Fixed-focus, wide-angle HD sensor" },
    { icon: "weight", label: "~35 grams balanced alloy" },
  ],
  cta: {
    label: "View the solution",
    href: "#solution",
  },
  awardLabel: "reddot winner 2024",
};

export default function Demo() {
  return <HalodentalVagueFlashProduct {...productSample} />;
}
