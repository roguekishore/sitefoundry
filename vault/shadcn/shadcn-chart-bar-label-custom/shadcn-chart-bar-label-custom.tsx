// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarLabelCustom as Main } from "./chart-bar-label-custom"

export interface ShadcnChartBarLabelCustomProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarLabelCustom({ className }: ShadcnChartBarLabelCustomProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarLabelCustom
