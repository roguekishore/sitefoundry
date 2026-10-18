// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/spinner-demo"
import Example2 from "./_examples/spinner-badge"
import Example3 from "./_examples/spinner-basic"
import Example4 from "./_examples/spinner-button"
import Example5 from "./_examples/spinner-color"
import Example6 from "./_examples/spinner-custom"
import Example7 from "./_examples/spinner-empty"
import Example8 from "./_examples/spinner-input-group"
import Example9 from "./_examples/spinner-item"
import Example10 from "./_examples/spinner-size"

const examples: [string, ComponentType][] = [
  ["spinner-demo", Example1],
  ["spinner-badge", Example2],
  ["spinner-basic", Example3],
  ["spinner-button", Example4],
  ["spinner-color", Example5],
  ["spinner-custom", Example6],
  ["spinner-empty", Example7],
  ["spinner-input-group", Example8],
  ["spinner-item", Example9],
  ["spinner-size", Example10],
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
