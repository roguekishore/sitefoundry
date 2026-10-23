// The whole Plaid recreation, built only from this site's blocks, with each block's demo
// content (a made-up financial-data network, Halyard). Shown in the gallery as
// "plaid — full page". Light is the faithful mode.
import { PlaidContact } from "@foundry/plaid-contact";
import { PlaidDevelopers } from "@foundry/plaid-developers";
import { PlaidFeatureBand } from "@foundry/plaid-feature-band";
import { PlaidFooter } from "@foundry/plaid-footer";
import { PlaidHeader } from "@foundry/plaid-header";
import { PlaidHero } from "@foundry/plaid-hero";
import { PlaidNetwork } from "@foundry/plaid-network";
import { PlaidProducts } from "@foundry/plaid-products";
import { PlaidStories } from "@foundry/plaid-stories";
import { contactSample } from "./plaid-contact/plaid-contact.demo";
import { developersSample } from "./plaid-developers/plaid-developers.demo";
import { featureBandSample } from "./plaid-feature-band/plaid-feature-band.demo";
import { footerSample } from "./plaid-footer/plaid-footer.demo";
import { headerSample } from "./plaid-header/plaid-header.demo";
import { heroSample } from "./plaid-hero/plaid-hero.demo";
import { networkSample } from "./plaid-network/plaid-network.demo";
import { productsSample } from "./plaid-products/plaid-products.demo";
import { storiesSample } from "./plaid-stories/plaid-stories.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <PlaidHeader {...headerSample} />
      <PlaidHero {...heroSample} />
      <PlaidProducts {...productsSample} />
      <PlaidFeatureBand {...featureBandSample} />
      <PlaidNetwork {...networkSample} />
      <PlaidDevelopers {...developersSample} />
      <PlaidStories {...storiesSample} />
      <PlaidContact {...contactSample} />
      <PlaidFooter {...footerSample} overlap />
    </div>
  );
}
