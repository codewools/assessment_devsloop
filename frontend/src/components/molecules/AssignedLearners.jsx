import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Switch } from "@/components/ui/switch";

export default function AssignedLearners() {
  const [learnerCount, setLearnerCount] = useState(0);

  // Load saved learner count from session storage when the component loads
  useEffect(() => {
    const count = sessionStorage.getItem("selectedLearnersCount");
    if (count) setLearnerCount(parseInt(count, 10));
  }, []);

  return (
    <div className="mx-auto w-full max-w-[1231px] py-6 px-4">
      <div className="border rounded-2xl bg-neutral-50 border-gray-300 p-4 sm:p-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <h1 className="font-bold text-lg">Assigned learners</h1>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center">
            <h2 className="font-bold text-sm sm:text-base">
              {learnerCount} Learners selected
            </h2>
            <Button className="bg-purple-100 text-purple-600 font-bold hover:bg-purple-200 w-full sm:w-auto">
              Assign
            </Button>
          </div>
        </div>

        {/* Auto-assign toggle */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
          <Switch
            defaultChecked
            className="data-[state=checked]:bg-purple-500 data-[state=unchecked]:bg-gray-300"
          />
          <p className="font-thin text-sm">Assign new learners automatically</p>
          <p className="font-thin text-sm">
            Edit in <span className="text-purple-600 underline">Automations</span>
          </p>
        </div>
      </div>
    </div>
  );
}
