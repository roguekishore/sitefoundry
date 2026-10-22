// The whole Aspen Search recreation (as the fictional "Corvo Talent"), built only from this
// site's blocks with each block's demo content. Shown in the gallery as "aspensearch — full
// page". Light is the faithful mode. Lenis smooth scroll runs on the page, as on the original.
import { AspensearchAbout } from "@foundry/aspensearch-about";
import { AspensearchClients } from "@foundry/aspensearch-clients";
import { AspensearchCta } from "@foundry/aspensearch-cta";
import { AspensearchFooter } from "@foundry/aspensearch-footer";
import { AspensearchHeader } from "@foundry/aspensearch-header";
import { AspensearchHero } from "@foundry/aspensearch-hero";
import { AspensearchServices } from "@foundry/aspensearch-services";
import { AspensearchSmoothScroll } from "@foundry/aspensearch-smooth-scroll";
import { AspensearchTeam } from "@foundry/aspensearch-team";
import { AspensearchTestimonials } from "@foundry/aspensearch-testimonials";
import { aboutSample } from "./aspensearch-about/aspensearch-about.demo";
import { clientsSample } from "./aspensearch-clients/aspensearch-clients.demo";
import { ctaSample } from "./aspensearch-cta/aspensearch-cta.demo";
import { footerSample } from "./aspensearch-footer/aspensearch-footer.demo";
import { headerSample } from "./aspensearch-header/aspensearch-header.demo";
import { heroSample } from "./aspensearch-hero/aspensearch-hero.demo";
import { servicesSample } from "./aspensearch-services/aspensearch-services.demo";
import { teamSample } from "./aspensearch-team/aspensearch-team.demo";
import { testimonialsSample } from "./aspensearch-testimonials/aspensearch-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <AspensearchSmoothScroll />
      <AspensearchHeader {...headerSample} />
      <AspensearchHero {...heroSample} />
      <AspensearchAbout {...aboutSample} />
      <AspensearchServices {...servicesSample} />
      <AspensearchClients {...clientsSample} />
      <AspensearchTestimonials {...testimonialsSample} />
      <AspensearchTeam {...teamSample} />
      <AspensearchCta {...ctaSample} />
      <AspensearchFooter {...footerSample} />
    </div>
  );
}
