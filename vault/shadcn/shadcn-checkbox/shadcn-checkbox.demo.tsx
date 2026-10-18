// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/checkbox-demo"
import Example2 from "./_examples/checkbox-disabled"
import Example3 from "./_examples/checkbox-with-text"

const examples: [string, ComponentType][] = [
  ["checkbox-demo", Example1],
  ["checkbox-disabled", Example2],
  ["checkbox-with-text", Example3],
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
