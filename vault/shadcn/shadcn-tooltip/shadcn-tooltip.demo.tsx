import { TooltipProvider } from "@foundry/shadcn-tooltip"
import Example1 from "./_examples/tooltip-demo"

export default function Demo() {
  return (
    <TooltipProvider>
    <div className="flex min-h-48 w-full items-center justify-center p-6">
      <Example1 />
    </div>
    </TooltipProvider>
  )
}
