import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo_jap from '../assets/logo-jap.png';
import { Link, useNavigate } from "react-router-dom";

const NavBarEmployer = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const NavCandidate = useNavigate();

    function handleCandidate (){
        NavCandidate("/SignInCandidate")
    }
  
    return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Link to='/' className='p-4'>
                    <img className='w-[130px]' src={logo_jap} alt="/" />
                </Link>
                <ul className='hidden md:flex font-projectFont text-base font-medium'>
                    <Link to='/' className='p-4 text-blue hover:text-blue-600'>Home</Link>
                    <Link to='/' className='p-4 text-blue hover:text-blue-600'>Post Job</Link>
                    <Link to='/' className='p-4 text-blue hover:text-blue-600'>Job List</Link>
                    <Link to='/' className='p-4 text-blue hover:text-blue-600'>Candidate Review</Link>
                </ul>
            </div>
            <div className='hidden md:flex pr-8'>
                <button onClick={handleCandidate} className='px-8 py-3 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-white hover:text-blue hover:border-blue active:text-blue-200 active:scale-105'>Candidates</button>
            </div>
            
            <div onClick={handleClick} className='block md:hidden p-2 text-blue hover:border-blue rounded-md'> {/** above mb: hidden */}
                {nav ? <MdOutlineClose size={22} /> : <HiOutlineMenu size={22} />}
            </div>
           
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
            <Link to='/' className='flex p-4 font-projectFont text-base font-medium text-blue hover:bg-blue-100 hover:text-white px-3 py-2 rounded-md active:bg-blue-200'>Home</Link>
            <Link to='/' className='flex p-4 font-projectFont text-base font-medium text-blue hover:bg-blue-100 hover:text-white px-3 py-2 rounded-md active:bg-blue-200'>Job Search</Link>
            <Link to='/' className='flex p-4 font-projectFont text-base font-medium text-blue hover:bg-blue-100 hover:text-white px-3 py-2 rounded-md active:bg-blue-200'>Profile</Link>
            <div className='flex flex-col my-4'>
                <button onClick={handleCandidate} className='px-8 py-3 border rounded-lg font-projectFont text-base font-medium bg-blue text-white hover:bg-white hover:text-blue hover:border-blue active:text-blue-200 active:scale-105'>Candidates</button>
            </div>
        </ul>
        
        
    </div>
  )
}

export default NavBarEmployer

/*
<div className='md:hidden text-orange hover:bg-orange rounded-md hover:text-white' onClick={handleClick}>
                {!nav ? <MdOutlineClose size={22} /> : <HiOutlineMenu size={22} />}
                
            </div>
            */




