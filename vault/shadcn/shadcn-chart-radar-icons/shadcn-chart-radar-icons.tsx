// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarIcons as Main } from "./chart-radar-icons"

export interface ShadcnChartRadarIconsProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarIcons({ className }: ShadcnChartRadarIconsProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarIcons
