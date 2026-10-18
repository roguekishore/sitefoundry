// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartTooltipLabelCustom as Main } from "./chart-tooltip-label-custom"

export interface ShadcnChartTooltipLabelCustomProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartTooltipLabelCustom({ className }: ShadcnChartTooltipLabelCustomProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartTooltipLabelCustom
