// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartLineDefault as Main } from "./chart-line-default"

export interface ShadcnChartLineDefaultProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartLineDefault({ className }: ShadcnChartLineDefaultProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartLineDefault
