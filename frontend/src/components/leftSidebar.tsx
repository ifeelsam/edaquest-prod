const navItems = [
  { name: 'Home', icon: '🏠' },
  { name: 'Quests', icon: '📜' },
  { name: 'Achievements', icon: '🏆' },
  { name: 'Skills', icon: '🌳' },
  { name: 'Community', icon: '👥' },
  { name: 'Settings', icon: '⚙️' },
]

const dailyQuests = [
  { name: 'Complete a lesson', reward: 50 },
  { name: 'Solve 3 challenges', reward: 100 },
  { name: 'Help a fellow learner', reward: 75 },
]

export default function LeftSidebar() {
  return (
    <aside className="glass-morphic neon-border w-full lg:w-96 p-4 flex flex-col">
      <nav className="mb-6 flex flex-wrap lg:flex-col">
        {navItems.map((item) => (
          <a key={item.name} href="#" className="flex items-center py-2 px-4 hover:bg-primary/20 rounded transition-colors w-1/2 lg:w-full">
            <span className="mr-2 text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Daily Quests</h3>
        {dailyQuests.map((quest, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">{quest.name}</span>
            </label>
            <span className="text-xs text-accent">{quest.reward} XP</span>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <h3 className="text-lg font-bold mb-2">Learning Streak</h3>
        <div className="grid grid-cols-7 gap-1">
          {[...Array(28)].map((_, i) => (
            <div key={i} className="w-6 h-6 bg-gray-700 rounded-sm"></div>
          ))}
        </div>
      </div>
    </aside>
  )
}

