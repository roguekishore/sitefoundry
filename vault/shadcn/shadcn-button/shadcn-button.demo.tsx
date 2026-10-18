// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/button-demo"
import Example2 from "./_examples/button-as-child"
import Example3 from "./_examples/button-default"
import Example4 from "./_examples/button-destructive"
import Example5 from "./_examples/button-ghost"
import Example6 from "./_examples/button-icon"
import Example7 from "./_examples/button-link"
import Example8 from "./_examples/button-loading"
import Example9 from "./_examples/button-outline"
import Example10 from "./_examples/button-rounded"
import Example11 from "./_examples/button-secondary"
import Example12 from "./_examples/button-size"
import Example13 from "./_examples/button-with-icon"

const examples: [string, ComponentType][] = [
  ["button-demo", Example1],
  ["button-as-child", Example2],
  ["button-default", Example3],
  ["button-destructive", Example4],
  ["button-ghost", Example5],
  ["button-icon", Example6],
  ["button-link", Example7],
  ["button-loading", Example8],
  ["button-outline", Example9],
  ["button-rounded", Example10],
  ["button-secondary", Example11],
  ["button-size", Example12],
  ["button-with-icon", Example13],
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
