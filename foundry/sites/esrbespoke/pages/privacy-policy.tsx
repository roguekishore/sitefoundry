// The privacy policy page (recreating esrbespoke.au/privacy-policy), on charcoal: the title as an
// opening paragraph and the policy as long text, built from this site's blocks with their demo
// content.
import { EsrbespokeFooter } from "@foundry/esrbespoke-footer";
import { EsrbespokeHeader } from "@foundry/esrbespoke-header";
import { EsrbespokeSmoothScroll } from "@foundry/esrbespoke-smooth-scroll";
import { footerSample } from "../esrbespoke-footer/esrbespoke-footer.demo";
import { headerSampleFor } from "../esrbespoke-header/esrbespoke-header.demo";
import { EsrbespokeProse } from "@foundry/esrbespoke-prose";
import { EsrbespokeStatement } from "@foundry/esrbespoke-statement";
import { policySample } from "../esrbespoke-prose/esrbespoke-prose.demo";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative bg-background text-foreground">
      <EsrbespokeSmoothScroll />
      <EsrbespokeHeader {...headerSampleFor("", "charcoal")} />
      <main className="relative z-10 bg-background">
        <EsrbespokeStatement placement="page-top" tone="charcoal" text="Marlowe Coachworks privacy policy" />
        <EsrbespokeProse {...policySample} />
      </main>
      <EsrbespokeFooter {...footerSample} reveal tone="dark" />
    </div>
  );
}
