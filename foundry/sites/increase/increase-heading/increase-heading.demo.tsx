import { IncreaseHeading } from "./increase-heading";

export default function Demo() {
  return (
    <div className="space-y-10 bg-background px-gutter py-12">
      <IncreaseHeading as="h1" size="hero" lead="Banking for software that moves money." rest="Launch real financial products on a bank that speaks API." />
      <IncreaseHeading lead="Every rail, every ledger, one integration." rest="Cairn carries payroll, payouts and lending for teams settling millions a day." />
      <IncreaseHeading as="h3" size="row" lead="Small primitives" rest="you can snap together into exactly the product you need." />
    </div>
  );
}
