import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

export default function SuccessDialog({ open, onClose }) {
  // 🎉 Trigger fireworks effect when dialog opens
  useEffect(() => {
    if (open) {
      const duration = 2000;
      const animationEnd = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          startVelocity: 20,
          spread: 360,
          ticks: 60,
           scalar: 3.5, 
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          },
        });

        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-cover bg-center transition-opacity duration-300"
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      <div className="relative w-[286px] h-[468px] bg-white shadow-[0px_46px_46px_rgba(0,0,0,0.1),0px_17px_23px_rgba(0,0,0,0.05)] rounded-[24px] p-5 flex flex-col items-center gap-4">
        
        {/* Title */}
        <h1 className="text-[24px] font-normal font-[Recoleta] leading-[33px] text-[#2E2E2E] text-center">
          🎉 Learning Journey Assigned!
        </h1>

        {/* Image Section */}
        <div className="relative w-[246px] h-[222px] flex justify-center">
          {/* Circle */}
          <div className="absolute w-[192.67px] h-[192.67px] top-[22px] bg-[#FF8C22] rounded-full"></div>
          
          {/* Image */}
          <img
            src="/Group 1541.png"
            alt="Success Icon"
            className="absolute w-[192.67px] h-[224px] top-[-9px]"
          />
        </div>

        {/* Buttons */}
        <Button
          onClick={onClose}
          className="bg-[#9738FF] hover:bg-purple-700 text-white w-[246px] h-[46px] rounded-lg font-bold mt-4"
        >
          Setup Another Journey
        </Button>
        <Button
          className="border-2 border-[#9738FF] text-[#9738FF] hover:bg-purple-700 bg-transparent hover:text-white w-[246px] h-[46px] rounded-lg font-bold"
        >
          Close
        </Button>

        {/* Close Icon (X) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#000] hover:text-red-500 text-lg md:top-[-25px] md:right-[-25px] md:text-white "
        >
          ✕
        </button>
      </div>

       
    </div>
  );
}
