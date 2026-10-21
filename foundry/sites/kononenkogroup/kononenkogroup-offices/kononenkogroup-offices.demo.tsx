import { KononenkogroupOffices, type KononenkogroupOfficesProps } from "./kononenkogroup-offices";

const rows: [string, string, string][] = [
  ["Main studio", "Portugal, Lisbon", "52 Rua do Alecrim, 3F"],
  ["Design office", "Portugal, Porto", "118 Rua das Flores, 4"],
  ["Northern studio", "Denmark, Aarhus", "140 Jægergårdsgade, 1"],
  ["Site office", "Denmark, Copenhagen", "9 Havnegade, Unit 2"],
  ["Model workshop", "Portugal, Braga", "31 Rua do Souto, Yard"],
  ["Project office", "Denmark, Odense", "77 Vestergade, Room 12"],
  ["Interiors studio", "Portugal, Coimbra", "14 Rua Ferreira Borges"],
  ["Planning office", "Denmark, Aalborg", "23 Boulevarden, Suite 5"],
  ["Survey office", "Portugal, Faro", "6 Rua Santo António, 1F"],
  ["Site office", "Denmark, Esbjerg", "48 Kongensgade, Unit 7"],
  ["Archive", "Portugal, Évora", "19 Rua da República, B"],
  ["Liaison office", "Denmark, Roskilde", "3 Algade, Room 4"],
];

export const officesSample: KononenkogroupOfficesProps = {
  text: "Site studies, massing and elevations, planning applications, technical drawings, interiors and visualisation.",
  label: "Offices",
  offices: rows.map(([name, place, address]) => ({ name, place, address, href: "#map" })),
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <KononenkogroupOffices {...officesSample} />
    </div>
  );
}
