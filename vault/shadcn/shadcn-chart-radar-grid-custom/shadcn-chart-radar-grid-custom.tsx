// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarGridCustom as Main } from "./chart-radar-grid-custom"

export interface ShadcnChartRadarGridCustomProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarGridCustom({ className }: ShadcnChartRadarGridCustomProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarGridCustom
