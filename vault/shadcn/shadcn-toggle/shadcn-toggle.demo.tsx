// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/toggle-demo"
import Example2 from "./_examples/toggle-disabled"
import Example3 from "./_examples/toggle-lg"
import Example4 from "./_examples/toggle-outline"
import Example5 from "./_examples/toggle-sm"
import Example6 from "./_examples/toggle-with-text"

const examples: [string, ComponentType][] = [
  ["toggle-demo", Example1],
  ["toggle-disabled", Example2],
  ["toggle-lg", Example3],
  ["toggle-outline", Example4],
  ["toggle-sm", Example5],
  ["toggle-with-text", Example6],
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
