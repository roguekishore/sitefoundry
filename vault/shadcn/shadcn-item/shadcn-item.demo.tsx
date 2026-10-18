// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/item-demo"
import Example2 from "./_examples/item-avatar"
import Example3 from "./_examples/item-dropdown"
import Example4 from "./_examples/item-group"
import Example5 from "./_examples/item-header"
import Example6 from "./_examples/item-icon"
import Example7 from "./_examples/item-image"
import Example8 from "./_examples/item-link"
import Example9 from "./_examples/item-size"
import Example10 from "./_examples/item-variant"

const examples: [string, ComponentType][] = [
  ["item-demo", Example1],
  ["item-avatar", Example2],
  ["item-dropdown", Example3],
  ["item-group", Example4],
  ["item-header", Example5],
  ["item-icon", Example6],
  ["item-image", Example7],
  ["item-link", Example8],
  ["item-size", Example9],
  ["item-variant", Example10],
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
