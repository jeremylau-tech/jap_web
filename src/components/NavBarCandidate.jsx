import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo_jap from '../assets/logo-jap.png';
import { Link, useNavigate } from "react-router-dom";

const NavBarCandidate = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const NavEmployer = useNavigate();

    function handleEmployer (){
        NavEmployer("/SignInEmployer")
    }
  
    return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Link to='/' className='p-4'>
                    <img className='w-[130px]' src={logo_jap} alt="/" />
                </Link>
                <ul className='hidden md:flex font-projectFont text-base font-medium'>
                    <Link to='/' className='p-4 text-orange hover:text-orange-600'>Home</Link>
                    <Link to='/' className='p-4 text-orange hover:text-orange-600'>Job Search</Link>
                    <Link to='/' className='p-4 text-orange hover:text-orange-600'>Profile</Link>
                </ul>
            </div>
            <div className='hidden md:flex pr-8'>
                <button onClick={handleEmployer} className='px-8 py-3 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-white hover:text-orange hover:border-orange active:text-orange-200 active:scale-105'>Employers</button>
            </div>
            
            <div onClick={handleClick} className='block md:hidden p-2 text-orange hover:border-orange rounded-md'> {/** above mb: hidden */}
                {nav ? <MdOutlineClose size={22} /> : <HiOutlineMenu size={22} />}
            </div>
           
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
            <Link to='/' className='flex p-4 font-projectFont text-base font-medium text-orange hover:bg-orange-100 hover:text-white px-3 py-2 rounded-md active:bg-orange-200'>Home</Link>
            <Link to='/' className='flex p-4 font-projectFont text-base font-medium text-orange hover:bg-orange-100 hover:text-white px-3 py-2 rounded-md active:bg-orange-200'>Job Search</Link>
            <Link to='/' className='flex p-4 font-projectFont text-base font-medium text-orange hover:bg-orange-100 hover:text-white px-3 py-2 rounded-md active:bg-orange-200'>Profile</Link>
            <div className='flex flex-col my-4'>
                <button onClick={handleEmployer} className='px-8 py-3 border rounded-lg font-projectFont text-base font-medium bg-orange text-white hover:bg-white hover:text-orange hover:border-orange active:text-orange-200 active:scale-105'>Employers</button>
            </div>
        </ul>
        
        
    </div>
  )
}

export default NavBarCandidate

/*
<div className='md:hidden text-orange hover:bg-orange rounded-md hover:text-white' onClick={handleClick}>
                {!nav ? <MdOutlineClose size={22} /> : <HiOutlineMenu size={22} />}
                
            </div>
            */




