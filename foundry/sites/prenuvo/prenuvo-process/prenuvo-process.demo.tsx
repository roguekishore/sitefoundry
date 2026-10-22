import { PrenuvoProcess, type PrenuvoProcessProps } from "./prenuvo-process";

export const processSample: PrenuvoProcessProps = {
  id: "steps",
  title: "Book. Scan. Talk. Return.",
  body: "From picking a plan to setting your first baseline and checking in on it every year after, see how each part of an Oriel membership works.",
  cta: { label: "See each step", href: "#steps" },
};

export default function Demo() {
  return <PrenuvoProcess {...processSample} />;
}
