// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/calendar-demo"
import Example2 from "./_examples/calendar-hijri"
import Example3 from "./_examples/date-picker-demo"
import Example4 from "./_examples/date-picker-with-presets"
import Example5 from "./_examples/date-picker-with-range"

const examples: [string, ComponentType][] = [
  ["calendar-demo", Example1],
  ["calendar-hijri", Example2],
  ["date-picker-demo", Example3],
  ["date-picker-with-presets", Example4],
  ["date-picker-with-range", Example5],
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
