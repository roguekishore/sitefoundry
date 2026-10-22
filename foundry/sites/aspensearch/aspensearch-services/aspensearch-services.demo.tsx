import { AspensearchServices, type AspensearchServicesProps } from "./aspensearch-services";

export const servicesSample: AspensearchServicesProps = {
  heading: [{ text: "Building" }, { text: "Standout", alignRight: true }, { text: "Teams" }],
  intro:
    "At Corvo we don't just plug gaps — we shape careers and change how firms are built. Our work is pairing outstanding engineering and research people with the sharpest systematic trading houses and the boldest venture-backed product teams.",
  action: { label: "Speak to a partner", href: "#contact" },
  services: [
    {
      index: "01",
      title: "Systematic\nResearch",
      text: "Researchers who carry an idea from a hunch to a live book. We know which pods are truly growing, how each shop splits its research stack, and what a strong package looks like before you ever see one.",
      points: ["Alpha research", "Risk and portfolio", "Futures and FX", "Post-doc transitions"],
    },
    {
      index: "02",
      title: "Engineering\n& Platforms",
      text: "The engineers who keep a model trading in production: execution, data feeds, and the platforms research runs on. Many come from big tech and want a straight read on how the move really feels.",
      points: ["Low-latency C++", "Order routing", "Market data feeds", "Research tooling"],
    },
    {
      index: "03",
      title: "AI &\nApplied ML",
      text: "Scientists and engineers weighing frontier labs, venture-backed startups and the funds now chasing the very same people. We can show you how the compute, the data and the equity really stack up.",
      points: ["Applied AI engineering", "Deep learning research", "Training infrastructure", "First technical hires"],
    },
    {
      index: "04",
      title: "Leadership\n& New Desks",
      text: "Whole teams, not single seats. Some searches start with one researcher and end, years later, with a desk, a platform group and the person leading both.",
      points: ["Heads of research", "Engineering leads", "New desk launches", "Multi-year hiring plans"],
    },
  ],
};

export default function Demo() {
  return <AspensearchServices {...servicesSample} />;
}
