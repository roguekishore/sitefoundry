// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartAreaLegend as Main } from "./chart-area-legend"

export interface ShadcnChartAreaLegendProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartAreaLegend({ className }: ShadcnChartAreaLegendProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartAreaLegend
