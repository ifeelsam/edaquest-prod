export default function ProgressTracker() {
  const weeklyXP = [1200, 800, 1500, 1000, 2000, 1800, 1300]
  const maxXP = Math.max(...weeklyXP)

  return (
    <section className="glass-morphic p-4 lg:p-6 rounded-lg">
      <h2 className="text-xl lg:text-2xl font-bold mb-4">Progress Tracker</h2>
      <div className="flex items-end space-x-2 h-32 lg:h-48">
        {weeklyXP.map((xp, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-accent"
              style={{ height: `${(xp / maxXP) * 100}%` }}
            ></div>
            <span className="text-xs mt-2">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="mb-2 sm:mb-0">
          <p className="text-sm">Daily Streak</p>
          <p className="text-xl lg:text-2xl font-bold text-accent">🔥 15 Days</p>
        </div>
        <div>
          <p className="text-sm">Next Achievement</p>
          <p className="text-lg font-bold">Smart Contract Master</p>
        </div>
      </div>
    </section>
  )
}

