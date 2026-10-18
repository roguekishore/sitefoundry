import { HalodentalProduct, type HalodentalProductProps } from "./halodental-product";

export const productSample: HalodentalProductProps = {
  title: "The Optical Probe",
  description:
    "The Velo Optical Probe is engineered to elevate chairside dialogue. Seamlessly transition from coaxial shadow-free illumination to high-definition chairside video streaming with a single tap.",
  specs: [
    { icon: "light", label: "Dual-ring coaxial & backlight optics" },
    { icon: "defog", label: "Active thermal anti-fogging sapphire lens" },
    { icon: "camera", label: "Fixed-focus, wide-angle 1080p sensor" },
    { icon: "weight", label: "~34 grams balanced alloy body" },
  ],
  cta: {
    label: "Explore the instrument",
    href: "#solution",
  },
  awardBadge: {
    highlightText: "design",
    restText: "laureate 2026",
  },
  slides: [
    {
      alt: "Handheld studio view of the Velo Optical Probe",
      placeholderVariant: "dark-handheld",
    },
    {
      alt: "Macro view of the sapphire mirror head",
      placeholderVariant: "light-Macro",
    },
    {
      alt: "Ergonomic grip and induction charging ring",
      placeholderVariant: "light-detail",
    },
  ],
};

export default function Demo() {
  return <HalodentalProduct {...productSample} />;
}
