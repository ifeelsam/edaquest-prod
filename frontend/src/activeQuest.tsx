const quests = [
  {
    name: "Smart Contract Fundamentals",
    progress: 75,
    xpReward: 1000,
    timeRemaining: "2 days",
    difficulty: 3
  },
  {
    name: "DeFi Protocol Analysis",
    progress: 30,
    xpReward: 1500,
    timeRemaining: "5 days",
    difficulty: 4
  },
  {
    name: "Blockchain Architecture",
    progress: 90,
    xpReward: 800,
    timeRemaining: "1 day",
    difficulty: 2
  }
]

export default function ActiveQuests() {
  return (
    <section className="glass-morphic p-4 lg:p-6 rounded-lg">
      <h2 className="text-xl lg:text-2xl font-bold mb-4">Active Quests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quests.map((quest, index) => (
          <div key={index} className="bg-primary/20 p-4 rounded-lg hover:bg-primary/30 transition-colors">
            <h3 className="text-lg font-bold mb-2">{quest.name}</h3>
            <div className="flex justify-between items-center mb-2">
              <div className="w-2/3 bg-gray-700 rounded-full h-2">
                <div className="bg-accent h-full rounded-full" style={{ width: `${quest.progress}%` }}></div>
              </div>
              <span className="text-sm">{quest.progress}%</span>
            </div>
            <p className="text-sm">XP Reward: {quest.xpReward} <span className="text-yellow-400">🪙</span></p>
            <p className="text-sm">Time Remaining: {quest.timeRemaining} ⏳</p>
            <div className="mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < quest.difficulty ? 'text-red-500' : 'text-gray-500'}`}>♥</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

