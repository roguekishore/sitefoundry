// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarRadius as Main } from "./chart-radar-radius"

export interface ShadcnChartRadarRadiusProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarRadius({ className }: ShadcnChartRadarRadiusProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarRadius
