// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartTooltipLabelNone as Main } from "./chart-tooltip-label-none"

export interface ShadcnChartTooltipLabelNoneProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartTooltipLabelNone({ className }: ShadcnChartTooltipLabelNoneProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartTooltipLabelNone
