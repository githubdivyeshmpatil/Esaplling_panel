import React, { useEffect } from 'react'
import bgImagesound from '../assets/images/sound1.png'
import Sound from "../assets/images/sound.png";
import Soundname from './Soundname';



function Audio() {
    useEffect(() => {
        window.scrollTo(0, 0); // Page top pe le jaata hai jab component mount hota hai
      }, []);
  return (
    <>
            <div className="relative w-full">
          {/* Background Image */}
          <img
            src={Sound}
            alt="Background"
            className="w-full h-auto object-contain object-top z-0 relative"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>

          {/* Content Section */}
          <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-20">
            <div className="text-white max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-left sm:text-left">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center sm:text-left">
                Virtual Conference Series
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed text-center sm:text-left">
               Easy display for every room Sound type
Bring live meeting to the next level{" "}
              </p>

              <div className="mt-6 flex justify-center sm:justify-start">
                <button className="px-6 py-3 text-sm sm:text-base bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
          <section className="bg-white py-12 px-6">

<section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-8   ">
      {/* Left Column: Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-900  leading-tight font-bold mb-4">Evolve – G-1 (Camera with Surround Bar) </h2>
       
      </div>

      {/* Right Column: Image */}
      <div className="w-full md:w-1/2">
        <img
          src={bgImagesound}
          alt="Example"
          className="w-full h-auto "
        />
      </div>
    </section>
</section>
<Soundname/>
    </>
  )
}

export default Audio