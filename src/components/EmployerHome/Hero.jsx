import React from 'react'
import employer_2 from '../../assets/employer-2.png'
import Typed from 'react-typed';
import { Link } from "react-router-dom" 

function Hero() {
  return (
        <section className="hero min-h-screen relative" style={{ backgroundImage: `url(${employer_2})` }}>
        <div
            class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25">
        </div>
	        <div className="relative container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			        <h1 className="text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl mt-6 lg:mt-0 text-black font-projectFont">
                        Welcome Employer
			        </h1>
                    <Typed
                        className='mt-6 mb-8 text-3xl md:text-4xl sm:mb-12 font-projectFont font-bold text-orange'
                        strings={['Good candidates are here!', 'Start your New Hire now!']}
                        typeSpeed={100}
                        backSpeed={110} 
                        loop
                    />
			        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				        <Link to="/" className="px-8 py-3 text-lg font-projectFont font-semibold rounded-lg shadow-xl bg-white text-orange hover:bg-orange-500 hover:scale-105 hover:text-white active:bg-orange-200">Post Job</Link>
                        <Link to="/" className="px-8 py-3 text-lg font-projectFont font-semibold rounded-lg shadow-xl bg-white text-orange hover:bg-orange-500 hover:scale-105 hover:text-white active:bg-orange-200">Job List</Link>
			        </div>
                    <div className="pt-6 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				        <Link to="/" className="px-8 py-3 text-lg font-projectFont font-semibold rounded-lg shadow-xl bg-white text-orange hover:bg-orange-500 hover:scale-105 hover:text-white active:bg-orange-200">Candidate Review</Link>
                    </div>
		        </div>
	        </div>
        </section>


  )
}

export default Hero