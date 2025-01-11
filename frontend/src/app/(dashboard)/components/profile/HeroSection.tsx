import Image from 'next/image'

export default function HeroSection() {
  const imgUri = `https://api.dicebear.com/9.x/bottts/svg?seed=red`

  return (
    <section className="glass-morphic h-[250px] mb-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20"></div>
      <div className="relative h-full flex items-end p-6">
        <div className="flex items-end">
          <div className="relative mr-6">
            <Image
              src={imgUri}
              alt="User Avatar"
              width={120}
              height={120}
              className="rounded-full neon-border pixel-art hover:rotate"
            />
          </div>
          <div>
            <h1 className="pixel-font text-3xl mb-2">CryptoMaster</h1>
            <p className="text-lg mb-1">Crypto Sage</p>
            <p className="text-sm">LVL 23</p>
          </div>
        </div>
        <div className="ml-auto flex space-x-6">
          <div className="text-center">
            <Image
              src="/placeholder.svg?text=XP&width=24&height=24"
              alt="XP"
              width={24}
              height={24}
              className="inline-block mb-1 pixel-art"
            />
            <p className="pixel-font text-sm">23,450</p>
            <p className="text-xs">Total XP</p>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?text=Quest&width=24&height=24"
              alt="Quests"
              width={24}
              height={24}
              className="inline-block mb-1 pixel-art"
            />
            <p className="pixel-font text-sm">24</p>
            <p className="text-xs">Completed</p>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?text=Streak&width=24&height=24"
              alt="Streak"
              width={24}
              height={24}
              className="inline-block mb-1 pixel-art"
            />
            <p className="pixel-font text-sm">15</p>
            <p className="text-xs">Day Streak</p>
          </div>
        </div>
      </div>
    </section>
  )
}

