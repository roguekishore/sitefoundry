import { AirwallexHeading } from "./airwallex-heading";

export default function Demo() {
  return (
    <div className="grid gap-16 bg-background px-gutter py-12">
      <AirwallexHeading
        eyebrow="Why Fernhold?"
        title="Money tools built for companies that cross borders"
        intro="From a two-person studio selling abroad to a marketplace paying thousands of sellers, the same rails carry every transfer."
        gap="lg"
      />
      <AirwallexHeading align="left" title="Keep every currency in one place" intro="Hold balances, pay suppliers and reconcile without switching tabs." />
    </div>
  );
}
