// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/sheet-demo"
import Example2 from "./_examples/sheet-side"

const examples: [string, ComponentType][] = [
  ["sheet-demo", Example1],
  ["sheet-side", Example2],
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
