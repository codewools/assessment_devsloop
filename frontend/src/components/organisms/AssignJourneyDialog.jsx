import { useState ,useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import Stepper from '@/components/atoms/Stepper';
import LearnersList from '@/components/molecules/LearnersList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner';
import DropDownofMonthInLearnerList from '../molecules/DropDownofMonthInLearnerList';
import SuccessDialog from '../molecules/SuccessDialog';

export default function AssignJourneyDialog() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
const [autoOpenDropdown, setAutoOpenDropdown] = useState(false);

  // ✅ Disable scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  /**      Memoized: Handle selecting a learner */
const handleSelect = useCallback((user) => {
  setSelected((prevSelected) => {
    const alreadySelected = prevSelected.some((item) => item.id === user.id);

    if (!alreadySelected) {
      return [...prevSelected, user];
    }

    return prevSelected;
  });
}, []);


  /**      Memoized: Remove learner tag */
  const handleRemove = useCallback((id) => {
    setSelected((prev) => prev.filter((item) => item.id !== id));
  }, []);

  /**      Memoized: Go to previous step */
  const handlePrevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  }, []);

  /**      Memoized: Go to next step */
  const handleNextStep = useCallback(() => {
    if (selected.length === 0) {
      toast.error('Please select at least one learner');
      return;
    }
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    } else {
      sessionStorage.setItem("selectedLearnersCount", selected.length);
      setShowSuccess(true);
      setOpen(false);
    }
  }, [selected, currentStep]);

  /**      Close and reset modal */
  const closeModal = useCallback(() => {
    setOpen(false);
    setSelected([]);
    setCurrentStep(1);
  }, []);

  return (
    <>
      {/* Open Modal Button */}
      <Button
        onClick={() => setOpen(true)}
        className="bg-purple-600 pl-[24px] pr-[24px] pt-[8px] pb-[8px] hover:bg-purple-700 text-white text-sm md:text-[16px] font-bold"
      >
        Assign Learners
      </Button>

      {open && (
        <div className="bg-white fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" onClick={closeModal}></div>

          {/* Modal Box */}
          <div className="relative z-50 max-w-lg w-[578px] bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h2
              className="text-lg md:text-2xl text-center font-light mb-4"
              style={{ fontFamily: 'Recoleta' }}
            >
              {currentStep === 1 ? 'Assign Learning Journey' : 'Notification Preferences'}
            </h2>

            <Stepper steps={2} currentStep={currentStep} />

            {/*      Step 1 */}
            {currentStep === 1 && (
              <div className="relative h-50 rounded-lg p-2 sm:p-4">
                <div className="absolute inset-0 z-10 flex w-[90%] mt-10 items-center mx-auto">
                  <p className="text-xs sm:text-sm font-normal text-gray-400 mt-4">
                    Assigning courses will use up one seat depending on your subscription plan.
                    Unassigning before the course starts refunds the seat. Language selection is offered
                    at the start of the course.
                  </p>
                </div>
                <div className="absolute top-4 left-4 right-4 z-51 bg-white rounded-md">
                  <LearnersList onSelect={handleSelect} onRemove={handleRemove} />
                </div>
              </div>
            )}

            {/*      Step 2 */}
            {currentStep === 2 && (
              <div className="py-12 sm:py-10 relative">
                {/* Back Button */}
                <div className="absolute left-0 top-[-60px] sm:top-[-70px] py-2">
                  <i
                    onClick={handlePrevStep}
                    className="text-xl sm:text-2xl fa fa-arrow-left cursor-pointer hover:text-purple-600"
                  ></i>
                </div>

                {/* Notification Settings */}
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center md:gap-8 gap-3 px-4 w-full">
                  <div className="flex-1">
                    <span className="font-bold text-sm block">Notification</span>
                    <span className="font-light text-xs text-gray-600">
                      When to notify learners via email, Slack or text (when enabled)
                    </span>
                  </div>
                  <div className="flex-1 w-full md:w-auto">
                    <DropDownofMonthInLearnerList
                      onSelect={(value) => console.log("Selected:", value)}
                    />
                  </div>
                </div>

                <div className="border-b mx-auto w-[90%] p-2"></div>
                <p className="md:text-end text-start px-4 text-xs md:text-sm mt-2 font-bold">
                  20 are training going to be assigned
                </p>
              </div>
            )}

            {/* Close Button */}
            <button
              className="absolute top-1 right-1 md:top-[-25px] md:right-[-25px] text-gray-700 md:text-white hover:text-red-500"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            {/* Footer */}
            <div className="text-center mt-4 md:mt-6">
              <Button
                onClick={handleNextStep}
                disabled={selected.length === 0}
                className={`px-6 py-3 text-sm md:text-base text-white w-full sm:w-auto ${
                  selected.length === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                Assign
              </Button>
              <p className="font-light text-xs sm:text-sm mt-2">
                Or use <span className="text-purple-600">learner’s tab</span> to assign custom groups of learners.
              </p>
              <p className="font-light text-xs sm:text-sm">
                Use <span className="text-purple-600">automations</span> to make auto-assign rules.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Dialog */}
      <SuccessDialog
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          setSelected([]);
          setCurrentStep(1);
        }}
        message="Training assigned successfully to selected learners!"
      />
    </>
  );
}
