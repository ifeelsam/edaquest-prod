import ProgressOverview from './ProgressOverview'
import ActiveQuest from './ActiveQuests'
import AchievementShowcase from './AchievementShowcase'

export default function MainContent() {
  return (
    <div className="w-full md:w-3/4 space-y-5">
      <ProgressOverview />
      <ActiveQuest />
      <AchievementShowcase />
    </div>
  )
}

