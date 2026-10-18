// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/textarea-demo"
import Example2 from "./_examples/textarea-disabled"
import Example3 from "./_examples/textarea-with-button"
import Example4 from "./_examples/textarea-with-label"
import Example5 from "./_examples/textarea-with-text"

const examples: [string, ComponentType][] = [
  ["textarea-demo", Example1],
  ["textarea-disabled", Example2],
  ["textarea-with-button", Example3],
  ["textarea-with-label", Example4],
  ["textarea-with-text", Example5],
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
