// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { MymindManifesto, type MymindManifestoProps } from "./mymind-manifesto";

export const manifestoSample: MymindManifestoProps = {
  eyebrow: "What we believe",
  lead: "Somewhere",
  paragraphs: [
    { text: "along the way, our attention became the product. Every feed is tuned to keep us scrolling, every app wants a little more of what we see, save and say, and very little of what we keep is really kept by us." },
    { text: "Our thoughts got rented out –" },
    { text: "to streaks and badges, to rankings and reach, to whoever pays for the next minute of our day. What we collect is spread over a dozen services, each with its own rules." },
    { text: "It is time the quiet part of us had a home again.", strong: "So here is our word:" },
  ],
  refusalWord: "NO",
  refusals: ["followers", "streaks", "public profiles", "shared feeds", "adverts"],
};

export default function Demo() {
  return <MymindManifesto {...manifestoSample} />;
}
