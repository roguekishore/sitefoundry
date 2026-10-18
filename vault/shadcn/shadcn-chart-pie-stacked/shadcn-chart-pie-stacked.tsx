// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieStacked as Main } from "./chart-pie-stacked"

export interface ShadcnChartPieStackedProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieStacked({ className }: ShadcnChartPieStackedProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieStacked
