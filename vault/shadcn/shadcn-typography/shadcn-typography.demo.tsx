// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/typography-demo"
import Example2 from "./_examples/typography-blockquote"
import Example3 from "./_examples/typography-h1"
import Example4 from "./_examples/typography-h2"
import Example5 from "./_examples/typography-h3"
import Example6 from "./_examples/typography-h4"
import Example7 from "./_examples/typography-inline-code"
import Example8 from "./_examples/typography-large"
import Example9 from "./_examples/typography-lead"
import Example10 from "./_examples/typography-list"
import Example11 from "./_examples/typography-muted"
import Example12 from "./_examples/typography-p"
import Example13 from "./_examples/typography-small"
import Example14 from "./_examples/typography-table"

const examples: [string, ComponentType][] = [
  ["typography-demo", Example1],
  ["typography-blockquote", Example2],
  ["typography-h1", Example3],
  ["typography-h2", Example4],
  ["typography-h3", Example5],
  ["typography-h4", Example6],
  ["typography-inline-code", Example7],
  ["typography-large", Example8],
  ["typography-lead", Example9],
  ["typography-list", Example10],
  ["typography-muted", Example11],
  ["typography-p", Example12],
  ["typography-small", Example13],
  ["typography-table", Example14],
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
