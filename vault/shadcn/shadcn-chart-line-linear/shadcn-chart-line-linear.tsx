// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartLineLinear as Main } from "./chart-line-linear"

export interface ShadcnChartLineLinearProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartLineLinear({ className }: ShadcnChartLineLinearProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartLineLinear
