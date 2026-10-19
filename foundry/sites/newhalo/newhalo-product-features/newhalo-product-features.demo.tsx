import { Focus, Hand, Scale, Snowflake, Wifi } from "lucide-react";
import { NewhaloProductFeatures, type NewhaloProductFeaturesProps } from "./newhalo-product-features";

export const featuresSample: NewhaloProductFeaturesProps = {
  id: "design",
  title: "Made with great care",
  features: [
    { title: "Always sharp", text: "No autofocus hunting: a fixed lens keeps everything from 4 mm to 12 cm crisp.", icon: <Focus strokeWidth={1.5} /> },
    { title: "With or without the app", text: "Lumen One works on its own; pair it to snap pictures and stream to the chairside screen.", icon: <Wifi strokeWidth={1.5} /> },
    { title: "Light in the hand", text: "Around 34 grams and balanced for long sessions, so your fingers stay relaxed all day.", icon: <Scale strokeWidth={1.5} />, wide: true },
    { title: "No more fog", text: "A gentle heater keeps the glass just above mouth temperature, so it stays clear.", icon: <Snowflake strokeWidth={1.5} /> },
    { title: "Tap, double tap, flick", text: "Switch between looking, streaming and capturing with small gestures.", icon: <Hand strokeWidth={1.5} /> },
  ],
};

export default function Demo() {
  return <NewhaloProductFeatures {...featuresSample} />;
}
