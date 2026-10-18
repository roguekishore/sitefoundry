// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/toggle-group-demo"
import Example2 from "./_examples/toggle-group-disabled"
import Example3 from "./_examples/toggle-group-lg"
import Example4 from "./_examples/toggle-group-outline"
import Example5 from "./_examples/toggle-group-single"
import Example6 from "./_examples/toggle-group-sm"
import Example7 from "./_examples/toggle-group-spacing"

const examples: [string, ComponentType][] = [
  ["toggle-group-demo", Example1],
  ["toggle-group-disabled", Example2],
  ["toggle-group-lg", Example3],
  ["toggle-group-outline", Example4],
  ["toggle-group-single", Example5],
  ["toggle-group-sm", Example6],
  ["toggle-group-spacing", Example7],
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
