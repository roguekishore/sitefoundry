// The whole Increase recreation (as "Cairn", a made-up API bank), built only from this
// site's blocks with each block's demo content. Light is the faithful mode: the engineering
// band, the announcement cards and the footer force themselves dark.
import { IncreaseAnnouncement } from "@foundry/increase-announcement";
import { IncreaseCustomers } from "@foundry/increase-customers";
import { IncreaseDevelopers } from "@foundry/increase-developers";
import { IncreaseFooter } from "@foundry/increase-footer";
import { IncreaseHeader } from "@foundry/increase-header";
import { IncreaseHero } from "@foundry/increase-hero";
import { IncreaseLogos } from "@foundry/increase-logos";
import { IncreaseProducts } from "@foundry/increase-products";
import { IncreaseStats } from "@foundry/increase-stats";
import { IncreaseTeam } from "@foundry/increase-team";
import { IncreaseTestimonial } from "@foundry/increase-testimonial";
import { IncreaseUpdates } from "@foundry/increase-updates";
import { announcementSample } from "./increase-announcement/increase-announcement.demo";
import { customersSample } from "./increase-customers/increase-customers.demo";
import { developersSample } from "./increase-developers/increase-developers.demo";
import { footerSample } from "./increase-footer/increase-footer.demo";
import { headerSample } from "./increase-header/increase-header.demo";
import { heroSample } from "./increase-hero/increase-hero.demo";
import { logosSample } from "./increase-logos/increase-logos.demo";
import { productsSample } from "./increase-products/increase-products.demo";
import { statsSample } from "./increase-stats/increase-stats.demo";
import { teamSample } from "./increase-team/increase-team.demo";
import { testimonialSample } from "./increase-testimonial/increase-testimonial.demo";
import { updatesSample } from "./increase-updates/increase-updates.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <IncreaseHeader {...headerSample} />
      <IncreaseHero {...heroSample} />
      <IncreaseLogos {...logosSample} />
      <IncreaseAnnouncement {...announcementSample} />
      <IncreaseProducts {...productsSample} />
      <IncreaseTestimonial {...testimonialSample} />
      <IncreaseTeam {...teamSample} />
      <IncreaseStats {...statsSample} />
      <IncreaseDevelopers {...developersSample} />
      <IncreaseCustomers {...customersSample} />
      <IncreaseAnnouncement {...announcementSample} />
      <IncreaseUpdates {...updatesSample} />
      <IncreaseFooter {...footerSample} />
    </div>
  );
}
