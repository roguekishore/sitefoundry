// Sample content lives here (gallery only); the page reuses it.
import { Lightbulb, Ruler, ScanEye, Weight } from "lucide-react";
import { HalodentalSonnetProduct, type HalodentalSonnetProductProps } from "./halodental-sonnet-product";

export const productSample: HalodentalSonnetProductProps = {
  title: ["The Smart", "Mirror"],
  text: "Gleam's smart mirror is made to make exams easier for patient and dentist alike. Switch between a clear view and a shared screen with one gesture.",
  specs: [
    { icon: <Lightbulb aria-hidden className="size-4" strokeWidth={1.5} />, text: "Soft front and back light" },
    { icon: <ScanEye aria-hidden className="size-4" strokeWidth={1.5} />, text: "Anti-fog surface" },
    { icon: <Ruler aria-hidden className="size-4" strokeWidth={1.5} />, text: "Wide-angle HD camera" },
    { icon: <Weight aria-hidden className="size-4" strokeWidth={1.5} />, text: "About 40 grams" },
  ],
  action: { label: "View the product", href: "#" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <HalodentalSonnetProduct {...productSample} />
    </div>
  );
}
