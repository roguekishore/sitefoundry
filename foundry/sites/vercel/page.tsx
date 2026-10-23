// The whole Vercel recreation, built only from this site's blocks, with each block's demo
// content (a made-up cloud for agents, Halyard). Light is the faithful mode.
import { VercelCase } from "@foundry/vercel-case";
import { VercelCta } from "@foundry/vercel-cta";
import { VercelFooter } from "@foundry/vercel-footer";
import { VercelHeader } from "@foundry/vercel-header";
import { VercelHero } from "@foundry/vercel-hero";
import { VercelShipped } from "@foundry/vercel-shipped";
import { caseAgentsSample, caseAppsSample, casePlatformsSample } from "./vercel-case/vercel-case.demo";
import { ctaSample } from "./vercel-cta/vercel-cta.demo";
import { footerSample } from "./vercel-footer/vercel-footer.demo";
import { headerSample } from "./vercel-header/vercel-header.demo";
import { heroSample } from "./vercel-hero/vercel-hero.demo";
import { shippedSample } from "./vercel-shipped/vercel-shipped.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <VercelHeader {...headerSample} />
      <VercelHero {...heroSample} />
      {/* the first story sits further below the hero than the stories sit below each other */}
      <VercelCase {...caseAgentsSample} className="pt-44 lg:pt-52" />
      <VercelCase {...caseAppsSample} />
      <VercelCase {...casePlatformsSample} />
      <VercelShipped {...shippedSample} />
      <VercelCta {...ctaSample} />
      <VercelFooter {...footerSample} />
    </div>
  );
}
