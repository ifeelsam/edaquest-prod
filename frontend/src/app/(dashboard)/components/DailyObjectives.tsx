export default function DailyObjectives() {
  const objectives = [
    { icon: '📚', name: 'Complete Module Quiz', xp: 300 },
    { icon: '📖', name: 'Read Documentation', xp: 200 },
    { icon: '💻', name: 'Practice Coding', xp: 500 },
  ]

  return (
    <div className="glass-morphic p-5">
      <h2 className="flex justify-center md:justify-start text-lg md:text-2xl mb-4">Daily Objectives</h2>
      <ul className="space-y-4">
        {objectives.map((objective, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-2xl">{objective.icon}</span>
            <div className="flex-grow">
              <p className="text-sm">{objective.name}</p>
              <p className="text-xs text-highlight">{objective.xp} XP</p>
            </div>
            <input type="checkbox" className="custom-checkbox" />
          </li>
        ))}
      </ul>
    </div>
  )
}

