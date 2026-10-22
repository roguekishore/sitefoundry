import { PrenuvoMri, type PrenuvoMriProps } from "./prenuvo-mri";

export const mriSample: PrenuvoMriProps = {
  id: "how",
  features: [
    { title: "Head-to-toe MRI", body: "One quiet session looks at every major organ, with no radiation and no dye, in under an hour.", tone: "green" },
    { title: "Sharper focus where it counts", body: "Optional add-ons measure your brain, heart and body composition in finer detail.", tone: "blue" },
    { title: "A full blood picture", body: "More than seventy markers for inflammation, hormones, metabolism and more.", tone: "lilac" },
  ],
};

export default function Demo() {
  return <PrenuvoMri {...mriSample} className="mt-0" />;
}
