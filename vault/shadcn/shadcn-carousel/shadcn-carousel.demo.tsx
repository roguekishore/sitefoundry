// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/carousel-demo"
import Example2 from "./_examples/carousel-api"
import Example3 from "./_examples/carousel-orientation"
import Example4 from "./_examples/carousel-plugin"
import Example5 from "./_examples/carousel-size"
import Example6 from "./_examples/carousel-spacing"

const examples: [string, ComponentType][] = [
  ["carousel-demo", Example1],
  ["carousel-api", Example2],
  ["carousel-orientation", Example3],
  ["carousel-plugin", Example4],
  ["carousel-size", Example5],
  ["carousel-spacing", Example6],
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
