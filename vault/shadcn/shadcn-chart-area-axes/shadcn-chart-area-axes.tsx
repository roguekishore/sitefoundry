// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartAreaAxes as Main } from "./chart-area-axes"

export interface ShadcnChartAreaAxesProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartAreaAxes({ className }: ShadcnChartAreaAxesProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartAreaAxes
