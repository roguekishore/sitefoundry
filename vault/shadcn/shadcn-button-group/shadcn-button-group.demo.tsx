// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import { TooltipProvider } from "@foundry/shadcn-tooltip"
import Example1 from "./_examples/button-group-demo"
import Example2 from "./_examples/button-group-dropdown"
import Example3 from "./_examples/button-group-input"
import Example4 from "./_examples/button-group-input-group"
import Example5 from "./_examples/button-group-nested"
import Example6 from "./_examples/button-group-orientation"
import Example7 from "./_examples/button-group-popover"
import Example8 from "./_examples/button-group-select"
import Example9 from "./_examples/button-group-separator"
import Example10 from "./_examples/button-group-size"
import Example11 from "./_examples/button-group-split"

const examples: [string, ComponentType][] = [
  ["button-group-demo", Example1],
  ["button-group-dropdown", Example2],
  ["button-group-input", Example3],
  ["button-group-input-group", Example4],
  ["button-group-nested", Example5],
  ["button-group-orientation", Example6],
  ["button-group-popover", Example7],
  ["button-group-select", Example8],
  ["button-group-separator", Example9],
  ["button-group-size", Example10],
  ["button-group-split", Example11],
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
