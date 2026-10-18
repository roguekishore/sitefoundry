// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/breadcrumb-demo"
import Example2 from "./_examples/breadcrumb-dropdown"
import Example3 from "./_examples/breadcrumb-ellipsis"
import Example4 from "./_examples/breadcrumb-link"
import Example5 from "./_examples/breadcrumb-responsive"
import Example6 from "./_examples/breadcrumb-separator"

const examples: [string, ComponentType][] = [
  ["breadcrumb-demo", Example1],
  ["breadcrumb-dropdown", Example2],
  ["breadcrumb-ellipsis", Example3],
  ["breadcrumb-link", Example4],
  ["breadcrumb-responsive", Example5],
  ["breadcrumb-separator", Example6],
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
