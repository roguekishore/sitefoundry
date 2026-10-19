import { Orbit } from "lucide-react";
import { NewhaloProductApp, type NewhaloProductAppProps } from "./newhalo-product-app";

export const appSample: NewhaloProductAppProps = {
  id: "app",
  title: "Brio Chair",
  body: "The companion app helps the whole room: the clinician sees more, the patient understands more. It makes diagnosis a conversation and slips into the way your practice already works.",
  appIcon: <Orbit strokeWidth={2} />,
  playLabel: "Play the app film",
  features: [
    { question: "Dictated notes", answer: "While streaming, speak your observations and they are pinned to the pictures you just took." },
    { question: "Tag a picture", answer: "Mark teeth and surfaces on any frame so the record is easy to search later." },
  ],
};

export default function Demo() {
  return <NewhaloProductApp {...appSample} />;
}
