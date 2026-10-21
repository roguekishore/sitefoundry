// The BREM landing page (recreating aat-architecten.be), built only from this site's blocks with
// their demo content. Light is the faithful mode. A white cover with a dot hides the page for
// ~1s on load; from 1024px the header lies over the window-tall hero; Lenis smooths the wheel.
import { AatArchitectenAbout } from "@foundry/aat-architecten-about";
import { AatArchitectenFooter } from "@foundry/aat-architecten-footer";
import { AatArchitectenHeader } from "@foundry/aat-architecten-header";
import { AatArchitectenHero } from "@foundry/aat-architecten-hero";
import { AatArchitectenLoader } from "@foundry/aat-architecten-loader";
import { AatArchitectenProjects } from "@foundry/aat-architecten-projects";
import { AatArchitectenSmoothScroll } from "@foundry/aat-architecten-smooth-scroll";
import { aboutSample } from "./aat-architecten-about/aat-architecten-about.demo";
import { footerSample } from "./aat-architecten-footer/aat-architecten-footer.demo";
import { headerSample } from "./aat-architecten-header/aat-architecten-header.demo";
import { heroSample } from "./aat-architecten-hero/aat-architecten-hero.demo";
import { projectsSample } from "./aat-architecten-projects/aat-architecten-projects.demo";

export default function Page() {
  return (
    <div className="relative bg-background text-foreground">
      <AatArchitectenSmoothScroll />
      <AatArchitectenLoader />
      <AatArchitectenHeader {...headerSample} />
      <AatArchitectenHero {...heroSample} />
      <AatArchitectenProjects {...projectsSample} />
      <AatArchitectenAbout {...aboutSample} />
      <AatArchitectenFooter {...footerSample} />
    </div>
  );
}
