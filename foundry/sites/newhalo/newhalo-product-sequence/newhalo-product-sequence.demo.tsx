import { Lightbulb, Sparkles, SunDim } from "lucide-react";
import { NewhaloProductSequence, type NewhaloProductSequenceProps } from "./newhalo-product-sequence";

export const sequenceSample: NewhaloProductSequenceProps = {
  id: "light",
  title: "Light where you need it",
  steps: [
    { title: "Lit from inside the mouth", text: "The ring sits right where you work, so there is no glare in your eyes or your patient's.", icon: <SunDim /> },
    { title: "Light that follows you", text: "In auto mode the instrument senses what you are doing and switches the right LEDs on and off.", icon: <Sparkles /> },
    { title: "A small status glow", text: "One soft band tells you when it is starting, pairing, connected, resting or switching off.", icon: <Lightbulb /> },
  ],
};

export default function Demo() {
  return <NewhaloProductSequence {...sequenceSample} />;
}
