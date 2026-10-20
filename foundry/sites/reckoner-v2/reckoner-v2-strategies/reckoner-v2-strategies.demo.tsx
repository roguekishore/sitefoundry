// Sample content (gallery only); the page reuses it. The company is made up.
import { ReckonerV2Strategies, type ReckonerV2StrategiesProps } from "./reckoner-v2-strategies";

export const strategiesSample: ReckonerV2StrategiesProps = {
  id: "approach",
  eyebrow: "Approach",
  title: "Two decades of lending through good years and bad have taught us to underwrite slowly, price risk honestly and build portfolios that",
  emphasis: "earn their keep",
  items: [
    {
      title: "Listed credit",
      text: "Daily liquidity, open books and room to scale",
      cta: { label: "Read more", href: "#listed" },
    },
    {
      title: "Direct lending",
      text: "Loans we originate ourselves, structured to fit the borrower and priced for the extra effort",
      cta: { label: "Read more", href: "#direct" },
    },
  ],
};

export default function Demo() {
  return <ReckonerV2Strategies {...strategiesSample} />;
}
