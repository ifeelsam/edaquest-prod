'use client'

import { useState } from 'react'
import { Award, Star, ArrowUp, Book, Trophy } from 'lucide-react'

const activities = [
  { id: 1, type: 'quest', name: 'Blockchain Basics', timestamp: '2023-09-10 14:30', xp: 500, icon: Book },
  { id: 2, type: 'achievement', name: 'Code Ninja', timestamp: '2023-09-09 10:15', xp: 750, icon: Trophy },
  { id: 3, type: 'level_up', name: 'Level 23', timestamp: '2023-09-08 18:45', xp: 1000, icon: ArrowUp },
  { id: 4, type: 'quest', name: 'Smart Contract Development', timestamp: '2023-09-07 09:00', xp: 800, icon: Book },
  { id: 5, type: 'achievement', name: 'DeFi Explorer', timestamp: '2023-09-06 16:20', xp: 600, icon: Star },
]

export default function QuestJourney() {
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null)

  return (
    <section className="glass-morphic p-6 mb-6">
      <h2 className="pixel-font text-2xl mb-4 flex items-center neon-glow">
        <Award className="mr-2 w-6 h-6" /> Quest Journey
      </h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-gray-800 p-4 rounded cursor-pointer transition-all duration-300 hover:bg-gray-700"
            onClick={() => setExpandedActivity(expandedActivity === activity.id ? null : activity.id)}
          >
            <div className="flex items-center">
              <activity.icon className="mr-2 w-6 h-6" />
              <div>
                <p className="font-semibold">{activity.name}</p>
                <p className="text-xs text-gray-400">{activity.timestamp}</p>
              </div>
              <p className="ml-auto">{activity.xp} XP</p>
            </div>
            {expandedActivity === activity.id && (
              <div className="mt-2 text-sm">
                <p>Additional details about {activity.name} would go here.</p>
                <p>This could include quest objectives, achievement criteria, or level-up rewards.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

