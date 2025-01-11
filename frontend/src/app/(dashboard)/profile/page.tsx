import QuestJourney from "../components/profile/QuestJourney";
import SkillTree from "../components/profile/SkillTree";
import StatsSidebar from "../components/profile/StatsSidebar";

export default function Profile() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <StatsSidebar />
        <main className="w-full lg:w-[70%] space-y-6">
          <QuestJourney />
          <SkillTree />
        </main>
      </div>
    </div>
  )
}

