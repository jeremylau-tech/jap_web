import React from 'react'
import bg_home from '../../assets/bg-home.jpg'
import logo_jap from '../../assets/logo-jap.png'
import Typed from 'react-typed';
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom" 

function Hero() {
  return (
    <section className="hero min-h-screen relative" style={{ backgroundImage: `url(${bg_home})` }}>   
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25">
    </div>
    <div class="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center flex flex-col justify-center text-center">
      
      <img className='w-[300px] mx-auto' src={logo_jap} alt="/" />
      <Typed
        className='font-projectFont md:text-5xl sm:text-4xl text-3xl font-black text-black text-center'
        strings={['Jobs Advanced Placements' ,'JAP']}
        typeSpeed={120}
        backSpeed={140}
        loop
         />
      <p className='font-projectFont md:text-xl sm:text-lg text-sm font-medium italic py-10 px-3 text-black'>A one-stop platform that connects and unites students with job opportunities.</p>
      <div class="mt-4 flex flex-wrap justify-center gap-4">
        <Link to='/SignInCandidate'
          className="block w-full rounded-lg shadow-xl bg-blue px-12 py-3 font-projectFont md:text-lg text-base font-semibold text-white  hover:bg-blue-600 hover:scale-105 duration-300 focus:outline-none focus:ring active:bg-blue-300 sm:w-auto"
        >
          For Candidate
        </Link>

        <Link to="/SignInEmployer"
          className="block w-full rounded-lg shadow-xl bg-white px-12 py-3 font-projectFont md:text-lg text-base font-semibold text-orange hover:text-orange-600 hover:scale-105 duration-300 focus:outline-none focus:ring active:text-orange-300 sm:w-auto"
        >
          For Employer
        </Link>
        
      </div>
      </div>
  </section> 
  
  )
}

export default Hero

