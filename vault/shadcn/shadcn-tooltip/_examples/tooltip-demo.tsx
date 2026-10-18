import { Button } from "@foundry/shadcn-button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@foundry/shadcn-tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
