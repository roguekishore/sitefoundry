// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartAreaDefault as Main } from "./chart-area-default"

export interface ShadcnChartAreaDefaultProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartAreaDefault({ className }: ShadcnChartAreaDefaultProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartAreaDefault
