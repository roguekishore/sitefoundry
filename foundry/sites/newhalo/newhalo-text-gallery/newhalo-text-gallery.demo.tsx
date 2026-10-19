import { Aperture, Feather, Sun, Wind } from "lucide-react";
import { NewhaloTextGallery, type NewhaloTextGalleryProps } from "./newhalo-text-gallery";

export const textGallerySample: NewhaloTextGalleryProps = {
  title: "Meet Lumen One",
  body: [
    "Lumen One turns the most familiar tool in the operatory into a window patients can look through. Light the exam, then share what you see on screen with a flick of the wrist.",
  ],
  features: [
    { label: "Even ring light, front and back", icon: <Sun /> },
    { label: "Heated glass that stays clear", icon: <Wind /> },
    { label: "Wide-angle sensor, fixed focus", icon: <Aperture /> },
    { label: "About 34 grams in the hand", icon: <Feather /> },
  ],
  cta: { label: "See the instrument", href: "#product" },
  slides: [{ label: "Show picture 1" }, { label: "Show picture 2" }, { label: "Show picture 3" }],
};

export const cameraSample: NewhaloTextGalleryProps = {
  id: "sensor",
  title: "The sensor",
  body: [
    "A 900 × 900 sensor sits right behind the glass: sharp, evenly lit frames every time, without reaching for a separate intraoral camera.",
    "The best camera is the one already in your hand.",
  ],
  features: [
    { label: "Fixed focus from 4 mm to 12 cm", icon: <Aperture /> },
    { label: "118° wide-angle view", icon: <Sun /> },
    { label: "Capture with a tap or a word", icon: <Wind /> },
  ],
  slides: [{ label: "Sensor close-up" }],
};

export const careersSample: NewhaloTextGalleryProps = {
  title: "Build it with us",
  body: ["For four years a small team has been reshaping the dental visit, one detail at a time. Want to help with the next part?"],
  features: [{ label: "Fair, transparent pay" }, { label: "Office or remote, your call" }, { label: "Four-day weeks in summer" }, { label: "Flexible hours" }, { label: "A team that ships" }],
  cta: { label: "Open roles", href: "#" },
  slides: [{ label: "The team at work" }],
};

export default function Demo() {
  return <NewhaloTextGallery {...textGallerySample} />;
}
