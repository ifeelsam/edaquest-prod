import { Rocket } from 'lucide-react'

export default function MissionSection() {
  return (
    <section className="mb-16 glass-morphic p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 relative z-10">
      <h2 className="pixel-font text-2xl mb-4 flex items-center">
        <Rocket className="mr-2" /> Our Mission
      </h2>
      <p className="text-lg">
        EdaQuest revolutionizes education by combining blockchain technology with gamified learning experiences. We transform traditional education into exciting quests where every achievement is verifiable and valuable.
      </p>
    </section>
  )
}

