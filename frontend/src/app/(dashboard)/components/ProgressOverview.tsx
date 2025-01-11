
export default function ProgressOverview() {
  const currentXP = 15450;
  const targetXP = 25000;
  const progressPercentage = (currentXP / targetXP) * 100;

  return (
    <div className="glass-morphic p-5 neon-border">
      <h2 className="flex justify-center md:justify-start text-lg  md:text-2xl mb-4 neon-glow">Progress Overview</h2>
      <div className="flex flex-col px-24 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="font-['Press_Start_2P'] neon-glow pt-8">
          <span className="text-2xl md:text-3xl">Lv.</span>
          <span className="text-5xl md:text-6xl">23</span>
        </div>
        <div className="flex-shrink md:py-8 pb-4 md:pt-14 w-60  md:w-full ">
          <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full progress-bar rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span>{currentXP.toLocaleString()} XP</span>
            <span>{targetXP.toLocaleString()} XP</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-md md:text-lg font-['Press_Start_2P'] neon-glow sparkle">Crypto Sage</span>
      </div>
    </div>
  )
}

