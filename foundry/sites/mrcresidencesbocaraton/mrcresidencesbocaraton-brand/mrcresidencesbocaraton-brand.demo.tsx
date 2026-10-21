import { MrcresidencesbocaratonBrand, type MrcresidencesbocaratonBrandProps } from "./mrcresidencesbocaraton-brand";

export const brandSample: MrcresidencesbocaratonBrandProps = {
  name: "Velloro",
  title: "Residences",
  place: "Sarasota, FL",
  byline: ["By", "the", "Aldani", "family"],
  credit: "Sales and marketing by Harbourline Property Partners",
};

export default function Demo() {
  return <MrcresidencesbocaratonBrand {...brandSample} />;
}
