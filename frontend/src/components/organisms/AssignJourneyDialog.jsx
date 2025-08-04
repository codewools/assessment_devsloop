
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Stepper from '@/components/atoms/Stepper'
import LearnersList from '@/components/molecules/LearnersList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'sonner'

export default function AssignJourneyDialog() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState([])
  const [currentStep, setCurrentStep] = useState(1)
  const handlePrevStep = () => {
    setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));
  }
  const handleNextStep = () => {
    if (selected.length === 0) {
      toast.error('Please select at least one learner')
      return
    }
    setCurrentStep(prev => (prev < 2 ? prev + 1 : prev))
  }

  const handleSelect = (user) => {
    if (!selected.find(item => item.id === user.id)) {
      setSelected([...selected, user])
    } else {
      toast.warning('Already selected')
    }
  }

  const handleRemove = (id) => {
    setSelected(selected.filter(item => item.id !== id))
  }

  const closeModal = () => {
    setOpen(false)
    setSelected([])
    setCurrentStep(1)
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-purple-600 p-[8px] pl-[24px] pr-[24px] hover:bg-purple-700 text-white"
      >
        Assign Journey
      </Button>

      {open && (
        <div className="bg-white fixed p-4 md:p-0 inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
          ></div>

          <div className="relative z-50 w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-[24px] text-center font-light  mb-4" style={{ fontFamily: 'Recoleta' }}>{currentStep === 1 ? 'Assign learning Journey' : 'Notifcation Preferences'}</h2>
            <Stepper steps={2} className="bg-blue-500" currentStep={currentStep} />


            {currentStep === 1 && (
              <div>




                <div className="mt-4">
                  <LearnersList onSelect={handleSelect} />
                </div>

                <div className="mt-6 text-right">
                  <Button
                    onClick={handleNextStep}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Assign
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 2 && (

              <div className="text-center py-6">
                <span className='fa fas-arrow' onClick={handlePrevStep}>Hello</span>

                <h2 className="text-green-600 text-lg font-semibold">
                  ✅ Successfully assigned!
                </h2>
                <Button
                  onClick={closeModal}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Close
                </Button>
              </div>
            )}

            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
