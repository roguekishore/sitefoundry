// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import { TooltipProvider } from "@foundry/shadcn-tooltip"
import Example1 from "./_examples/kbd-demo"
import Example2 from "./_examples/kbd-button"
import Example3 from "./_examples/kbd-group"
import Example4 from "./_examples/kbd-input-group"
import Example5 from "./_examples/kbd-tooltip"

const examples: [string, ComponentType][] = [
  ["kbd-demo", Example1],
  ["kbd-button", Example2],
  ["kbd-group", Example3],
  ["kbd-input-group", Example4],
  ["kbd-tooltip", Example5],
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
