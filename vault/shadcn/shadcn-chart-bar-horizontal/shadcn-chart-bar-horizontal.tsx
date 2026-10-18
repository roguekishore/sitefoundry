// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarHorizontal as Main } from "./chart-bar-horizontal"

export interface ShadcnChartBarHorizontalProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarHorizontal({ className }: ShadcnChartBarHorizontalProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarHorizontal
