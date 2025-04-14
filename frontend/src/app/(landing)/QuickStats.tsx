import { useUser } from "@/components/store/useUser"

export default function QuickStats() {
  const { UserProgress } = useUser()
  const stats = [
    { icon: '🔥', label: 'Quest Streak', value: UserProgress?.currentStreak },
    { icon: '✅', label: 'Completed Quests', value: '0/1' },
    { icon: '🏆', label: 'Current Rank', value: 'Crypto Newbie' },
  ]

  return (
    <div className="glass-morphic p-5">
      <h2 className="flex justify-center md:justify-start text-lg md:text-2xl mb-4">Quick Stats</h2>
      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-accent bg-opacity-20 p-3 rounded-lg hover:scale-[1.02] transition-transform">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-xs">{stat.label}</p>
                <p className="text-md md:text-lg font-['Press_Start_2P']">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

