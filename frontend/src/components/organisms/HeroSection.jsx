import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="w-full mx-auto flex items-center justify-center pt-30 px-6">
      <div className="text-center flex flex-col justify-center w-full sm:w-3/4 md:w-1/2">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold " 
          style={{ fontFamily: 'Recoleta' }}
        >
          Oops! You just clicked on a simulated phishing email.
        </h1>  

        <p className="text-gray-600 text-base sm:text-lg flex items-center mx-auto w-full sm:w-3/4 md:w-2/3 mt-4">
          This was part of a scheduled security simulation. You’re not at fault. 
          These exercises are designed to build awareness and strengthen our defense 
          against real-world threats.
        </p>

      
      </div>
    </section>
  )
}
