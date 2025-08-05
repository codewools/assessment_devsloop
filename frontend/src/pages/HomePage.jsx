import HeroSection from '@/components/organisms/HeroSection'
import FeaturesSection from '@/components/organisms/FeaturesSection'
import AssignJourneyDialog from '@/components/organisms/AssignJourneyDialog'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="flex justify-center mt-8">
        <AssignJourneyDialog />
      </div>
      <FeaturesSection />
    </>
  )
}
