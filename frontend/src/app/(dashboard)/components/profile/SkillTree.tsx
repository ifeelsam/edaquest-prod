'use client'

import { useState } from 'react'
import { Database, Code, Coins, PaintBucket, Globe, Lock } from 'lucide-react'

const skills = [
  { id: 1, name: 'Blockchain', icon: Database, level: 3, maxLevel: 5, progress: 60, unlocked: true },
  { id: 2, name: 'Smart Contracts', icon: Code, level: 2, maxLevel: 5, progress: 40, unlocked: true },
  { id: 3, name: 'DeFi', icon: Coins, level: 1, maxLevel: 5, progress: 20, unlocked: true },
  { id: 4, name: 'NFTs', icon: PaintBucket, level: 0, maxLevel: 5, progress: 0, unlocked: false },
  { id: 5, name: 'Web3', icon: Globe, level: 1, maxLevel: 5, progress: 10, unlocked: true },
  { id: 6, name: 'Cryptography', icon: Lock, level: 0, maxLevel: 5, progress: 0, unlocked: false },
]

export default function SkillTree() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  return (
    <section className="glass-morphic p-6 mb-6">
      <h2 className="pixel-font text-2xl mb-4 flex items-center neon-glow">
        <Code className="mr-2 w-10 h-10 neon-glow" /> Skill Tree
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`relative p-4 rounded-xl ${skill.unlocked ? 'bg-gray-600' : 'hidden'} ${skill.unlocked && skill.level < skill.maxLevel ? 'pulse' : ''}`}
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex flex-col items-center justify-center">
              <skill.icon className="w-12 h-12 mb-2 text-primary" />
              <p className="text-center text-sm font-semibold">{skill.name}</p>
              <p className="text-xs mt-1">Level: {skill.level}/{skill.maxLevel}</p>
            </div>
            {hoveredSkill === skill.id && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-900 p-2 rounded text-xs z-10 mt-2">
                <p>Progress: {skill.progress}%</p>
                <p>Next level: {skill.unlocked ? `${skill.level + 1}/${skill.maxLevel}` : 'Locked'}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

