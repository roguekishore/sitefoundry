import { AirwallexButton } from "./airwallex-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-8">
      <AirwallexButton href="#">Open an account</AirwallexButton>
      <AirwallexButton href="#" variant="outline">Book a walkthrough</AirwallexButton>
      <AirwallexButton href="#" variant="text">Sign in</AirwallexButton>
      <AirwallexButton href="#" size="sm">Open an account</AirwallexButton>
      <AirwallexButton type="submit" size="lg">Open an account</AirwallexButton>
    </div>
  );
}
