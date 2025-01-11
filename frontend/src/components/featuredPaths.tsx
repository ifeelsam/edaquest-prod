import Image from 'next/image'

const paths = [
  {
    title: "Crypto Warrior Path",
    description: "Master blockchain fundamentals",
    quests: 8,
    achievements: 24,
    level: "Beginner",
    badge: "Blockchain Pioneer",
    image: "/heart.png"
  },
  {
    title: "Web3 Wizard Track",
    description: "Build the decentralized future",
    quests: 12,
    achievements: 36,
    level: "Intermediate",
    badge: "Smart Contract Sage",
    image: "/heart.png"
  },
  {
    title: "DeFi Explorer Journey",
    description: "Navigate the future of finance",
    quests: 10,
    achievements: 30,
    level: "Advanced",
    badge: "DeFi Oracle",
    image: "/heart.png"
  }
]

export default function FeaturedPaths() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center neon-glow">Featured Learning Paths</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div key={index} className="glass-morphic p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src={path.image} alt={path.title} width={200} height={200} className="pixel-art mx-auto mb-4" />
              <p className="text-2xl md:text-4xl font-bold mb-2">{path.title}</p>
              <p className="mb-4">{path.description}</p>
              <div className="mb-4 text-sm">
                <p>{path.quests} quests, {path.achievements} achievements</p>
                <p>Entry Level: {path.level}</p>
                <p>Popular badge: &ldquo;{path.badge}&rdquo;</p>
              </div>
              <button className="neon-button w-full py-2 rounded">Start Learning</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

