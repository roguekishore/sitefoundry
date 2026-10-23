// The whole Ezra recreation, built only from this site's blocks, with each block's demo
// content (a made-up preventive-MRI clinic, Kestrel, shown beside a partner, Alder). Light is
// the faithful mode; the stories band and footer are midnight in both.
import { EzraFooter } from "@foundry/ezra-footer";
import { EzraHeader } from "@foundry/ezra-header";
import { EzraHero } from "@foundry/ezra-hero";
import { EzraNote } from "@foundry/ezra-note";
import { EzraPress } from "@foundry/ezra-press";
import { EzraPricing } from "@foundry/ezra-pricing";
import { EzraScan } from "@foundry/ezra-scan";
import { EzraStat } from "@foundry/ezra-stat";
import { EzraSteps } from "@foundry/ezra-steps";
import { EzraStories } from "@foundry/ezra-stories";
import { footerSample } from "./ezra-footer/ezra-footer.demo";
import { headerSample } from "./ezra-header/ezra-header.demo";
import { heroSample } from "./ezra-hero/ezra-hero.demo";
import { noteSample } from "./ezra-note/ezra-note.demo";
import { pressSample } from "./ezra-press/ezra-press.demo";
import { pricingSample } from "./ezra-pricing/ezra-pricing.demo";
import { scanSample } from "./ezra-scan/ezra-scan.demo";
import { statSample } from "./ezra-stat/ezra-stat.demo";
import { stepsSample } from "./ezra-steps/ezra-steps.demo";
import { storiesSample } from "./ezra-stories/ezra-stories.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <EzraHeader {...headerSample} />
      <EzraHero {...heroSample} />
      <EzraPress {...pressSample} />
      <EzraScan {...scanSample} />
      <EzraStat {...statSample} />
      <EzraSteps {...stepsSample} />
      <EzraNote {...noteSample} />
      <EzraPricing {...pricingSample} />
      <EzraStories {...storiesSample} />
      <EzraFooter {...footerSample} />
    </div>
  );
}
