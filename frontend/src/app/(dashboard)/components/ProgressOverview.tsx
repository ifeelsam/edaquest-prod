import { useUser } from "@/components/store/useUser";
import Link from "next/link";

export default function ProgressOverview() {
  const { UserProgress } = useUser();

  const currentXP = Number(UserProgress?.totalXP) || 0;
  const lvl = Number(UserProgress?.level);
  const targetXP = 25000;
  const progressPercentage = (currentXP / targetXP) * 100;
  if (!UserProgress?.subscriptionType && !UserProgress?.subscriptionTakenAt) {
    return (
      <div className="glass-morphic p-5 neon-border">
        <h2 className="flex justify-center text-xl md:text-2xl mb-4 neon-glow">
          No Active Subscription
        </h2>
        
        <div className="text-center">
          {/* <div className="font-['Press_Start_2P'] neon-glow mb-6">
            <span className="text-2xl md:text-3xl">Lv.</span>
            <span className="text-5xl md:text-6xl">{lvl}</span>
          </div> */}
          
          <p className="mb-6">Unlock premium features to accelerate your crypto mastery!</p>
          
          <div className="mb-6 text-center max-w-md mx-auto ">
            <ul className="space-y-3">
              <li>
                <span className="neon-glow mr-2">✦</span>
                <span>Earn XP, up your level and way learn faster</span>
              </li>
              <li>
                <span className="neon-glow mr-2">✦</span>
                <span>Access advanced crypto training modules </span>
              </li>
              <li>
                <span className="neon-glow mr-2">✦</span>
                <span>Track your progress with detailed analytics</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-4 mb-6">
            <span className="text-md md:text-lg font-['Press_Start_2P'] neon-glow sparkle">
              no subscription
            </span>
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          <Link
            href="/plans"
            className="glass-morphic neon-button px-8 py-3 text-center font-['Press_Start_2P'] text-sm  hover:brightness-125 transition-all duration-300"
          >
            View Plans
          </Link>
        </div>
      </div>
    );
  } else
    return (
      <div className="glass-morphic p-5 neon-border">
        <h2 className="flex justify-center md:justify-start text-lg  md:text-2xl mb-4 neon-glow">
          Progress Overview
        </h2>
        <div className="flex flex-col px-24 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="font-['Press_Start_2P'] neon-glow pt-8">
            <span className="text-2xl md:text-3xl">Lv.</span>
            <span className="text-5xl md:text-6xl">{lvl}</span>
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
          <span className="text-md md:text-lg font-['Press_Start_2P'] neon-glow sparkle">
            Crypto Sage
          </span>
        </div>
      </div>
    );
}
