import { EsrbespokeFeature, type EsrbespokeFeatureProps } from "./esrbespoke-feature";

export const guildSample: EsrbespokeFeatureProps = {
  title: "Halvard Lacquer Guild accredited",
  lead: "Marlowe holds full accreditation from the Halvard Lacquer Guild, a standard held by only a few workshops in the country.",
  rows: [
    { label: "Accreditation", items: ["The accreditation confirms that our structural methods, our measuring equipment and our materials all meet the guild's published repair standard, checked by an outside auditor every year."] },
    { label: "Method", items: ["Every repair follows the guild's written method by technicians it has trained, and each stage is recorded so it can be checked later."] },
    { label: "Our part", items: ["We keep the accreditation because it keeps us honest: the same care on every car, and a repaired car that is as safe and as valuable as it was."] },
  ],
};

export const paintSample: EsrbespokeFeatureProps = {
  title: "Northwind Paint Systems refinish partner",
  lead: "Marlowe is Northwind's reference refinish workshop for the region, and a place where their new finishes are tried before anyone else uses them.",
  rows: [
    { label: "Finish system", items: ["We use Northwind's waterborne premium line throughout: accurate colour matching, a deep, even finish and far less solvent in the air of the booth."] },
    { label: "Shared aims", items: ["The partnership is about more than paint: both of us want cleaner booths, longer-lasting finishes and repairs nobody can find."] },
    { label: "Reference work", items: ["As the reference workshop we show other refinishers what the system can do when every step is done properly."] },
  ],
};

export const studioSample: EsrbespokeFeatureProps = {
  title: "Marlowe Finish Studio",
  sticky: true,
  meta: [
    { text: "3 Tannery Row," },
    { text: "O'Connor WA 6163" },
    { label: "Phone:", text: "(08) 6100 4420", href: "tel:+61861004420" },
    { label: "Email:", text: "studio@marlowe.example", href: "mailto:studio@marlowe.example" },
  ],
  lead: "Opened in 2024, the Finish Studio is the newest part of Marlowe: a quiet, purpose-built space for paint, film and detailing work on the most exacting cars, with a private handover room and a single team that sees each car through from start to finish.",
  rows: [
    { label: "Specialities", items: ["Insurer-approved repairs, light to medium", "Claim handling with your insurer", "Private restoration commissions", "Loan cars of a matching standard", "Paint correction, ceramic and clear-film protection"] },
  ],
};

export const workshopSample: EsrbespokeFeatureProps = {
  title: "Marlowe Workshop",
  sticky: true,
  meta: [
    { text: "12 Quarry Lane," },
    { text: "North Fremantle WA 6159" },
    { label: "Phone:", text: "(08) 6100 4420", href: "tel:+61861004420" },
    { label: "Email:", text: "workshop@marlowe.example", href: "mailto:workshop@marlowe.example" },
  ],
  lead: "The Quarry Lane workshop is where Marlowe started and where most of the heavy work still happens: four thousand square metres of jigs, booths and measuring bays, the leadership team, and the people who have been doing this the longest.",
  rows: [
    { label: "Specialities", items: ["Insurer-approved repairs, light to heavy", "Claim handling with your insurer", "Loan cars of a matching standard", "Paint correction, ceramic and clear-film protection"] },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background pt-16 text-foreground">
      <EsrbespokeFeature {...guildSample} />
      <EsrbespokeFeature {...studioSample} />
    </div>
  );
}
