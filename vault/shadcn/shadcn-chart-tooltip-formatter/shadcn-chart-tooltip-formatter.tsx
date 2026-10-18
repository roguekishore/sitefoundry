// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartTooltipFormatter as Main } from "./chart-tooltip-formatter"

export interface ShadcnChartTooltipFormatterProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartTooltipFormatter({ className }: ShadcnChartTooltipFormatterProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartTooltipFormatter
