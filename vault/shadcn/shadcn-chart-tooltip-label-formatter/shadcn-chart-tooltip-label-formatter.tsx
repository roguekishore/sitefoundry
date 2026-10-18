// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartTooltipLabelFormatter as Main } from "./chart-tooltip-label-formatter"

export interface ShadcnChartTooltipLabelFormatterProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartTooltipLabelFormatter({ className }: ShadcnChartTooltipLabelFormatterProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartTooltipLabelFormatter
