// The Calvera landing page (recreating ledup.pt), built only from this site's blocks with
// their demo content. Light is the faithful mode. The header is fixed and floats over the
// hero; Lenis smooths the wheel, as the original's smooth-scroll wrapper does.
import { LedupAbout } from "@foundry/ledup-about";
import { LedupFooter } from "@foundry/ledup-footer";
import { LedupHeader } from "@foundry/ledup-header";
import { LedupHero } from "@foundry/ledup-hero";
import { LedupHighlights } from "@foundry/ledup-highlights";
import { LedupProjects } from "@foundry/ledup-projects";
import { LedupSmoothScroll } from "@foundry/ledup-smooth-scroll";
import { LedupValues } from "@foundry/ledup-values";
import { aboutSample } from "./ledup-about/ledup-about.demo";
import { footerSample } from "./ledup-footer/ledup-footer.demo";
import { headerSample } from "./ledup-header/ledup-header.demo";
import { heroSample } from "./ledup-hero/ledup-hero.demo";
import { highlightsSample } from "./ledup-highlights/ledup-highlights.demo";
import { projectsSample } from "./ledup-projects/ledup-projects.demo";
import { valuesSample } from "./ledup-values/ledup-values.demo";

export default function Page() {
  return (
    <div className="bg-background font-sans text-foreground">
      <LedupSmoothScroll />
      <LedupHeader {...headerSample} />
      <LedupHero {...heroSample} />
      <LedupHighlights {...highlightsSample} />
      <LedupProjects {...projectsSample} />
      <LedupAbout {...aboutSample} />
      <LedupValues {...valuesSample} />
      <LedupFooter {...footerSample} />
    </div>
  );
}
