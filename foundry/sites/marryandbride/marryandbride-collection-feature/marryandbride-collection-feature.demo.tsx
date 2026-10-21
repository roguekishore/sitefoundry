import { MarryandbrideCollectionFeature, type MarryandbrideCollectionFeatureProps } from "./marryandbride-collection-feature";

export const featureSample: MarryandbrideCollectionFeatureProps = {
  title: "THE ORCHARD EDIT",
  body: "A small capsule made with a florist we admire: airy shrugs and cropped knits in the colours of blossom, for brides who marry under fruit trees.",
  cta: { label: "Discover", href: "#orchard" },
  products: [
    { name: "Clover – short", kind: "Cardigan", price: "360 €", href: "#clover" },
    { name: "Plum lace – cardigan", kind: "Cardigan", price: "410 €", href: "#plum" },
  ],
};

export const featureReverseSample: MarryandbrideCollectionFeatureProps = {
  title: "Pearl Line",
  body: "Time for a little shimmer: pullovers and cardigans scattered with hand-sewn freshwater pearls at the shoulders, along the cuffs or all over.",
  cta: { label: "Discover", href: "#pearl" },
  products: [
    { name: "Moonrise bolero", kind: "Cardigan", price: "from 470 €", href: "#moonrise", badge: "New" },
    { name: "Seashell cardigan", kind: "Cardigan", price: "from 480 €", href: "#seashell", badge: "New" },
  ],
  reverse: true,
};

export default function Demo() {
  return (
    <>
      <MarryandbrideCollectionFeature {...featureSample} />
      <MarryandbrideCollectionFeature {...featureReverseSample} />
    </>
  );
}
