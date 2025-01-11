'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <aside className="glass-morphic neon-border p-6 w-full lg:w-1/5">
      <div className="mb-8">
        <h2 className="pixel-font text-xl mb-4">Progress Overview</h2>
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-700"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
            />
            <circle
              className="text-primary"
              strokeWidth="8"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
              style={{
                strokeDasharray: `${2 * Math.PI * 44}`,
                strokeDashoffset: `${2 * Math.PI * 44 * (1 - progress / 100)}`,
                transition: 'stroke-dashoffset 0.5s ease',
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="pixel-font text-2xl">{progress}%</span>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="pixel-font text-lg mb-2">Module Stats</h3>
        <p>Lessons completed: 6/8</p>
        <p>Time invested: 4.5 hours</p>
        <p>XP earned: 750/1000</p>
      </div>
      <div>
        <h3 className="pixel-font text-lg mb-2">Next Achievement</h3>
        <div className="glass-morphic p-4 rounded achievement-rotate">
          <Image
            src="/placeholder.svg?text=Achievement&width=64&height=64"
            alt="Next Achievement"
            width={64}
            height={64}
            className="pixel-art mx-auto mb-2 opacity-50"
          />
          <p className="text-center text-sm">Complete all lessons</p>
          <p className="text-center text-xs text-gray-400">2 lessons remaining</p>
        </div>
      </div>
    </aside>
  )
}

