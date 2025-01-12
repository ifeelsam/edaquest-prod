import { Shield, Gamepad2, Users, Briefcase } from 'lucide-react'

const features = [
  { name: 'Blockchain-Verified Learning', icon: Shield, description: 'Secure and verifiable achievements' },
  { name: 'Gamified Education Modules', icon: Gamepad2, description: 'Engaging and interactive learning experiences' },
  { name: 'Community-Driven Growth', icon: Users, description: 'Collaborative learning environment' },
  { name: 'Real-World Applications', icon: Briefcase, description: 'Practical skills for the modern world' },
]

export default function FeaturesSection() {
  return (
    <section className="relative z-10">
      <h2 className="pixel-font text-2xl mb-4">Features</h2>
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature) => (
          <div key={feature.name} className="glass-morphic p-4 rounded-lg neon-border hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <feature.icon className="mr-2 text-[#4B50BE]" />
              <h3 className="pixel-font text-lg">{feature.name}</h3>
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

