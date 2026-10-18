// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartTooltipDefault as Main } from "./chart-tooltip-default"

export interface ShadcnChartTooltipDefaultProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartTooltipDefault({ className }: ShadcnChartTooltipDefaultProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartTooltipDefault
