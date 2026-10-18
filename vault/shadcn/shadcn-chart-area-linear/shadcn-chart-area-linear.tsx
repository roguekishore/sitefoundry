// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartAreaLinear as Main } from "./chart-area-linear"

export interface ShadcnChartAreaLinearProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartAreaLinear({ className }: ShadcnChartAreaLinearProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartAreaLinear
