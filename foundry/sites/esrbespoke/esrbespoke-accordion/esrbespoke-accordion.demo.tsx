import { EsrbespokeAccordion, type EsrbespokeAccordionProps } from "./esrbespoke-accordion";

export const servicesAccordionSample: EsrbespokeAccordionProps = {
  label: "Services",
  items: [
    { title: "Insurer-approved repairs", body: "We work with the major insurers directly, so an approved repair starts the day your car arrives and is finished to the maker's method, not the cheapest one." },
    { title: "Claim handling, start to finish", body: "One person looks after your claim from the first photograph to the final invoice and tells you what is happening before you think to ask." },
    { title: "Private restoration commissions", body: "For owners who would rather not claim, or whose car needs more than a repair: a fixed scope, a fixed price and photographs at every stage." },
    { title: "Paint correction, ceramic and clear-film protection", body: "Machine correction in a dust-free booth, then a ceramic coat or a clear film cut to the panel, fitted by the people who painted it." },
    { title: "Enclosed transport and collection", body: "Covered, insured transport to and from the workshop, with a handover at your door." },
    { title: "Loan cars of a matching standard", body: "A car worth driving while yours is with us, for as long as the work takes." },
  ],
};

export const differenceAccordionSample: EsrbespokeAccordionProps = {
  label: "The Marlowe way",
  items: [
    { title: "Equipment", body: "Measuring rigs, jigs and welders specified by each maker, kept calibrated and used for every car, not only the difficult ones." },
    { title: "Guarantee", body: "Our work carries a lifetime guarantee, on top of the maker's own warranty, which genuine parts keep intact." },
    { title: "Training", body: "Every technician is trained and re-certified on the makers' current methods each year." },
    { title: "A documented process you can follow", body: "Each stage of the repair is photographed and signed off, and you can see the record whenever you like." },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background pt-16 text-foreground">
      <EsrbespokeAccordion {...servicesAccordionSample} />
      <EsrbespokeAccordion {...differenceAccordionSample} />
    </div>
  );
}
