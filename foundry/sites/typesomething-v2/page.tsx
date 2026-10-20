// The whole TypeSomething recreation, built only from this site's blocks, with each block's demo
// content (a fictional product, Quietpage). Light is the faithful mode; the CTA panel is dark in both.
import { TypesomethingV2Chat } from "@foundry/typesomething-v2-chat";
import { TypesomethingV2Cta } from "@foundry/typesomething-v2-cta";
import { TypesomethingV2Features } from "@foundry/typesomething-v2-features";
import { TypesomethingV2Footer } from "@foundry/typesomething-v2-footer";
import { TypesomethingV2Header } from "@foundry/typesomething-v2-header";
import { TypesomethingV2Hero } from "@foundry/typesomething-v2-hero";
import { TypesomethingV2Reasons } from "@foundry/typesomething-v2-reasons";
import { TypesomethingV2Steps } from "@foundry/typesomething-v2-steps";
import { chatSample } from "./typesomething-v2-chat/typesomething-v2-chat.demo";
import { ctaSample } from "./typesomething-v2-cta/typesomething-v2-cta.demo";
import { featuresSample } from "./typesomething-v2-features/typesomething-v2-features.demo";
import { footerSample } from "./typesomething-v2-footer/typesomething-v2-footer.demo";
import { headerSample } from "./typesomething-v2-header/typesomething-v2-header.demo";
import { heroSample } from "./typesomething-v2-hero/typesomething-v2-hero.demo";
import { reasonsSample } from "./typesomething-v2-reasons/typesomething-v2-reasons.demo";
import { stepsSample } from "./typesomething-v2-steps/typesomething-v2-steps.demo";

export default function Page() {
  return (
    // the header sits over the paper, like the original; its slot is part of the hero's ground
    <div className="bg-muted">
      <TypesomethingV2Header {...headerSample} />
      <TypesomethingV2Hero {...heroSample} />
      <TypesomethingV2Steps {...stepsSample} />
      <TypesomethingV2Chat {...chatSample} joined />
      <TypesomethingV2Features {...featuresSample} />
      <TypesomethingV2Reasons {...reasonsSample} />
      <TypesomethingV2Cta {...ctaSample} />
      <TypesomethingV2Footer {...footerSample} />
    </div>
  );
}
