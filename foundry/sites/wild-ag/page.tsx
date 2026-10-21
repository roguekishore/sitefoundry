// The Talgrund AG landing page (recreating wild-ag.ch), built only from this site's blocks with
// their demo content. Light is the faithful mode. An intro curtain lifts away on load; the
// header overlays the fixed hero footage; rounded bands overlap the section after them.
import { WildAgContact } from "@foundry/wild-ag-contact";
import { WildAgFilm } from "@foundry/wild-ag-film";
import { WildAgFooter } from "@foundry/wild-ag-footer";
import { WildAgHeader } from "@foundry/wild-ag-header";
import { WildAgHero } from "@foundry/wild-ag-hero";
import { WildAgLoader } from "@foundry/wild-ag-loader";
import { WildAgPartners } from "@foundry/wild-ag-partners";
import { WildAgPortrait } from "@foundry/wild-ag-portrait";
import { WildAgProcess } from "@foundry/wild-ag-process";
import { WildAgProjects } from "@foundry/wild-ag-projects";
import { WildAgServices } from "@foundry/wild-ag-services";
import { WildAgStatement } from "@foundry/wild-ag-statement";
import { WildAgTeam } from "@foundry/wild-ag-team";
import { contactSample } from "./wild-ag-contact/wild-ag-contact.demo";
import { filmSample } from "./wild-ag-film/wild-ag-film.demo";
import { footerSample } from "./wild-ag-footer/wild-ag-footer.demo";
import { headerSample } from "./wild-ag-header/wild-ag-header.demo";
import { heroSample } from "./wild-ag-hero/wild-ag-hero.demo";
import { loaderSample } from "./wild-ag-loader/wild-ag-loader.demo";
import { partnersSample } from "./wild-ag-partners/wild-ag-partners.demo";
import { portraitSample } from "./wild-ag-portrait/wild-ag-portrait.demo";
import { processSample } from "./wild-ag-process/wild-ag-process.demo";
import { projectsSample } from "./wild-ag-projects/wild-ag-projects.demo";
import { servicesSample } from "./wild-ag-services/wild-ag-services.demo";
import { statementSample } from "./wild-ag-statement/wild-ag-statement.demo";
import { teamSample } from "./wild-ag-team/wild-ag-team.demo";

export default function Page() {
  return (
    <div id="top" className="bg-background text-foreground">
      <WildAgLoader {...loaderSample} />
      <WildAgHeader {...headerSample} />
      <WildAgHero {...heroSample} />
      <WildAgPortrait {...portraitSample} />
      <WildAgTeam {...teamSample} />
      <WildAgStatement {...statementSample} />
      <WildAgServices {...servicesSample} />
      <WildAgProjects {...projectsSample} />
      <WildAgPartners {...partnersSample} tuck />
      <WildAgProcess {...processSample} />
      <WildAgFilm {...filmSample} />
      <WildAgContact {...contactSample} />
      <WildAgFooter {...footerSample} />
    </div>
  );
}
