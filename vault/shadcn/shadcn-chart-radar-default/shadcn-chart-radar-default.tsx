// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarDefault as Main } from "./chart-radar-default"

export interface ShadcnChartRadarDefaultProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarDefault({ className }: ShadcnChartRadarDefaultProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarDefault
