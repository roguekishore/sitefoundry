// The whole mymind recreation ("nook", a made-up product), built only from this site's
// blocks with each block's demo content. Light is the faithful mode.
import { MymindAi } from "@foundry/mymind-ai";
import { MymindClosing } from "@foundry/mymind-closing";
import { MymindExtension } from "@foundry/mymind-extension";
import { MymindFeatureTabs } from "@foundry/mymind-feature-tabs";
import { MymindFooter } from "@foundry/mymind-footer";
import { MymindHeader } from "@foundry/mymind-header";
import { MymindHero } from "@foundry/mymind-hero";
import { MymindManifesto } from "@foundry/mymind-manifesto";
import { MymindOasis } from "@foundry/mymind-oasis";
import { MymindSearch } from "@foundry/mymind-search";
import { MymindTestimonials } from "@foundry/mymind-testimonials";
import { MymindUseCases } from "@foundry/mymind-use-cases";
import { MymindWelcome } from "@foundry/mymind-welcome";
import { aiSample } from "./mymind-ai/mymind-ai.demo";
import { closingSample } from "./mymind-closing/mymind-closing.demo";
import { extensionSample } from "./mymind-extension/mymind-extension.demo";
import { featureTabsSample } from "./mymind-feature-tabs/mymind-feature-tabs.demo";
import { footerSample } from "./mymind-footer/mymind-footer.demo";
import { headerSample } from "./mymind-header/mymind-header.demo";
import { heroSample } from "./mymind-hero/mymind-hero.demo";
import { manifestoSample } from "./mymind-manifesto/mymind-manifesto.demo";
import { oasisSample } from "./mymind-oasis/mymind-oasis.demo";
import { searchSample } from "./mymind-search/mymind-search.demo";
import { testimonialsSample } from "./mymind-testimonials/mymind-testimonials.demo";
import { useCasesSample } from "./mymind-use-cases/mymind-use-cases.demo";
import { welcomeSample } from "./mymind-welcome/mymind-welcome.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <MymindHeader {...headerSample} />
      <MymindHero {...heroSample} />
      <MymindManifesto {...manifestoSample} />
      <MymindWelcome {...welcomeSample} />
      <MymindExtension {...extensionSample} />
      <MymindAi {...aiSample} />
      <MymindSearch {...searchSample} />
      <MymindOasis {...oasisSample} after={<MymindFeatureTabs {...featureTabsSample} />} />
      <MymindTestimonials {...testimonialsSample} />
      <MymindUseCases {...useCasesSample} />
      <MymindClosing {...closingSample} />
      <MymindFooter {...footerSample} />
    </div>
  );
}
