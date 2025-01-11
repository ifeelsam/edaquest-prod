import Image from 'next/image'

const lessons = [
  { id: 1, title: "Smart Contract Basics", icon: "📚", status: "completed", time: "1h" },
  { id: 2, title: "Data Types & Variables", icon: "🧱", status: "completed", time: "1.5h" },
  { id: 3, title: "Functions & Modifiers", icon: "⚡", status: "current", time: "2h" },
  { id: 4, title: "Security Best Practices", icon: "🛡️", status: "locked", time: "1.5h" },
]

export default function ProgressPath() {
  return (
    <div className="flex flex-col items-center space-y-4 mb-8">
      {lessons.map((lesson, index) => (
        <div key={lesson.id} className="relative">
          <div className={`glass-morphic neon-border p-4 w-64 ${lesson.status === 'current' ? 'pulse' : ''}`}>
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{lesson.icon}</span>
              <h3 className="text-sm font-semibold">{lesson.title}</h3>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">
                {lesson.status === 'completed' && '✅ Completed'}
                {lesson.status === 'current' && '🔵 In Progress'}
                {lesson.status === 'locked' && '🔒 Locked'}
              </span>
              <span className="text-xs">{lesson.time}</span>
            </div>
          </div>
          {index < lessons.length - 1 && (
            <div className="absolute left-1/2 bottom-0 w-0.5 h-4 bg-primary flowing-gradient" style={{ transform: 'translateX(-50%)' }}></div>
          )}
        </div>
      ))}
    </div>
  )
}

