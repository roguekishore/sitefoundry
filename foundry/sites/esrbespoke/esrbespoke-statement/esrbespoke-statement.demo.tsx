import { EsrbespokeStatement, type EsrbespokeStatementProps } from "./esrbespoke-statement";

export const statementSample: EsrbespokeStatementProps = {
  label: "Guild accredited workshop",
  text: "Marlowe is one of a handful of workshops in the country accredited by the Halvard Lacquer Guild for structural and finish repair. The accreditation is earned, audited every year and kept by doing the work the way the original builders wrote it down: the same jigs, the same bonding methods, the same paint layers in the same order, until a repaired panel cannot be told from one that never left the line.",
};

export const servicesStatementSample: EsrbespokeStatementProps = {
  label: "Tailored work",
  tone: "dark",
  text: "We look after a car from the moment it is collected to the moment it is handed back. Small scuffs and complete structural rebuilds pass through the same hands, the same booths and the same checklist, and every stage is signed off by someone who has done that stage for decades. The result is a car that drives, sounds and looks the way its maker intended, and an owner who was kept informed at every step without having to ask.",
};

export const careersStatementSample: EsrbespokeStatementProps = {
  placement: "page-top",
  tone: "charcoal",
  text: "Marlowe is always looking for careful hands to join the workshop and grow with it. We also take on school-leavers for paid placements and run full apprenticeships for the next generation of panel, paint and trim people.",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <EsrbespokeStatement {...statementSample} />
      <EsrbespokeStatement {...servicesStatementSample} />
      <EsrbespokeStatement {...careersStatementSample} />
    </div>
  );
}
