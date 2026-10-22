// The whole Attio recreation (as "Tessel", a made-up self-running CRM), built only from this
// site's blocks with each block's demo content. Light is the faithful mode: the middle band
// (context → developers), the closing CTA and the footer force themselves dark, and the
// header turns dark while it is over them.
import { AttioChangelog } from "@foundry/attio-changelog";
import { AttioContext } from "@foundry/attio-context";
import { AttioCta } from "@foundry/attio-cta";
import { AttioCustomers } from "@foundry/attio-customers";
import { AttioDevelopers } from "@foundry/attio-developers";
import { AttioFooter } from "@foundry/attio-footer";
import { AttioGap } from "@foundry/attio-gap";
import { AttioHeader } from "@foundry/attio-header";
import { AttioHero } from "@foundry/attio-hero";
import { AttioLogos } from "@foundry/attio-logos";
import { AttioOnboard } from "@foundry/attio-onboard";
import { AttioPlatform } from "@foundry/attio-platform";
import { AttioQuote } from "@foundry/attio-quote";
import { AttioScale } from "@foundry/attio-scale";
import { AttioSignals } from "@foundry/attio-signals";
import { AttioStack } from "@foundry/attio-stack";
import { changelogSample } from "./attio-changelog/attio-changelog.demo";
import { contextSample } from "./attio-context/attio-context.demo";
import { ctaSample } from "./attio-cta/attio-cta.demo";
import { customersSample } from "./attio-customers/attio-customers.demo";
import { developersSample } from "./attio-developers/attio-developers.demo";
import { footerSample } from "./attio-footer/attio-footer.demo";
import { headerSample } from "./attio-header/attio-header.demo";
import { heroSample } from "./attio-hero/attio-hero.demo";
import { logosSample } from "./attio-logos/attio-logos.demo";
import { onboardSample } from "./attio-onboard/attio-onboard.demo";
import { platformSample } from "./attio-platform/attio-platform.demo";
import { quoteSample } from "./attio-quote/attio-quote.demo";
import { scaleSample } from "./attio-scale/attio-scale.demo";
import { signalsSample } from "./attio-signals/attio-signals.demo";
import { stackSample } from "./attio-stack/attio-stack.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <AttioHeader {...headerSample} />
      <AttioHero {...heroSample} />
      <AttioLogos {...logosSample} />
      <AttioPlatform {...platformSample} />
      <AttioGap surface="muted" />
      <AttioOnboard {...onboardSample} />
      <AttioContext {...contextSample} />
      <AttioSignals {...signalsSample} />
      <AttioStack {...stackSample} />
      <AttioDevelopers {...developersSample} />
      <AttioGap dark />
      <AttioQuote {...quoteSample} />
      <AttioScale {...scaleSample} />
      <AttioCustomers {...customersSample} />
      <AttioGap />
      <AttioChangelog {...changelogSample} />
      <AttioGap />
      <AttioCta {...ctaSample} />
      <AttioFooter {...footerSample} />
    </div>
  );
}
