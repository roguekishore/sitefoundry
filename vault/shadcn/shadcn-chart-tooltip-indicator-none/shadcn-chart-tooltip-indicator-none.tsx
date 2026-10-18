// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartTooltipIndicatorNone as Main } from "./chart-tooltip-indicator-none"

export interface ShadcnChartTooltipIndicatorNoneProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartTooltipIndicatorNone({ className }: ShadcnChartTooltipIndicatorNoneProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartTooltipIndicatorNone
