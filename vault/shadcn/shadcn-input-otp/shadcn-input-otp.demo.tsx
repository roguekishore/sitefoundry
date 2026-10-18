// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
import Example1 from "./_examples/input-otp-demo"
import Example2 from "./_examples/input-otp-controlled"
import Example3 from "./_examples/input-otp-pattern"
import Example4 from "./_examples/input-otp-separator"

const examples: [string, ComponentType][] = [
  ["input-otp-demo", Example1],
  ["input-otp-controlled", Example2],
  ["input-otp-pattern", Example3],
  ["input-otp-separator", Example4],
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
