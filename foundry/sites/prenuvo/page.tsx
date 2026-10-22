// The Oriel landing page (recreating prenuvo.com), built only from this site's blocks with their
// demo content. Light is the faithful mode: the night blocks force themselves dark. The hero is
// sticky and every block after it slides up over it; the three scan panels pin and stack.
import { PrenuvoFooter } from "@foundry/prenuvo-footer";
import { PrenuvoHeader } from "@foundry/prenuvo-header";
import { PrenuvoHero } from "@foundry/prenuvo-hero";
import { PrenuvoMemberships } from "@foundry/prenuvo-memberships";
import { PrenuvoMri } from "@foundry/prenuvo-mri";
import { PrenuvoPanels } from "@foundry/prenuvo-panels";
import { PrenuvoPress } from "@foundry/prenuvo-press";
import { PrenuvoProcess } from "@foundry/prenuvo-process";
import { PrenuvoSmoothScroll } from "@foundry/prenuvo-smooth-scroll";
import { PrenuvoTeam } from "@foundry/prenuvo-team";
import { PrenuvoTestimonial } from "@foundry/prenuvo-testimonial";
import { footerSample } from "./prenuvo-footer/prenuvo-footer.demo";
import { headerSample } from "./prenuvo-header/prenuvo-header.demo";
import { heroSample } from "./prenuvo-hero/prenuvo-hero.demo";
import { membershipsSample } from "./prenuvo-memberships/prenuvo-memberships.demo";
import { mriSample } from "./prenuvo-mri/prenuvo-mri.demo";
import { panelsSample } from "./prenuvo-panels/prenuvo-panels.demo";
import { pressSample } from "./prenuvo-press/prenuvo-press.demo";
import { processSample } from "./prenuvo-process/prenuvo-process.demo";
import { teamSample } from "./prenuvo-team/prenuvo-team.demo";
import { testimonialSample } from "./prenuvo-testimonial/prenuvo-testimonial.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <PrenuvoSmoothScroll />
      <PrenuvoHeader {...headerSample} />
      <PrenuvoHero {...heroSample} />
      <PrenuvoMri {...mriSample} />
      <PrenuvoPanels {...panelsSample} />
      <PrenuvoTestimonial {...testimonialSample} />
      <PrenuvoTeam {...teamSample} />
      <PrenuvoPress {...pressSample} />
      <PrenuvoProcess {...processSample} />
      <PrenuvoMemberships {...membershipsSample} />
      <PrenuvoFooter {...footerSample} />
    </div>
  );
}
