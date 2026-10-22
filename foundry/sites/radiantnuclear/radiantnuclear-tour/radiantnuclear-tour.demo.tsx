// Sample content lives here (gallery only); the page reuses it. Corvane Energy is made up.
import { RadiantnuclearTour, type RadiantnuclearTourProps } from "./radiantnuclear-tour";

export const tourSample: RadiantnuclearTourProps = {
  title: "Keystone: the proving ground for our fleet",
  body: "The cells we hand to the Navy come off the same line as the ones our utility customers order. Twelve units by 2031, and every one of them identical.",
  steps: [
    { lead: "One design, many units:", body: "Keystone volume turns Tessera from a first build into a product you can order." },
    { lead: "A line sized for hundreds:", body: "The order pays for tooling built for serial production, and each revision is shaped by the Navy's own engineers." },
    { lead: "Hours on the clock:", body: "Twelve yards running Tessera add up to decades of operating time every year. Nothing earns a fleet's trust faster than a long, quiet record." },
    { lead: "A shorter road to licence:", body: "Field data from Keystone gives regulators the record they need to approve the commercial fleet sooner." },
    { lead: "Scale that pays back:", body: "Building in volume brings the price of every unit down, for the Navy and for every customer who orders after it." },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <RadiantnuclearTour {...tourSample} />
      <div className="h-[60svh]" />
    </div>
  );
}
