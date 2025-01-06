export default function QuickActions() {
  return (
    <section className="glass-morphic p-4 lg:p-6 rounded-lg">
      <h2 className="text-xl lg:text-2xl font-bold mb-4">Quick Actions</h2>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <button className="neon-button px-6 py-3 rounded-lg text-lg w-full lg:w-auto">
          Continue Learning
        </button>
        <div className="w-full lg:w-auto">
          <h3 className="text-lg font-bold mb-2">Daily Challenges</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Complete a lesson</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Solve 3 coding challenges</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Participate in community forum</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto">
          <h3 className="text-lg font-bold mb-2">Next Milestone</h3>
          <p className="text-accent">Level 24: Blockchain Pioneer</p>
          <p className="text-sm">1,550 XP to go</p>
        </div>
      </div>
    </section>
  )
}


