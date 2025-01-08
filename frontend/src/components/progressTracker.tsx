'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProgressRing = ({ progress }: { progress: number }) => (
  <div className="relative w-32 h-32 lg:w-48 lg:h-48">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle
        className="text-gray-700 stroke-current"
        strokeWidth="8"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      />
      <circle
        className="text-accent progress-ring stroke-current"
        strokeWidth="8"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDasharray={`${2 * Math.PI * 40}`}
        strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-2xl lg:text-4xl font-bold">{Math.round(progress)}%</span>
    </div>
  </div>
)

const HexagonNode = ({ children, isActive = false }: { children: React.ReactNode, isActive?: boolean }) => (
  <div className={`hexagon w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center ${isActive ? 'active' : ''}`}>
    {children}
  </div>
)

const SkillNode = ({ name, level, maxLevel }: { name: string, level: number, maxLevel: number }) => (
  <motion.div
    className="skill-node p-2 bg-primary/20 rounded-lg cursor-pointer"
    whileHover={{ scale: 1.1 }}
  >
    <div className="text-center mb-1">{name}</div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-accent h-full rounded-full"
        style={{ width: `${(level / maxLevel) * 100}%` }}
      ></div>
    </div>
    <div className="text-center mt-1 text-xs">{level}/{maxLevel}</div>
  </motion.div>
)

export default function AdvancedProgressTracker() {
  const [activeNode, setActiveNode] = useState<number | null>(null)

  const progressData = {
    overallProgress: 75,
    dailyStreak: 15,
    activeQuests: 3,
    completedQuests: 24,
    skillLevels: [
      { name: 'Blockchain', level: 7, maxLevel: 10 },
      { name: 'Smart Contracts', level: 5, maxLevel: 10 },
      { name: 'DeFi', level: 3, maxLevel: 10 },
      { name: 'Cryptography', level: 6, maxLevel: 10 },
    ],
  }

  return (
    <section className="glass-morphic p-4 lg:p-6 rounded-lg overflow-hidden">
      <h2 className="text-xl lg:text-2xl font-bold mb-4">Advanced Progress Tracker</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-center space-y-4">
          <ProgressRing progress={progressData.overallProgress} />
          <div className="text-center">
            <p className="text-lg font-bold">Overall Progress</p>
            <p className="text-sm text-accent">Level 23 - Blockchain Pioneer</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Daily Streak</span>
            <span className="text-accent font-bold">🔥 {progressData.dailyStreak} days</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Active Quests</span>
            <span className="text-accent font-bold">{progressData.activeQuests}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Completed Quests</span>
            <span className="text-accent font-bold">{progressData.completedQuests}</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Skill Constellation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {progressData.skillLevels.map((skill, index) => (
            <SkillNode key={index} {...skill} />
          ))}
        </div>
      </div>
      {/**/}
      {/* <div className="mt-8"> */}
      {/*   <h3 className="text-lg font-bold mb-4">Learning Path</h3> */}
      {/*   <div className="flex flex-wrap justify-center gap-4"> */}
      {/*     {[1, 2, 3, 4, 5].map((node) => ( */}
      {/*       <HexagonNode key={node} isActive={activeNode === node}> */}
      {/*         <button */}
      {/*           className="w-full h-full flex items-center justify-center text-2xl" */}
      {/*           onClick={() => setActiveNode(node)} */}
      {/*         > */}
      {/*           {node} */}
      {/*         </button> */}
      {/*       </HexagonNode> */}
      {/*     ))} */}
      {/*   </div> */}
      {/* </div> */}
    </section>
  )
}

