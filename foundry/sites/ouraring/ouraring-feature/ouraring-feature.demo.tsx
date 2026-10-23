// Sample content lives here (gallery only); the page reuses it. Tessel is made up.
import { OuraringFeature, type OuraringFeatureProps } from "./ouraring-feature";

export const featureSample: OuraringFeatureProps = {
  eyebrow: "Just added",
  title: "Say hello to Early Notice",
  body: (
    <>
      A set of tools that watches your overnight signals for changes worth a closer look, so you can act before you feel off.
      <sup>*</sup>
    </>
  ),
  cta: { label: "Take a look", href: "#" },
};

export default function Demo() {
  return <OuraringFeature {...featureSample} />;
}
