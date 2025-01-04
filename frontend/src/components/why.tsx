
export default function WhyEdaQuest() {
  const reasons = [
    "Learn Through Adventure",
    "Earn While You Learn",
    "Build Your Digital Legacy",
    "Join a Global Quest Community"
  ]

  return (
    <section className="py-20 px-4 bg-secondary bg-opacity-10">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center neon-glow">Why EdaQuest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">🚀</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{reason}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

