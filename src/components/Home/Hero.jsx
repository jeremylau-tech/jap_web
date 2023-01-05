import React from 'react';
import Typed from 'react-typed';
import bgb_usm from '../../assets/bgb-usm.jpg';
import logo_usm4u_white from '../../assets/logo-usm4u-white.png'; //update

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
