import { KononenkogroupAbout, type KononenkogroupAboutProps } from "./kononenkogroup-about";

export const aboutSample: KononenkogroupAboutProps = {
  facts: [
    { label: "Established", value: "2009" },
    { label: "Principal", value: "Ines Valtonen" },
    {
      label: "Scope",
      value: "From the first site walk to the last construction detail — plans, elevations, models, drawings and photoreal renderings.",
    },
  ],
  text: "A practice built on patience and proportion. We read a site before we draw on it — its light, its slope, its neighbours — and design buildings that sit quietly, work hard and age well. From townhouses to civic halls, every brief gets the same close attention.",
  recordLabel: "Record",
  lists: [
    {
      label: "Prizes",
      groups: [
        [
          { title: "Nordic Form Prize 2024", detail: ["Winner, homes under 400 m²", "“Timber Courtyard House”"] },
          { title: "Facade Review Awards 2023", detail: ["Shortlist, adaptive reuse", "“The Ropeworks”"] },
          { title: "Brickwork Medal 2022", detail: ["Commendation, housing", "“Harbour Row”"] },
          { title: "30+ prizes", detail: ["across juried competitions"] },
        ],
      ],
    },
    {
      label: "Press",
      groups: [
        [
          { title: "“Plan & Section”", detail: ["Issue 41, 2024"] },
          { title: "Atrium Weekly: a library in weathered oak" },
          { title: "Built Form Annual: six houses on one slope" },
          { title: "Studio Notes: a gallery on Quay Street" },
        ],
        [
          { title: "Material Index: the Ropeworks conversion" },
          { title: "Hearth Journal", detail: ["No. 7, 2023"] },
          { title: "Heat & Stone: stoves in the modern home" },
          { title: "25+ features", detail: ["in the past two years"] },
        ],
      ],
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <KononenkogroupAbout {...aboutSample} />
    </div>
  );
}
