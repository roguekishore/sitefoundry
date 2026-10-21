// The Aldermoor Spatial Practice landing page (recreating kononenkogroup.com), built only from
// this site's blocks with their demo content. Light is the faithful mode; the second half of
// the page is black because those blocks carry the dark scope. The header is fixed and inverts
// what is under it; Lenis smooths the wheel, as on the original.
import { KononenkogroupAbout } from "@foundry/kononenkogroup-about";
import { KononenkogroupClients } from "@foundry/kononenkogroup-clients";
import { KononenkogroupFooter } from "@foundry/kononenkogroup-footer";
import { KononenkogroupHeader } from "@foundry/kononenkogroup-header";
import { KononenkogroupHero } from "@foundry/kononenkogroup-hero";
import { KononenkogroupOffices } from "@foundry/kononenkogroup-offices";
import { KononenkogroupPeople } from "@foundry/kononenkogroup-people";
import { KononenkogroupPrinciples } from "@foundry/kononenkogroup-principles";
import { KononenkogroupProcess } from "@foundry/kononenkogroup-process";
import { KononenkogroupProjects } from "@foundry/kononenkogroup-projects";
import { KononenkogroupSmoothScroll } from "@foundry/kononenkogroup-smooth-scroll";
import { KononenkogroupStatement } from "@foundry/kononenkogroup-statement";
import { KononenkogroupStats } from "@foundry/kononenkogroup-stats";
import { aboutSample } from "./kononenkogroup-about/kononenkogroup-about.demo";
import { clientsSample } from "./kononenkogroup-clients/kononenkogroup-clients.demo";
import { footerSample } from "./kononenkogroup-footer/kononenkogroup-footer.demo";
import { headerSample } from "./kononenkogroup-header/kononenkogroup-header.demo";
import { heroSample } from "./kononenkogroup-hero/kononenkogroup-hero.demo";
import { officesSample } from "./kononenkogroup-offices/kononenkogroup-offices.demo";
import { peopleSample } from "./kononenkogroup-people/kononenkogroup-people.demo";
import { principlesSample } from "./kononenkogroup-principles/kononenkogroup-principles.demo";
import { processSample } from "./kononenkogroup-process/kononenkogroup-process.demo";
import { projectsSample } from "./kononenkogroup-projects/kononenkogroup-projects.demo";
import { statementSample } from "./kononenkogroup-statement/kononenkogroup-statement.demo";
import { statsSample } from "./kononenkogroup-stats/kononenkogroup-stats.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <KononenkogroupSmoothScroll />
      <KononenkogroupHeader {...headerSample} />
      <KononenkogroupHero {...heroSample} />
      <KononenkogroupStatement {...statementSample} />
      <KononenkogroupAbout {...aboutSample} />
      <KononenkogroupOffices {...officesSample} />
      <KononenkogroupProcess {...processSample} />
      <KononenkogroupProjects {...projectsSample} />
      <KononenkogroupPrinciples {...principlesSample} />
      <KononenkogroupPeople {...peopleSample} />
      <KononenkogroupStats {...statsSample} />
      <KononenkogroupClients {...clientsSample} />
      <KononenkogroupFooter {...footerSample} />
    </div>
  );
}
