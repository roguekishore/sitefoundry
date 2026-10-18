// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/native-select-demo"
import Example2 from "./_examples/native-select-disabled"
import Example3 from "./_examples/native-select-groups"
import Example4 from "./_examples/native-select-invalid"

const examples: [string, ComponentType][] = [
  ["native-select-demo", Example1],
  ["native-select-disabled", Example2],
  ["native-select-groups", Example3],
  ["native-select-invalid", Example4],
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
