import CoreValuesSection from "@/components/about/CoreValuesSection";
import FeaturesSection from "@/components/about/FeaturesSection";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import VisionSection from "@/components/about/VisionSection";
import Particles from "@/components/Particles";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A1E] to-[#1E1E3F] text-white relative overflow-x-hidden">
      <Particles />
      <div className="grid-background absolute inset-0 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <HeroSection />
        <MissionSection />
        <VisionSection />
        <CoreValuesSection />
        <FeaturesSection />
      </div>
    </div>
  )
}

