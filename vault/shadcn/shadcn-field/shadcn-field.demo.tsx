// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/field-demo"
import Example2 from "./_examples/field-checkbox"
import Example3 from "./_examples/field-choice-card"
import Example4 from "./_examples/field-fieldset"
import Example5 from "./_examples/field-group"
import Example6 from "./_examples/field-input"
import Example7 from "./_examples/field-radio"
import Example8 from "./_examples/field-responsive"
import Example9 from "./_examples/field-select"
import Example10 from "./_examples/field-slider"
import Example11 from "./_examples/field-switch"
import Example12 from "./_examples/field-textarea"

const examples: [string, ComponentType][] = [
  ["field-demo", Example1],
  ["field-checkbox", Example2],
  ["field-choice-card", Example3],
  ["field-fieldset", Example4],
  ["field-group", Example5],
  ["field-input", Example6],
  ["field-radio", Example7],
  ["field-responsive", Example8],
  ["field-select", Example9],
  ["field-slider", Example10],
  ["field-switch", Example11],
  ["field-textarea", Example12],
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
