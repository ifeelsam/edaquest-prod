import Link from "next/link";

const quests = [
  {
    name: "Quantum Entanglement",
    progress: 0,
    xpReward: 1000,
    timeRemaining: "2 days",
    difficulty: 3,
    link: "/game",
    status: true
  },
  {
    name: "DeFi Protocol Analysis Fundamentals",
    progress: 900,
    xpReward: 1500,
    timeRemaining: "5 days",
    difficulty: 4,
    link: "/quest/2",
    status: false
  },
  {
    name: "Blockchain Architecture",
    progress: 400,
    xpReward: 800,
    timeRemaining: "1 day",
    difficulty: 2,
    link: "/quest/3",
    status: false
  }
]

function progressPercentage(currentXP: number, targetXP: number): number {
  const progressPercentage = (currentXP / targetXP) * 100;
  return Math.floor(progressPercentage);
}
export default function ActiveQuests() {

  return (
    <section className="glass-morphic px-6 pb-1 pt-6 rounded-lg neon-border">
      <h2 className="flex justify-center md:justify-start text-lg md:text-2xl font-bold mb-4 neon-glow">Active Quests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quests.map((quest, index) => (
          <div 
            key={index} 
            className={`relative p-4 rounded-lg group transition-transform ${quest.status ? 'hover:scale-105' : 'cursor-not-allowed'}`}
          >
            <div className={`${!quest.status ? 'blur-sm' : ''}`}>
              <Link href={quest.status ? quest.link : '#'}>
                <h3 className={`text-2xl md:text-4xl font-bold mb-5 ${quest.status ? 'group-hover:neon-glow' : ''}`}>{quest.name}</h3>
                <p className="text-xs md:text-sm hover:text-white">XP Reward: {quest.xpReward} <span className="text-yellow-400">🪙</span></p>
                <p className="text-xs md:text-sm">Time Remaining: {quest.timeRemaining} ⏳</p>
                <div className="flex justify-between items-center">
                  <div className="w-56 md:w-80 bg-gray-700 rounded-full h-2">
                    <div className="progress-bar h-full rounded-full" style={{ width: `${progressPercentage(quest.progress, quest.xpReward)}%` }}></div>
                  </div>
                  <span className="text-md md:text-lg font-semibold">{progressPercentage(quest.progress, quest.xpReward)}%</span>
                </div>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg md:text-3xl ${i < quest.difficulty ? 'text-red-500' : 'text-gray-500'}`}>♥</span>
                  ))}
                </div>
              </Link>
            </div>
            {!quest.status && (
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-3xl font-bold">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
