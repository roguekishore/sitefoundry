// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/empty-demo"
import Example2 from "./_examples/empty-avatar"
import Example3 from "./_examples/empty-avatar-group"
import Example4 from "./_examples/empty-background"
import Example5 from "./_examples/empty-icon"
import Example6 from "./_examples/empty-input-group"
import Example7 from "./_examples/empty-outline"

const examples: [string, ComponentType][] = [
  ["empty-demo", Example1],
  ["empty-avatar", Example2],
  ["empty-avatar-group", Example3],
  ["empty-background", Example4],
  ["empty-icon", Example5],
  ["empty-input-group", Example6],
  ["empty-outline", Example7],
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
