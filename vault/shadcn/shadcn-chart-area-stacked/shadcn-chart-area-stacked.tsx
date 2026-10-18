// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartAreaStacked as Main } from "./chart-area-stacked"

export interface ShadcnChartAreaStackedProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartAreaStacked({ className }: ShadcnChartAreaStackedProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartAreaStacked
