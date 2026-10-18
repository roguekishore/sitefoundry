// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartTooltipIndicatorLine as Main } from "./chart-tooltip-indicator-line"

export interface ShadcnChartTooltipIndicatorLineProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartTooltipIndicatorLine({ className }: ShadcnChartTooltipIndicatorLineProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartTooltipIndicatorLine
