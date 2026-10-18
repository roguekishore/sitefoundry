// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/scroll-area-demo"
import Example2 from "./_examples/scroll-area-horizontal-demo"

const examples: [string, ComponentType][] = [
  ["scroll-area-demo", Example1],
  ["scroll-area-horizontal-demo", Example2],
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
