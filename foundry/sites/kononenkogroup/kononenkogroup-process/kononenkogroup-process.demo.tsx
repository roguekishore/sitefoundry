import { KononenkogroupProcess, type KononenkogroupProcessProps } from "./kononenkogroup-process";

export const processSample: KononenkogroupProcessProps = {
  stages: [
    {
      heading: ["From Survey", "to Scheme"],
      lead: "First thoughts are tested on paper until the plan, the light and the budget all agree with one another.",
      label: "From Survey to Scheme",
      body: "We start loose — site sketches, sun paths, rough sections. This is where we ask how people will arrive, gather and move through a building, and where each room should catch the light. Every drawing is a small experiment. In open sessions with clients and engineers, between ambition and what the ground allows, the sketches settle into one clear scheme: honest, flexible and ready for detail.",
      side: "right",
      aside: {
        label: "Recognition",
        entries: [
          { title: "Nordic Form Prize 2024", detail: ["Winner, homes under 400 m²", "“Timber Courtyard House”"] },
          { title: "Facade Review Awards 2023", detail: ["Shortlist, adaptive reuse, “The Ropeworks”"] },
          { title: "Brickwork Medal 2022", detail: ["Commendation, housing, “Harbour Row”"] },
          { title: "30+ prizes", detail: ["across juried competitions"] },
        ],
      },
    },
    {
      heading: ["Rigour in", "Delivery"],
      body: "Here the scheme becomes a building. We fix the structure, resolve the envelope and draw every junction that matters, coordinating consultants and permits along the way. Through models, mock-ups and site visits, the design gains certainty — moving from a promising idea to a set of drawings a builder can trust.",
      side: "left",
      indent: true,
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <KononenkogroupProcess {...processSample} />
    </div>
  );
}
