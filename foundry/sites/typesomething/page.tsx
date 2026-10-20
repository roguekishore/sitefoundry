// The whole TypeSomething recreation (for the fictional Paperkite), built only from this site's
// blocks with each block's demo content. Light is the faithful mode; the CTA card forces dark.
import { TypesomethingChat } from "@foundry/typesomething-chat";
import { TypesomethingCta } from "@foundry/typesomething-cta";
import { TypesomethingFeatures } from "@foundry/typesomething-features";
import { TypesomethingFooter } from "@foundry/typesomething-footer";
import { TypesomethingHeader } from "@foundry/typesomething-header";
import { TypesomethingHero } from "@foundry/typesomething-hero";
import { TypesomethingReasons } from "@foundry/typesomething-reasons";
import { TypesomethingSteps } from "@foundry/typesomething-steps";
import { chatSample } from "./typesomething-chat/typesomething-chat.demo";
import { ctaSample } from "./typesomething-cta/typesomething-cta.demo";
import { featuresSample } from "./typesomething-features/typesomething-features.demo";
import { footerSample } from "./typesomething-footer/typesomething-footer.demo";
import { headerSample } from "./typesomething-header/typesomething-header.demo";
import { heroSample } from "./typesomething-hero/typesomething-hero.demo";
import { reasonsSample } from "./typesomething-reasons/typesomething-reasons.demo";
import { stepsSample } from "./typesomething-steps/typesomething-steps.demo";

export default function Page() {
  return (
    <div className="bg-muted">
      <TypesomethingHeader {...headerSample} className="-mb-[5.5rem]" />
      <TypesomethingHero {...heroSample} className="pt-[5.5rem]" />
      <TypesomethingSteps {...stepsSample} />
      <TypesomethingChat {...chatSample} className="pt-0 lg:pt-0" />
      <TypesomethingFeatures {...featuresSample} />
      <TypesomethingReasons {...reasonsSample} />
      <TypesomethingCta {...ctaSample} />
      <TypesomethingFooter {...footerSample} />
    </div>
  );
}
