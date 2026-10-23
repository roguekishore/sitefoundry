// The whole Unit recreation, built only from this site's blocks, with each block's demo
// content (a made-up company, Corbel). Shown in the gallery as "unit — full page".
// Light is the faithful mode.
import { UnitCta } from "@foundry/unit-cta";
import { UnitCustomers } from "@foundry/unit-customers";
import { UnitEmbed } from "@foundry/unit-embed";
import { UnitFooter } from "@foundry/unit-footer";
import { UnitHeader } from "@foundry/unit-header";
import { UnitHero } from "@foundry/unit-hero";
import { UnitInsights } from "@foundry/unit-insights";
import { UnitLogos } from "@foundry/unit-logos";
import { UnitPlatform } from "@foundry/unit-platform";
import { UnitProducts } from "@foundry/unit-products";
import { UnitShowcase } from "@foundry/unit-showcase";
import { UnitStats } from "@foundry/unit-stats";
import { ctaSample } from "./unit-cta/unit-cta.demo";
import { customersSample } from "./unit-customers/unit-customers.demo";
import { embedSample } from "./unit-embed/unit-embed.demo";
import { footerSample } from "./unit-footer/unit-footer.demo";
import { headerSample } from "./unit-header/unit-header.demo";
import { heroSample } from "./unit-hero/unit-hero.demo";
import { insightsSample } from "./unit-insights/unit-insights.demo";
import { logosSample } from "./unit-logos/unit-logos.demo";
import { platformSample } from "./unit-platform/unit-platform.demo";
import { productsSample } from "./unit-products/unit-products.demo";
import { showcaseSample } from "./unit-showcase/unit-showcase.demo";
import { statsSample } from "./unit-stats/unit-stats.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <UnitHeader {...headerSample} />
      <main>
        <UnitHero {...heroSample} />
        <UnitLogos {...logosSample} />
        <UnitStats {...statsSample} />
        <UnitProducts {...productsSample} />
        <UnitCustomers {...customersSample} />
        <UnitPlatform {...platformSample} />
        <UnitEmbed {...embedSample} />
        <UnitShowcase {...showcaseSample} />
        <UnitInsights {...insightsSample} />
        <UnitCta {...ctaSample} />
      </main>
      <UnitFooter {...footerSample} />
    </div>
  );
}
