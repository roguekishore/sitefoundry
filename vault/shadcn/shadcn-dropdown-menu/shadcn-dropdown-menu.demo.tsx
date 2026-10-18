// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/dropdown-menu-demo"
import Example2 from "./_examples/dropdown-menu-checkboxes"
import Example3 from "./_examples/dropdown-menu-dialog"
import Example4 from "./_examples/dropdown-menu-radio-group"

const examples: [string, ComponentType][] = [
  ["dropdown-menu-demo", Example1],
  ["dropdown-menu-checkboxes", Example2],
  ["dropdown-menu-dialog", Example3],
  ["dropdown-menu-radio-group", Example4],
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
