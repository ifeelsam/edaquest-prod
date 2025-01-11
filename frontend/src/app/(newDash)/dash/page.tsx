import ActiveQuests from "@/components/activeQuest"
import QuickActions from "@/components/quickActions"
import ProgressTracker from "@/components/progressTracker"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl lg:text-3xl font-bold mb-6 neon-glow">Welcome, CryptoWarrior!</h1>
      <ActiveQuests />
      <ProgressTracker />
      <QuickActions />
    </div>
  )
}

