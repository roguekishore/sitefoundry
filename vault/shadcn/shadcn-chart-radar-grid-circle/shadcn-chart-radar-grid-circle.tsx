// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarGridCircle as Main } from "./chart-radar-grid-circle"

export interface ShadcnChartRadarGridCircleProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarGridCircle({ className }: ShadcnChartRadarGridCircleProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarGridCircle
