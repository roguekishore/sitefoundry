// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import { TooltipProvider } from "@foundry/shadcn-tooltip"
import Example1 from "./_examples/input-group-demo"
import Example2 from "./_examples/input-group-button"
import Example3 from "./_examples/input-group-button-group"
import Example4 from "./_examples/input-group-custom"
import Example5 from "./_examples/input-group-dropdown"
import Example6 from "./_examples/input-group-icon"
import Example7 from "./_examples/input-group-label"
import Example8 from "./_examples/input-group-spinner"
import Example9 from "./_examples/input-group-text"
import Example10 from "./_examples/input-group-textarea"
import Example11 from "./_examples/input-group-tooltip"

const examples: [string, ComponentType][] = [
  ["input-group-demo", Example1],
  ["input-group-button", Example2],
  ["input-group-button-group", Example3],
  ["input-group-custom", Example4],
  ["input-group-dropdown", Example5],
  ["input-group-icon", Example6],
  ["input-group-label", Example7],
  ["input-group-spinner", Example8],
  ["input-group-text", Example9],
  ["input-group-textarea", Example10],
  ["input-group-tooltip", Example11],
]

export default function Demo() {
  return (
    <TooltipProvider>
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
    </TooltipProvider>
  )
}
