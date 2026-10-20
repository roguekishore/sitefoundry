// Sample content (gallery only); the page reuses it. Tool names are generic stand-ins.
import type { ReactNode } from "react";
import { Braces, Cpu, Database, FileCode2, Gem, Hexagon, Layers, Rabbit, Smartphone, Snowflake, Table2, Zap } from "lucide-react";
import { GrowthbookIntegrations, type GrowthbookIntegrationsProps } from "./growthbook-integrations";

function Tool({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-base font-medium lg:text-xl [&_svg]:size-5 lg:[&_svg]:size-7">
      {icon}
      {children}
    </span>
  );
}

export const integrationsSample: GrowthbookIntegrationsProps = {
  title: ["Plugs into the", "tools you", "already run"],
  body: "Made by engineers for engineers, so it fits whatever stack and workflow you have.",
  cta: { label: "Browse integrations", href: "#" },
  tools: [
    { name: "Postgres", logo: <Tool icon={<Database strokeWidth={1.75} />}>Postgres</Tool> },
    { name: "Kotlin", logo: <Tool icon={<FileCode2 strokeWidth={1.75} />}>Kotlin</Tool> },
    { name: "DuckDB", logo: <Tool icon={<Table2 strokeWidth={1.75} />}>DuckDB</Tool> },
    { name: "Vue", logo: <Tool icon={<Layers strokeWidth={1.75} />}>Vue</Tool> },
    { name: "Ruby", logo: <Tool icon={<Gem strokeWidth={1.75} />}>Ruby</Tool> },
    { name: "Snowpipe", logo: <Tool icon={<Snowflake strokeWidth={1.75} />}>Snowpipe</Tool> },
    { name: "Android", logo: <Tool icon={<Smartphone strokeWidth={1.75} />}>Android</Tool> },
    { name: "Rust", logo: <Tool icon={<Cpu strokeWidth={1.75} />}>Rust</Tool> },
    { name: "RabbitMQ", logo: <Tool icon={<Rabbit strokeWidth={1.75} />}>RabbitMQ</Tool> },
    { name: "Elixir", logo: <Tool icon={<Hexagon strokeWidth={1.75} />}>Elixir</Tool> },
    { name: "Node", logo: <Tool icon={<Braces strokeWidth={1.75} />}>Node</Tool> },
    { name: "Edge", logo: <Tool icon={<Zap strokeWidth={1.75} />}>Edge</Tool> },
  ],
};

export default function Demo() {
  return <GrowthbookIntegrations {...integrationsSample} />;
}
