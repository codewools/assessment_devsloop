import FeatureCard from '@/components/molecules/FeatureCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faUsers, faChartBar } from '@fortawesome/free-solid-svg-icons'
import AssignedLearners from '../molecules/AssignedLearners'
import Descript from '../molecules/Descript'

export default function FeaturesSection() {
  return (
    <section>
      <AssignedLearners />

      <FeatureCard />
      <Descript />

    </section>
  )
}
