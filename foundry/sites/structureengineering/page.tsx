// The Lintel Consulting Engineers landing page (recreating structureengineering.com.au), built
// only from this site's blocks with their demo content. Light is the faithful mode. The header
// is fixed and overlays the full-bleed hero.
import { StructureengineeringContact } from "@foundry/structureengineering-contact";
import { StructureengineeringFeature } from "@foundry/structureengineering-feature";
import { StructureengineeringFooter } from "@foundry/structureengineering-footer";
import { StructureengineeringHeader } from "@foundry/structureengineering-header";
import { StructureengineeringHero } from "@foundry/structureengineering-hero";
import { StructureengineeringIntro } from "@foundry/structureengineering-intro";
import { StructureengineeringPrinciple } from "@foundry/structureengineering-principle";
import { StructureengineeringStatement } from "@foundry/structureengineering-statement";
import { StructureengineeringWork } from "@foundry/structureengineering-work";
import { contactSample } from "./structureengineering-contact/structureengineering-contact.demo";
import { featureSample } from "./structureengineering-feature/structureengineering-feature.demo";
import { footerSample } from "./structureengineering-footer/structureengineering-footer.demo";
import { headerSample } from "./structureengineering-header/structureengineering-header.demo";
import { heroSample } from "./structureengineering-hero/structureengineering-hero.demo";
import { introSample } from "./structureengineering-intro/structureengineering-intro.demo";
import { principleSample } from "./structureengineering-principle/structureengineering-principle.demo";
import { statementSample } from "./structureengineering-statement/structureengineering-statement.demo";
import { workSample } from "./structureengineering-work/structureengineering-work.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <StructureengineeringHeader {...headerSample} />
      <StructureengineeringHero {...heroSample} />
      <StructureengineeringIntro {...introSample} />
      <StructureengineeringStatement {...statementSample} />
      <StructureengineeringPrinciple {...principleSample} />
      <StructureengineeringWork {...workSample} />
      <StructureengineeringFeature {...featureSample} />
      <StructureengineeringContact {...contactSample} />
      <StructureengineeringFooter {...footerSample} />
    </div>
  );
}
