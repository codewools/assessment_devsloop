import { Button } from '@/components/ui/button'

export default function SuccessDialog({ open, onClose, message }) {
  if (!open) return null;

  return (
    <div  
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-cover bg-center transition-opacity duration-300"
      style={{ backgroundImage: "url('/image 136.png')" }}
    >
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      ></div>

      {/* Dialog Box */}
      <div className="relative z-50 w-[287px] max-w-md bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300">
        {/* Title */}
        <h1 className='text-2xl py-3' style={{ fontFamily: "Recoleta" }}>
          Learning Journey is Assigned
        </h1>

        {/* Orange Circle with Simple Animation */}
        <div className="flex justify-center mb-4">
          <div className="relative w-[244px] h-[244px] rounded-full bg-orange-500 flex items-center justify-center ">
            <img
              src="/Group 1541.png"
              alt="Success Icon"
              className="w-full animate-pulse object-contain absolute transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Buttons */}
        <Button 
          onClick={onClose} 
          className="bg-purple-600 font-bold hover:bg-purple-700 text-white px-6 w-full mt-5 p-6"
        >
          Setup Another Journey
        </Button>
        <Button 
          className="border-3 border-purple-600 bg-transparent font-bold hover:bg-purple-700 hover:text-white text-purple-600 px-6 w-full mt-5 p-6"
        >
          Setup Another Journey
        </Button>
      </div>
    </div>
  );
}
