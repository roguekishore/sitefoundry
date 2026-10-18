// Sample content lives here (gallery only); the page reuses it. People and posts are made up.
import { commandSample } from "../clerk-command/clerk-command.demo";
import { ClerkTestimonials, type ClerkTestimonialsProps } from "./clerk-testimonials";

const tones = ["from-chart-1/35 to-chart-2/25", "from-chart-2/40 to-chart-3/30", "from-chart-4/40 to-chart-1/25", "from-chart-5/40 to-chart-2/25", "from-chart-3/45 to-chart-4/25"];

function Initials({ text, tone = 0 }: { text: string; tone?: number }) {
  return (
    <span className={`flex size-full items-center justify-center bg-linear-to-br text-[0.625rem] font-semibold text-foreground/75 ${tones[tone % tones.length]}`}>
      {text}
    </span>
  );
}

export const testimonialsSample: ClerkTestimonialsProps = {
  title: "Trusted by teams that ship",
  text: "Thousands of products sign people in with Latch. Free for your first 25,000 monthly active users and 50 workspaces.",
  command: commandSample,
  featured: {
    quote: "We had a login page on Monday and an enterprise-ready account system on Friday. That simply wasn't possible for a team our size before.",
    name: "Priya Raman",
    role: "Fieldnote, CTO",
    avatar: <Initials text="PR" tone={1} />,
  },
  items: [
    {
      text: ["Rolled my own auth for three projects. Never again.", "Latch replaced roughly 2,000 lines of OAuth glue and a password-reset flow I was quietly scared of."],
      name: "Dana Whitlock",
      handle: "@danabuilds",
      avatar: <Initials text="DW" tone={0} />,
    },
    {
      text: "Moved our sign-in over during a lunch break. The prebuilt components look better than the ones we designed in-house.",
      name: "Tomás Ferreira",
      handle: "@tferreira",
      avatar: <Initials text="TF" tone={2} />,
    },
    {
      text: ["The CLI is the best part.", "Told my agent to add Latch, went to make coffee, came back to working sign-in with passkeys."],
      name: "June Park",
      handle: "@junepark_dev",
      avatar: <Initials text="JP" tone={3} />,
    },
    {
      text: "Our first enterprise customer asked for SSO and SCIM. It took one afternoon, most of which was reading their requirements doc.",
      name: "Malik Osei",
      handle: "@malik_ships",
      avatar: <Initials text="MO" tone={4} />,
    },
    {
      text: ["Best auth pick for a new product, in order:", "1) Latch\n2) Latch, but with the workspaces add-on\n3) Anything that isn't writing it yourself"],
      name: "Ilse Brandt",
      handle: "@ilsebrandt",
      avatar: <Initials text="IB" tone={1} />,
    },
    {
      text: "Session management alone was worth it. Seeing every device a user is signed in on, and ending one with a click, is what our support team always wanted.",
      name: "Rhys Calder",
      handle: "@rhyscalder",
      avatar: <Initials text="RC" tone={2} />,
    },
  ],
};

export default function Demo() {
  return <ClerkTestimonials {...testimonialsSample} />;
}
