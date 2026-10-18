// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartTooltipIcons as Main } from "./chart-tooltip-icons"

export interface ShadcnChartTooltipIconsProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartTooltipIcons({ className }: ShadcnChartTooltipIconsProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartTooltipIcons
