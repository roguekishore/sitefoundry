// The whole Form Energy recreation (as "Tidewell Power", a made-up maker of week-long salt
// batteries for the grid), built only from this site's blocks with each block's demo content.
// Light is the faithful mode. The header lies over the hero inside one relative wrapper, so
// it scrolls away with it and its phone menu isn't clipped by the hero.
import { FormenergyAbout } from "@foundry/formenergy-about";
import { FormenergyFooter } from "@foundry/formenergy-footer";
import { FormenergyHeader } from "@foundry/formenergy-header";
import { FormenergyHero } from "@foundry/formenergy-hero";
import { FormenergyHiring } from "@foundry/formenergy-hiring";
import { FormenergyNews } from "@foundry/formenergy-news";
import { FormenergySplit } from "@foundry/formenergy-split";
import { aboutSample } from "./formenergy-about/formenergy-about.demo";
import { footerSample } from "./formenergy-footer/formenergy-footer.demo";
import { headerSample } from "./formenergy-header/formenergy-header.demo";
import { heroSample } from "./formenergy-hero/formenergy-hero.demo";
import { hiringSample } from "./formenergy-hiring/formenergy-hiring.demo";
import { newsSample } from "./formenergy-news/formenergy-news.demo";
import { cellSample, worksSample } from "./formenergy-split/formenergy-split.demo";

export default function Page() {
  return (
    <div id="top" className="bg-background text-foreground">
      <div className="relative">
        <FormenergyHeader {...headerSample} />
        <FormenergyHero {...heroSample} />
      </div>
      <main>
        <FormenergySplit {...cellSample} />
        <FormenergySplit {...worksSample} />
        <FormenergyAbout {...aboutSample} />
        <FormenergyHiring {...hiringSample} />
        <FormenergyNews {...newsSample} />
      </main>
      <FormenergyFooter {...footerSample} />
    </div>
  );
}
