import { EsrbespokeTable, type EsrbespokeTableProps } from "./esrbespoke-table";

export const teamSample: EsrbespokeTableProps = {
  label: "Leadership",
  rows: [
    { cells: ["Petra Marlowe", "Managing director"] },
    { cells: ["Owen Achterberg", "Workshop manager"] },
    { cells: ["Leila Haddad", "Client and insurer relations"] },
    { cells: ["Tomasz Wren", "Communications"] },
    { cells: ["Grace Okonkwo", "Lead assessor"] },
    { cells: ["Daniel Huxley", "Lead assessor"] },
  ],
};

export const positionsSample: EsrbespokeTableProps = {
  label: "Open roles",
  size: "md",
  tone: "charcoal",
  rows: [
    { cells: ["Paint preparer", "Workshop"], href: "#apply" },
    { cells: ["Workshop supervisor", "Workshop"], href: "#apply" },
    { cells: ["Apprentice refinisher, years 1 – 4", "Finish Studio"], href: "#apply" },
    { cells: ["Apprentice panel technician, years 1 – 4", "Workshop"], href: "#apply" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background pt-16 text-foreground">
      <EsrbespokeTable {...teamSample} />
      <EsrbespokeTable {...positionsSample} />
    </div>
  );
}
