
export default function QuickStats() {
  const stats = [
    { icon: '🔥', label: 'Quest Streak', value: '15 Days' },
    { icon: '✅', label: 'Completed Quests', value: '24/50' },
    { icon: '🏆', label: 'Current Rank', value: 'Crypto Sage' },
  ]

  return (
    <div className="glass-morphic p-5">
      <h2 className="text-2xl mb-4">Quick Stats</h2>
      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-accent bg-opacity-20 p-3 rounded-lg hover:scale-[1.02] transition-transform">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-xs">{stat.label}</p>
                <p className="text-lg font-['Press_Start_2P']">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

