// Sample content lives here (gallery only); the page reuses it.
import { Camera, Droplets, Feather, SunMedium } from "lucide-react";
import { HalodentalOpusProduct, type HalodentalOpusProductProps } from "./halodental-opus-product";

const icon = { strokeWidth: 1.25, "aria-hidden": true } as const;

export const productSample: HalodentalOpusProductProps = {
  title: "The Beacon Scope",
  text: "The Beacon turns a routine look inside the mouth into a shared view. Light the exam, then stream it to the screen your patient is watching with a single tap.",
  features: [
    { icon: <SunMedium {...icon} />, label: "Soft ring light, front and back" },
    { icon: <Droplets {...icon} />, label: "Stays clear, never fogs" },
    { icon: <Camera {...icon} />, label: "Wide-angle HD lens, always in focus" },
    { icon: <Feather {...icon} />, label: "Lighter than a pencil" },
  ],
  cta: { label: "Explore the Beacon", href: "#" },
  slides: [{ label: "The Beacon in hand" }, { label: "The Beacon on its dock" }, { label: "The Beacon in use" }],
};

export default function Demo() {
  return <HalodentalOpusProduct {...productSample} />;
}
