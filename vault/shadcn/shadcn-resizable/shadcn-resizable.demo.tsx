// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/resizable-demo"
import Example2 from "./_examples/resizable-demo-with-handle"
import Example3 from "./_examples/resizable-handle"
import Example4 from "./_examples/resizable-vertical"

const examples: [string, ComponentType][] = [
  ["resizable-demo", Example1],
  ["resizable-demo-with-handle", Example2],
  ["resizable-handle", Example3],
  ["resizable-vertical", Example4],
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
