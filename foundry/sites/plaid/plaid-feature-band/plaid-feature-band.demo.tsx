import { PlaidFeatureBand, type PlaidFeatureBandProps } from "./plaid-feature-band";

export const featureBandSample: PlaidFeatureBandProps = {
  title: "The model layer under sharper money products",
  action: { label: "See applied AI", href: "#" },
};

export default function Demo() {
  return <PlaidFeatureBand {...featureBandSample} />;
}
