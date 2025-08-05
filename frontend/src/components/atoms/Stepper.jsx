import { cn } from "@/lib/utils"

export default function Stepper({ steps = 2, currentStep = 1 }) {
  return (
    <div className="relative flex items-center justify-between w-40 mx-auto">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 rounded"></div>
      <div
        className="absolute top-1/2 left-0 h-0.5 bg-purple-600 rounded transition-all duration-300"
        style={{ width: `${((currentStep - 1) / (steps - 1)) * 100}%` }}
      ></div>
      {[...Array(steps)].map((_, index) => (
        <div
          key={index}
          className={cn(
            "relative z-10 flex items-center justify-center w-4 h-4 rounded-full",
            currentStep >= index + 1 ? "bg-purple-600" : "bg-gray-300"
          )}
        ></div>
      ))}
    </div>
  )
}
