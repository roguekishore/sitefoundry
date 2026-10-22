import { BasepowercompanyExtras, type BasepowercompanyExtrasProps } from "./basepowercompany-extras";

export const extrasSample: BasepowercompanyExtrasProps = {
  title: "Make the most of what you've got",
  subtitle: "The Hub carries you through outages and pays you back on the busy hours in between.",
  items: [
    {
      title: "Works with rooftop panels",
      body: "Already have solar? The Hub stores your midday surplus and spends it after sunset.",
      href: "#solar",
      mediaLabel: "Solar panels on a shingle roof at sunset",
    },
    {
      title: "Top up from a portable generator",
      body: "A long outage? Plug a portable generator into the Hub's inlet and keep the whole house going.",
      href: "#generator",
      mediaLabel: "A man wheeling a portable generator across a lawn",
    },
  ],
};

export default function Demo() {
  return <BasepowercompanyExtras {...extrasSample} />;
}
