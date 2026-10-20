// The whole HHHusher landing recreation, built only from this site's blocks with each block's
// demo content (Rimlock and the Veil are made up). Light is the faithful mode: the hero, mic
// setups, header and footer force themselves dark; the tan bands are the theme's secondary.
import { HhhusherFaq } from "@foundry/hhhusher-faq";
import { HhhusherFeatures } from "@foundry/hhhusher-features";
import { HhhusherFooter } from "@foundry/hhhusher-footer";
import { HhhusherHeader } from "@foundry/hhhusher-header";
import { HhhusherHero } from "@foundry/hhhusher-hero";
import { HhhusherOverview } from "@foundry/hhhusher-overview";
import { HhhusherReviews } from "@foundry/hhhusher-reviews";
import { HhhusherSetups } from "@foundry/hhhusher-setups";
import { HhhusherSmoothScroll } from "@foundry/hhhusher-smooth-scroll";
import { HhhusherStatement } from "@foundry/hhhusher-statement";
import { faqSample } from "./hhhusher-faq/hhhusher-faq.demo";
import { featuresSample } from "./hhhusher-features/hhhusher-features.demo";
import { footerSample } from "./hhhusher-footer/hhhusher-footer.demo";
import { headerSample } from "./hhhusher-header/hhhusher-header.demo";
import { heroSample } from "./hhhusher-hero/hhhusher-hero.demo";
import { overviewSample } from "./hhhusher-overview/hhhusher-overview.demo";
import { reviewsSample } from "./hhhusher-reviews/hhhusher-reviews.demo";
import { setupsSample } from "./hhhusher-setups/hhhusher-setups.demo";
import { statementSample } from "./hhhusher-statement/hhhusher-statement.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HhhusherSmoothScroll />
      <HhhusherHeader {...headerSample} />
      <HhhusherHero {...heroSample} />
      <HhhusherStatement {...statementSample} />
      <HhhusherOverview {...overviewSample} />
      <HhhusherFeatures {...featuresSample} />
      <HhhusherSetups {...setupsSample} />
      <HhhusherFaq {...faqSample} />
      <HhhusherReviews {...reviewsSample} />
      <HhhusherFooter {...footerSample} />
    </div>
  );
}
