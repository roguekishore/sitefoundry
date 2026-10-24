// The whole cfs recreation ("Brightwater Fusion Works", a made-up fusion company), built
// only from this site's blocks with each block's demo content. Light is the faithful mode:
// a tan page with navy bands (the hero, quote card, footer and notice are `dark` subtrees).
import { CfsBreakthrough } from "@foundry/cfs-breakthrough";
import { CfsCookieNotice } from "@foundry/cfs-cookie-notice";
import { CfsFooter } from "@foundry/cfs-footer";
import { CfsHeader } from "@foundry/cfs-header";
import { CfsHero } from "@foundry/cfs-hero";
import { CfsValues } from "@foundry/cfs-values";
import { breakthroughSample } from "./cfs-breakthrough/cfs-breakthrough.demo";
import { cookieNoticeSample } from "./cfs-cookie-notice/cfs-cookie-notice.demo";
import { footerSample } from "./cfs-footer/cfs-footer.demo";
import { headerSample } from "./cfs-header/cfs-header.demo";
import { heroSample } from "./cfs-hero/cfs-hero.demo";
import { valuesSample } from "./cfs-values/cfs-values.demo";

export default function Page() {
  return (
    <div className="relative bg-background">
      {/* the header sits over the top of the hero and scrolls away with it */}
      <CfsHeader {...headerSample} />
      <CfsHero {...heroSample} />
      <CfsBreakthrough {...breakthroughSample} />
      {/* the breakthrough's bottom padding already spaces the two */}
      <CfsValues {...valuesSample} className="pt-0" />
      <CfsFooter {...footerSample} />
      <CfsCookieNotice {...cookieNoticeSample} />
    </div>
  );
}
