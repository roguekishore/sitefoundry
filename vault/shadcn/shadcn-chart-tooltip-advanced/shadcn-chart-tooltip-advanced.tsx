// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartTooltipAdvanced as Main } from "./chart-tooltip-advanced"

export interface ShadcnChartTooltipAdvancedProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartTooltipAdvanced({ className }: ShadcnChartTooltipAdvancedProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartTooltipAdvanced
