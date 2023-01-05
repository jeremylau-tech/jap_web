import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo_usm_white from '../assets/logo-usm-white.png';
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-[90px] max-w-[1240px] mx-auto px-4 text-white'>
      <Link to='/' className='p-4'>
        <img className='w-[200px]' src={logo_usm_white} alt="/" />
      </Link>
      <ul className='hidden md:flex'> {/** hidden on mobile devices, above mb: flex */}
        <Link to='/Activities' className='p-4'>Activities</Link>
        <Link to='/Opportunities' className='p-4'>Opportunities</Link>
        <Link to='/InfoHub' className='p-4'>InfoHub</Link>
        <Link to='/Feedback' className='p-4'>Feedback</Link>
        <button className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto ml-6 content-center text-black hover:scale-105 duration-300'>Log In</button>
      </ul>
      {/** toggle between buttons; mb-medium breakpoint */}
      <div onClick={handleNav} className='block md:hidden'> {/** above mb: hidden */}
        {nav ? <MdOutlineClose size={22} /> : <HiOutlineMenu size={22} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <a href='/' className=''>
          <img className='w-[200px] my-4 ml-8' src={logo_usm_white} alt="/" />
        </a>
        <ul className='p-4'>
          <a href='Activities' className='flex p-4 border-b border-gray-600'>Activities</a>
          <a href='/Opportunities' className='flex p-4 border-b border-gray-600'>Opportunities</a>
          <a href='/InfoHub' className='flex p-4 border-b border-gray-600'>InfoHub</a>
          <a href='/Feedback' className='flex p-4 border-b border-gray-600'>Feedback</a>
        </ul>
        <div className='mx-7'>
          <button className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto mt-14 content-center text-black hover:scale-105 duration-300'>Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
