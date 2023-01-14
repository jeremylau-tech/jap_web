import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo_jap from '../../assets/logo-jap.png';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
   
    return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Link to='/' className='p-4'>
                    <img className='w-[130px]' src={logo_jap} alt="/" />
                </Link>
            </div>
            <div className='hidden md:flex pr-8'>
                <Link to='/SignUpCandidate' className='px-8 py-3 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-white hover:text-blue hover:border-blue active:text-blue-200 active:scale-105 mr-4'>Sign Up</Link>
                <Link to='/SignInEmployer' className='px-8 py-3 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-white hover:text-orange hover:border-orange active:text-orange-200 active:scale-105'>Employers</Link>
            </div>
             
            <div onClick={handleClick} className='block md:hidden p-2 text-orange hover:border hover:shadow-sm rounded-md'> {/** above mb: hidden */}
                {nav ? <MdOutlineClose size={22} /> : <HiOutlineMenu size={22} />}
            </div>
           
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 md:hidden'}>
            <div className='flex flex-col my-4 text-center'>                
                <Link to='/SignUpCandidate' className=' px-8 py-3 mb-4 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-white hover:text-blue hover:border-blue active:text-blue-200 active:scale-105'>Sign Up</Link>
                <Link to='/SignInEmployer' className='px-8 py-3 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-white hover:text-orange hover:border-orange active:text-orange-200 active:scale-105'>Employers</Link>
            </div>     
        </ul>
    </div>
  )
}

export default NavBar






