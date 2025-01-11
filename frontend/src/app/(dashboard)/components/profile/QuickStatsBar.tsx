import Image from 'next/image'

export default function QuickStatsBar() {
  return (
    <div className="glass-morphic neon-border p-4 mb-8 flex justify-between items-center">
      <div className="flex items-center">
        <span className="mr-2">Difficulty:</span>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-xl ${i < 3 ? 'text-red-500' : 'text-gray-500'}`}>♥</span>
        ))}
      </div>
      <div className="flex items-center">
        <Image src="/placeholder.svg?text=coin&width=24&height=24" alt="XP" width={24} height={24} className="pixel-art mr-2" />
        <span>1000 XP</span>
      </div>
      <div className="flex items-center">
        <Image src="/placeholder.svg?text=hourglass&width=24&height=24" alt="Time" width={24} height={24} className="pixel-art mr-2" />
        <span>6 hours</span>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Progress:</span>
        <div className="w-32 h-4 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-primary flowing-gradient"></div>
        </div>
        <span className="ml-2">75%</span>
      </div>
    </div>
  )
}

