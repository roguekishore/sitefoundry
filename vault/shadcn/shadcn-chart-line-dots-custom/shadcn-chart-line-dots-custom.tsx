// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartLineDotsCustom as Main } from "./chart-line-dots-custom"

export interface ShadcnChartLineDotsCustomProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartLineDotsCustom({ className }: ShadcnChartLineDotsCustomProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartLineDotsCustom
