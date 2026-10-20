// Sample content lives here (gallery only); the page reuses it. The firm is made up.
import { ReckonerStrategies, type ReckonerStrategiesProps } from "./reckoner-strategies";

export const strategiesSample: ReckonerStrategiesProps = {
  id: "strategies",
  eyebrow: "Strategies",
  statement:
    "Two strategies, one discipline: we underwrite every loan as though the cycle turns tomorrow, so that your capital is",
  statementTail: "ready when it does",
  items: [
    {
      title: "Listed Credit",
      text: "Daily liquidity, open holdings and institutional scale",
      href: "#listed",
      cta: "Explore",
    },
    {
      title: "Direct Lending",
      text: "Senior loans we originate ourselves, structured for steady yield and close oversight",
      href: "#direct",
      cta: "Explore",
    },
  ],
};

export default function Demo() {
  return <ReckonerStrategies {...strategiesSample} />;
}
