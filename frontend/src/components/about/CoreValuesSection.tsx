import { Lightbulb, DoorOpen, Users, Trophy } from 'lucide-react'

const coreValues = [
  { name: 'Innovation', icon: Lightbulb, description: 'Pushing the boundaries of educational technology' },
  { name: 'Accessibility', icon: DoorOpen, description: 'Making quality education available to all' },
  { name: 'Community', icon: Users, description: 'Building a global network of learners' },
  { name: 'Excellence', icon: Trophy, description: 'Maintaining the highest standards in education' },
]

export default function CoreValuesSection() {
  return (
    <section className="mb-16 relative z-10">
      <h2 className="pixel-font text-2xl mb-4">Core Values</h2>
      <div className="grid grid-cols-2 gap-4">
        {coreValues.map((value) => (
          <div key={value.name} className="glass-morphic p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <value.icon className="mr-2 text-[#FF2E6C]" />
              <h3 className="pixel-font text-lg">{value.name}</h3>
            </div>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

