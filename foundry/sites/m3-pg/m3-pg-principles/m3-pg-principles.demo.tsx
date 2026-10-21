import { M3PgPrinciples, type M3PgPrinciplesProps } from "./m3-pg-principles";

export const principlesSample: M3PgPrinciplesProps = {
  id: "studio",
  label: ["Three rules,", "one way of building."],
  headline: ["Durable.", "Calm.", "Worth the cost."],
  tagline: "Built to outlast the plans.",
  items: [
    {
      title: "What we stand for",
      body: "A good building balances how long it lasts, how it looks and what it costs. We design clear, carefully planned structures that stay useful for decades, not seasons.",
      link: { label: "Read more", href: "#values" },
    },
    {
      title: "How we think",
      body: "Every commission opens with a long, honest conversation. We want to understand the site, the people who will use it and the budget it has to live within before we draw a line.",
      link: { label: "Read more", href: "#thinking" },
    },
    {
      title: "How we work",
      body: "We plan in the open and in step with our clients. One steady line of contact carries each project from the first site survey through to handover of the keys.",
      link: { label: "Read more", href: "#method" },
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background pt-20">
      <M3PgPrinciples {...principlesSample} />
    </div>
  );
}
