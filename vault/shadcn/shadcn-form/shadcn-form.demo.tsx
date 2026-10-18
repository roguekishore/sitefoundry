// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/form-formisch-array"
import Example2 from "./_examples/form-formisch-checkbox"
import Example3 from "./_examples/form-formisch-complex"
import Example4 from "./_examples/form-formisch-demo"
import Example5 from "./_examples/form-formisch-input"
import Example6 from "./_examples/form-formisch-radiogroup"
import Example7 from "./_examples/form-formisch-select"
import Example8 from "./_examples/form-formisch-switch"
import Example9 from "./_examples/form-formisch-textarea"
import Example10 from "./_examples/form-rhf-array"
import Example11 from "./_examples/form-rhf-checkbox"
import Example12 from "./_examples/form-rhf-complex"
import Example13 from "./_examples/form-rhf-demo"
import Example14 from "./_examples/form-rhf-input"
import Example15 from "./_examples/form-rhf-password"
import Example16 from "./_examples/form-rhf-radiogroup"
import Example17 from "./_examples/form-rhf-select"
import Example18 from "./_examples/form-rhf-switch"
import Example19 from "./_examples/form-rhf-textarea"
import Example20 from "./_examples/form-tanstack-array"
import Example21 from "./_examples/form-tanstack-checkbox"
import Example22 from "./_examples/form-tanstack-complex"
import Example23 from "./_examples/form-tanstack-demo"
import Example24 from "./_examples/form-tanstack-input"
import Example25 from "./_examples/form-tanstack-radiogroup"
import Example26 from "./_examples/form-tanstack-select"
import Example27 from "./_examples/form-tanstack-switch"
import Example28 from "./_examples/form-tanstack-textarea"

const examples: [string, ComponentType][] = [
  ["form-formisch-array", Example1],
  ["form-formisch-checkbox", Example2],
  ["form-formisch-complex", Example3],
  ["form-formisch-demo", Example4],
  ["form-formisch-input", Example5],
  ["form-formisch-radiogroup", Example6],
  ["form-formisch-select", Example7],
  ["form-formisch-switch", Example8],
  ["form-formisch-textarea", Example9],
  ["form-rhf-array", Example10],
  ["form-rhf-checkbox", Example11],
  ["form-rhf-complex", Example12],
  ["form-rhf-demo", Example13],
  ["form-rhf-input", Example14],
  ["form-rhf-password", Example15],
  ["form-rhf-radiogroup", Example16],
  ["form-rhf-select", Example17],
  ["form-rhf-switch", Example18],
  ["form-rhf-textarea", Example19],
  ["form-tanstack-array", Example20],
  ["form-tanstack-checkbox", Example21],
  ["form-tanstack-complex", Example22],
  ["form-tanstack-demo", Example23],
  ["form-tanstack-input", Example24],
  ["form-tanstack-radiogroup", Example25],
  ["form-tanstack-select", Example26],
  ["form-tanstack-switch", Example27],
  ["form-tanstack-textarea", Example28],
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
