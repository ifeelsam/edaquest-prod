import Image from 'next/image'

export default function TopBar() {
  return (
    <header className="glass-morphic mb-2 h-auto lg:h-16 flex flex-col lg:flex-row items-center justify-between p-4">
      <div className="flex items-center mb-4 lg:mb-0">
        <Image src="/diamond.png" alt="EdaQuest Logo" width={40} height={40} className="pixel-art" />
        <span className="ml-2 text-3xl font-bold neon-glow">EdaQuest</span>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-4">
        <div className="text-center">
          <p className="text-sm">Level</p>
          <p className="text-xl font-bold neon-glow">23</p>
        </div>
        <div className="w-48 hidden sm:block">
          <p className="text-sm">XP: 23,450/25,000</p>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-accent w-11/12 h-full rounded-full"></div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm">EDU</p>
          <p className="text-xl font-bold">1,000 <span className="text-accent">⧫</span></p>
        </div>
        <div className="relative">
          <Image src="/file.svg" alt="User Avatar" width={40} height={40} className="pixel-art rounded-full neon-border" />
          <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </div>
      </div>
    </header>
  )
}

