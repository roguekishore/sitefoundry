// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/chart-bar-demo"
import Example2 from "./_examples/chart-bar-demo-axis"
import Example3 from "./_examples/chart-bar-demo-grid"
import Example4 from "./_examples/chart-bar-demo-legend"
import Example5 from "./_examples/chart-bar-demo-tooltip"
import Example6 from "./_examples/chart-tooltip-demo"

const examples: [string, ComponentType][] = [
  ["chart-bar-demo", Example1],
  ["chart-bar-demo-axis", Example2],
  ["chart-bar-demo-grid", Example3],
  ["chart-bar-demo-legend", Example4],
  ["chart-bar-demo-tooltip", Example5],
  ["chart-tooltip-demo", Example6],
]

export default function Demo() {
  return (
    <div className="flex flex-col gap-12 p-6">
      {examples.map(([name, Example]) => (
        <section key={name} className="flex flex-col gap-4">
          <p className="font-mono text-xs text-muted-foreground">{name}</p>
          <div className="flex w-full flex-wrap items-center justify-center">
            <Example />
          </div>
        </section>
      ))}
    </div>
  )
}
