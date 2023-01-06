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

/*
import React from 'react';
import Typed from 'react-typed';


function Hero() {
  return (
    <div className='text-white'>
      <div classname='bg-white'>
        <img className='h-[400px] w-full object-cover' src={bgb_usm} alt="/" />
      </div>
      <div className='max-w-[900px] w-full mx-auto my-14 text-center flex flex-col justify-center'>
        <img className='w-[300px] mx-auto' src={logo_usm4u_white} alt="/" />
        <p className='md:text-base sm:text-sm text-xs font-medium text-gray-400'>JOBS ADVANCED PLACEMENTS (JAP)</p>
        <p className='md:text-lg sm:text-base text-sm font-medium italic py-10 px-3 text-[#F68B1F]'>A one-stop platform that connects and unites students with job opportunities.</p>
        <div className='flex justify-center items-center'>
          <p className='md:text-xl sm:text-lg text-base font-semibold'>#</p>
          <Typed
          className='md:text-2xl sm:text-xl text-lg font-bold'
          strings={['WeLead', 'KamiMemimpin']}
          typeSpeed={120}
          backSpeed={140}
          loop />
        </div>
      </div>
    </div>
  )
}

export default Hero



 <div className='relative flex justify-between items-center h-[90px] max-w-[1240px] mx-auto px-4 text-white'>
            <Link to='/' className='p-4'>
              <img className='w-[200px]' src={logo_jap} alt="/" />
            </Link>
        </div>














        const [state, setState] = useState(false)

  return (
    <> 
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-20 w-auto lg:hidden"
                src={logo_jap}
                alt="/"
              />
              <img
                className="hidden h-20 w-auto lg:block"
                src={logo_jap}
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
        
        
       

   <section className="hero min-h-screen relative" style={{ backgroundImage: `url(${bg_home})` }}>   
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25">
    </div>
      <div class="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <h1 class="font-extrabold font-projectFont">
            <span class="text-blue sm:text-6xl md:text-7xl text-5xl">
              J
              <span class="text-black sm:text-5xl md:text-6xl text-4xl">
                obs
              </span>
            </span>
            <span class="block text-blue sm:text-6xl md:text-7xl text-5xl">
              A
              <span class="text-black sm:text-5xl md:text-6xl text-4xl">
                dvanced
              </span>
            </span>
            <span class="block text-blue sm:text-6xl md:text-7xl text-5xl">
              P
              <span class="text-black sm:text-5xl md:text-6xl text-4xl">
                lacements
              </span>
            </span>
          </h1>

          

          

          <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded-lg bg-blue px-12 py-3 text-base font-medium text-white shadow-xl hover:bg-blue-600 hover:scale-105 duration-300 focus:outline-none focus:ring active:bg-blue-300 sm:w-auto"
          href="/get-started"
        >
          For Candidate
        </a>

        <a
          class="block w-full rounded-lg bg-white px-12 py-3 text-base font-medium text-orange shadow-xl hover:text-orange-600 hover:scale-105 duration-300 focus:outline-none focus:ring active:bg-orange-300 sm:w-auto"
          href="/about"
        >
          For Employer
        </a>
      </div>

      
        </div>

        <Typed
            className='sm:text-lg md:text-xl text-base sm:leading-relaxed font-projectFont font-medium'
            strings={['A one-stop platform that connects and unites students with job opportunities.']}
            typeSpeed={120}
            backSpeed={140}
            loop />
      </div>
  </section> 
  </>























  export default function Hero() {
  return (
    <div className='text-white'>
    <div classname='absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25'>
      <img className='h-[400px] w-full object-cover' src={bg_home} alt="/" />
    </div>
    <div className='max-w-[900px] w-full mx-auto my-14 text-center flex flex-col justify-center'>
      <img className='w-[300px] mx-auto' src={logo_jap} alt="/" />
      <Typed
        className='font-projectFont md:text-4xl sm:text-3xl text-xl font-extrabold text-black'
        strings={['Jobs Advanced Placements' ,'JAP']}
        typeSpeed={120}
        backSpeed={140}
        loop />
      <p className='font-projectFont md:text-lg sm:text-base text-sm font-medium italic py-10 px-3 text-orange'>A one-stop platform that connects and unites students with job opportunities.</p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded-lg bg-blue px-12 py-3 font-projectFont text-base font-medium text-white shadow-xl hover:bg-blue-600 hover:scale-105 duration-300 focus:outline-none focus:ring active:bg-blue-300 sm:w-auto"
          href="/get-started"
        >
          For Candidate
        </a>

        <a
          class="block w-full rounded-lg bg-white px-12 py-3 font-projectFont text-base font-medium text-blue shadow-xl hover:text-blue-600 hover:scale-105 duration-300 focus:outline-none focus:ring active:text-blue-300 sm:w-auto"
          href="/about"
        >
          For Employer
        </a>
      </div>
    </div>
  </div>
  )
}
*/