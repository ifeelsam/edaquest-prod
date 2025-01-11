'use client'

import Image from 'next/image'
import { Trophy, Star, CheckCircle, Zap, User, Globe, Server, Award, Book } from 'lucide-react'

export default function StatsSidebar() {

  const imgUri = `https://api.dicebear.com/9.x/bottts/svg?seed=sam`
  return (
    <aside className="w-full lg:w-[30%] glass-morphic p-6 space-y-6">
      <div className="flex flex-col items-center mb-6">
        <Image
          src={imgUri}
          alt="User Avatar"
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h2 className="pixel-font text-2xl neon-glow text-center">CryptoMaster</h2>
        <p className="text-sm text-center">Level 23 • Crypto Sage</p>
      </div>

      <div className="space-y-2">
        <p className="flex items-center"><Zap className="mr-2 w-5 h-5" /> Total XP: 23,450</p>
        <p className="flex items-center"><Book className="mr-2 w-5 h-5" /> Quests Completed: 24</p>
        <p className="flex items-center"><Award className="mr-2 w-5 h-5" /> Current Streak: 15 days</p>
      </div>

      <div>
        <h3 className="pixel-font text-xl mb-2 flex items-center"><Trophy className="mr-2 w-5 h-5" /> Ranking</h3>
        <div className="space-y-2">
          <p className="flex items-center"><Globe className="mr-2 w-5 h-5" /> Global Rank: #1,234</p>
          {/* <p className="flex items-center"><Server className="mr-2 w-5 h-5" /> Server Rank: #56</p> */}
          {/* <p className="flex items-center"><Award className="mr-2 w-5 h-5" /> Blockchain Specialist: #78</p> */}
        </div>
      </div>

      <div>
        <h3 className="pixel-font text-xl mb-2 flex items-center"><Star className="mr-2 w-5 h-5" /> Collection Overview</h3>
        <div className="space-y-2">
          <p className="flex items-center"><Trophy className="mr-2 w-5 h-5 text-yellow-400" /> Rare Achievements: 5</p>
          <p className="flex items-center"><CheckCircle className="mr-2 w-5 h-5" /> Total Badges: 24</p>
          <p className="flex items-center"><Zap className="mr-2 w-5 h-5" /> Quest Completion Rate: 92%</p>
          <p className="flex items-center"><Star className="mr-2 w-5 h-5 text-yellow-400" /> Perfect Scores: 7</p>
        </div>
      </div>

      <div>
        <h3 className="pixel-font text-xl mb-2 flex items-center"><Zap className="mr-2 w-5 h-5" /> Next Achievement</h3>
        <div className="glass-morphic p-4 rounded achievement-rotate">
          <Trophy className="w-16 h-16 mx-auto mb-2 text-primary opacity-50" />
          <p className="text-center text-sm">Complete all lessons</p>
          <p className="text-center text-xs text-gray-400">2 lessons remaining</p>
        </div>
      </div>
    </aside>
  )
}

