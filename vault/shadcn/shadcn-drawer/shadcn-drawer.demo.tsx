// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/drawer-demo"
import Example2 from "./_examples/drawer-dialog"

const examples: [string, ComponentType][] = [
  ["drawer-demo", Example1],
  ["drawer-dialog", Example2],
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
