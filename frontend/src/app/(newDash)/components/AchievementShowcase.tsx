
import Image from 'next/image'

export default function AchievementShowcase() {
  return (
    <div className="glass-morphic p-5 neon-border">
      <h2 className="text-2xl mb-4 neon-glow">Latest Achievement</h2>
      <div className="flex items-center space-x-4">
        <div className="w-32 h-32 relative">
          <Image src="/heart.png" alt="Achievement Badge" width={128} height={128} className="pixel-art spin" />
        </div>
        <div>
          <h3 className="text-xl font-['Press_Start_2P'] mb-2">Smart Contract Apprentice</h3>
          <p className="text-sm">Earned 2 hours ago</p>
        </div>
      </div>
    </div>
  )
}

