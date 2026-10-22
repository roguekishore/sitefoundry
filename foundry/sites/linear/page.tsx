// The whole Linear recreation (as "Kestrel", a made-up planning tool for teams and agents),
// built only from this site's blocks with each block's demo content. Dark is the faithful mode.
import { LinearChangelog } from "@foundry/linear-changelog";
import { LinearCta } from "@foundry/linear-cta";
import { LinearCustomers } from "@foundry/linear-customers";
import { LinearFeature } from "@foundry/linear-feature";
import { LinearFooter } from "@foundry/linear-footer";
import { LinearHeader } from "@foundry/linear-header";
import { LinearHero } from "@foundry/linear-hero";
import { LinearIntro } from "@foundry/linear-intro";
import { LinearLogos } from "@foundry/linear-logos";
import { LinearPillars } from "@foundry/linear-pillars";
import { changelogSample } from "./linear-changelog/linear-changelog.demo";
import { ctaSample } from "./linear-cta/linear-cta.demo";
import { customersSample } from "./linear-customers/linear-customers.demo";
import { featureSamples } from "./linear-feature/linear-feature.demo";
import { footerSample } from "./linear-footer/linear-footer.demo";
import { headerSample } from "./linear-header/linear-header.demo";
import { heroSample } from "./linear-hero/linear-hero.demo";
import { introSample } from "./linear-intro/linear-intro.demo";
import { logosSample } from "./linear-logos/linear-logos.demo";
import { pillarsSample } from "./linear-pillars/linear-pillars.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <LinearHeader {...headerSample} />
      <main>
        <LinearHero {...heroSample} />
        <LinearLogos {...logosSample} />
        <LinearIntro {...introSample} />
        <LinearPillars {...pillarsSample} />
        {featureSamples.map((f, i) => (
          <LinearFeature key={i} {...f} />
        ))}
        <LinearChangelog {...changelogSample} />
        <LinearCustomers {...customersSample} />
        <LinearCta {...ctaSample} />
      </main>
      <LinearFooter {...footerSample} />
    </div>
  );
}
