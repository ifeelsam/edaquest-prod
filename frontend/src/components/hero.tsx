
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-glow">
          Level Up Your Learning Journey
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Where Education Meets Adventure in the Digital Realm
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold neon-glow">1000+</p>
            <p className="text-sm sm:text-base">Active Questers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold neon-glow">300+</p>
            <p className="text-sm sm:text-base">Learning Adventures</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold neon-glow">5,000+</p>
            <p className="text-sm sm:text-base">Achievements Unlocked</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold neon-glow">92%</p>
            <p className="text-sm sm:text-base">Quest Completion Rate</p>
          </div>
        </div>
        <button className="neon-button text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-xl">
          Start Your Quest
        </button>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpeg"
          alt="Classroom transforming into gaming arena"
          layout="fill"
          objectFit="cover"
          className="pixel-art"
        />
      </div>
      <div className="absolute inset-0 z-0 grid-background"></div>
    </section>
  )
}

