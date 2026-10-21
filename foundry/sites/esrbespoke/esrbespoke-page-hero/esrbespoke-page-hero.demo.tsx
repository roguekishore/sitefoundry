import { EsrbespokePageHero, type EsrbespokePageHeroProps } from "./esrbespoke-page-hero";

export const servicesHeroSample: EsrbespokePageHeroProps = {
  title: "Beyond the brief",
  note: "Thirty years of handing back cars better than their owners remembered them.",
  arrowHref: "#offer",
};

export const partnersHeroSample: EsrbespokePageHeroProps = {
  title: "Trusted by the makers",
  note: "One of the best-equipped finish and repair workshops in the west.",
  arrowHref: "#partnerships",
};

export const aboutHeroSample: EsrbespokePageHeroProps = {
  title: "Careful hands since 1991",
  note: "It shows in the small things we fix and in how we look after the people who own them.",
  arrowHref: "#partner",
};

export const contactHeroSample: EsrbespokePageHeroProps = {
  title: "Talk to the workshop",
  note: "Questions, quotes or a car that needs looking at: we would like to hear from you.",
  arrowHref: "#enquiries",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <EsrbespokePageHero {...servicesHeroSample} />
      <div className="h-svh" />
    </div>
  );
}
