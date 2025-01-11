'use client'

import { useState } from 'react'
import { Trophy, Code, Database, Cpu, Coins, PaintBucket, TrendingUp, Globe, Headset } from 'lucide-react'

const achievements = [
  { id: 1, name: 'First Quest', icon: Trophy, rarity: 'Common', unlockDate: '2023-05-01', xp: 100, unlocked: true },
  { id: 2, name: 'Code Ninja', icon: Code, rarity: 'Rare', unlockDate: '2023-06-15', xp: 500, unlocked: true },
  { id: 3, name: 'Blockchain Pioneer', icon: Database, rarity: 'Epic', unlockDate: '2023-07-30', xp: 1000, unlocked: true },
  { id: 4, name: 'Smart Contract Sage', icon: Cpu, rarity: 'Legendary', unlockDate: null, xp: 2000, unlocked: false },
  { id: 5, name: 'DeFi Wizard', icon: Coins, rarity: 'Epic', unlockDate: null, xp: 1500, unlocked: false },
  { id: 6, name: 'NFT Collector', icon: PaintBucket, rarity: 'Rare', unlockDate: '2023-08-10', xp: 750, unlocked: true },
  { id: 7, name: 'Crypto Trader', icon: TrendingUp, rarity: 'Common', unlockDate: '2023-09-05', xp: 250, unlocked: true },
  { id: 8, name: 'Web3 Innovator', icon: Globe, rarity: 'Epic', unlockDate: null, xp: 1750, unlocked: false },
  { id: 9, name: 'Metaverse Explorer', icon: Headset, rarity: 'Legendary', unlockDate: null, xp: 2500, unlocked: false },
]

export default function AchievementGrid() {
  const [flippedAchievement, setFlippedAchievement] = useState<number | null>(null)

  return (
    <section className="glass-morphic p-6 mb-6">
      <h2 className="pixel-font text-2xl mb-4 flex items-center">
        <Trophy className="mr-2 w-6 h-6" /> Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`relative w-full h-40 cursor-pointer ${achievement.unlocked ? '' : 'opacity-50'
              }`}
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setFlippedAchievement(achievement.id)}
            onMouseLeave={() => setFlippedAchievement(null)}
          >
            <div
              className={`absolute w-full h-full transition-transform duration-500 ${flippedAchievement === achievement.id ? '[transform:rotateY(180deg)]' : ''
                }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-800 rounded p-2 [backface-visibility:hidden]">
                <achievement.icon className="w-16 h-16 mb-2 text-primary" />
                <p className="text-center text-sm">{achievement.name}</p>
              </div>
              <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-800 rounded p-2 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className={`text-sm mb-1 ${achievement.rarity === 'Legendary' ? 'text-yellow-400' :
                    achievement.rarity === 'Epic' ? 'text-purple-400' :
                      achievement.rarity === 'Rare' ? 'text-blue-400' :
                        'text-gray-400'
                  }`}>
                  {achievement.rarity}
                </p>
                {achievement.unlockDate ? (
                  <p className="text-xs mb-1">Unlocked: {achievement.unlockDate}</p>
                ) : (
                  <p className="text-xs mb-1">Locked</p>
                )}
                <p className="text-xs">{achievement.xp} XP</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

