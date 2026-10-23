// The whole Airwallex recreation, built only from this site's blocks, with each block's demo
// content (a made-up global business-finance company, Fernhold). Light is the faithful mode;
// the product universe and customer reel are graphite in both.
import { AirwallexCta } from "@foundry/airwallex-cta";
import { AirwallexCustomers } from "@foundry/airwallex-customers";
import { AirwallexFeature } from "@foundry/airwallex-feature";
import { AirwallexFooter } from "@foundry/airwallex-footer";
import { AirwallexHeader } from "@foundry/airwallex-header";
import { AirwallexHero } from "@foundry/airwallex-hero";
import { AirwallexLogos } from "@foundry/airwallex-logos";
import { AirwallexNetwork } from "@foundry/airwallex-network";
import { AirwallexSolutions } from "@foundry/airwallex-solutions";
import { AirwallexStatement } from "@foundry/airwallex-statement";
import { AirwallexUniverse } from "@foundry/airwallex-universe";
import { ctaSample } from "./airwallex-cta/airwallex-cta.demo";
import { customersSample } from "./airwallex-customers/airwallex-customers.demo";
import { featureSamples } from "./airwallex-feature/airwallex-feature.demo";
import { footerSample } from "./airwallex-footer/airwallex-footer.demo";
import { headerSample } from "./airwallex-header/airwallex-header.demo";
import { heroSample } from "./airwallex-hero/airwallex-hero.demo";
import { logosSample } from "./airwallex-logos/airwallex-logos.demo";
import { networkSample } from "./airwallex-network/airwallex-network.demo";
import { solutionsSample } from "./airwallex-solutions/airwallex-solutions.demo";
import { statementSample } from "./airwallex-statement/airwallex-statement.demo";
import { universeSample } from "./airwallex-universe/airwallex-universe.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <AirwallexHeader {...headerSample} />
      <AirwallexHero {...heroSample} />
      <AirwallexLogos {...logosSample} />
      <AirwallexSolutions {...solutionsSample} />
      <AirwallexUniverse {...universeSample} />
      <AirwallexStatement {...statementSample} />
      {featureSamples.map((f) => (
        <AirwallexFeature key={f.title} {...f} />
      ))}
      <AirwallexNetwork {...networkSample} />
      <AirwallexCustomers {...customersSample} />
      <AirwallexCta {...ctaSample} />
      <AirwallexFooter {...footerSample} />
    </div>
  );
}
