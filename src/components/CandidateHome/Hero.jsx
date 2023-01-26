import React from 'react'
import job_applicant_2 from '../../assets/job-applicant-2.png'
import Typed from 'react-typed';
import { Link } from "react-router-dom" 

function Hero() {
  return (
        <section className="hero min-h-screen relative" style={{ backgroundImage: `url(${job_applicant_2})` }}>
        <div
            class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25">
        </div>
	        <div className="relative container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			        <h1 className="text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl mt-6 lg:mt-0 text-black font-projectFont">
                        Welcome Candidate
			        </h1> 
                    <Typed
                        className='mt-6 mb-8 text-3xl md:text-4xl sm:mb-12 font-projectFont font-bold text-blue'
                        strings={['Apply your Job now!', 'Find your Dream Job here!']}
                        typeSpeed={100}
                        backSpeed={110} 
                        loop
                    />
			        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				        <Link to="/JobListing" className="px-8 py-3 text-lg border font-projectFont font-semibold rounded-lg shadow-xl border-blue bg-white text-blue hover:bg-blue hover:scale-105 hover:text-white duration-200 active:bg-blue-200">Job Search</Link>
			        </div>
		        </div>
	        </div>
        </section>


  )
}

export default Hero