import DailyObjectives from './DailyObjectives'
import QuickStats from './QuickStats'
export default function Sidebar() {
  return (
    <div className="w-full lg:w-1/4 lg:mt-0 lg:ml-5 md:w-1/4 mt-5 md:mt-0 md:ml-5 space-y-5">
      <DailyObjectives />
      <QuickStats />
    </div>
  )
}

