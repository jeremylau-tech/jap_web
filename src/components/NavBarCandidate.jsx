import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo_jap from '../assets/logo-jap.png';
import { Link, useNavigate } from "react-router-dom";
import { CandidateAuth } from '../contexts/AuthContext';
import { useToast } from '@chakra-ui/react'


const NavBarCandidate = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const { candidate, logoutCandidate } = CandidateAuth();
    const navigate = useNavigate();
    const toast = useToast();

    const handleLogout = async () => {
        try {
            await logoutCandidate();
            navigate('/');
            console.log('You are logged out');
            toast({
                status: 'success',
                description: "You are logged out."
            }) 
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Link to='/CandidateHome' className='p-4'>
                    <img className='w-[130px]' src={logo_jap} alt="/" />
                </Link>
                <ul className='hidden md:flex font-projectFont text-base font-medium'>
                    <Link to='/CandidateHome' className='p-4 text-orange hover:text-orange-600 hover:scale-105'>Home</Link>
                    <Link to='/JobListing' className='p-4 text-orange hover:text-orange-600 hover:scale-105'>Job Search</Link>
                    <Link to='/CandidateProfile' className='p-4 text-orange hover:text-orange-600 hover:scale-105'>Profile</Link>
                </ul>
            </div> 
            <div className='hidden md:flex pr-8'>
                <button onClick={handleLogout} className='px-8 py-3 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-white hover:text-orange hover:border-orange active:text-orange-200 active:scale-105'>Sign Out</button>
            </div>
            
            <div onClick={handleClick} className='block md:hidden p-2 text-orange hover:border hover:shadow-sm rounded-md'> {/** above mb: hidden */}
                {nav ? <MdOutlineClose size={22} /> : <HiOutlineMenu size={22} />}
            </div>
           
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 md:hidden'}>
            <Link to='/CandidateHome' className='flex p-4 font-projectFont text-base font-medium text-orange hover:bg-orange-100 hover:text-white px-3 py-2 rounded-md active:bg-orange-200'>Home</Link>
            <Link to='/JobListing' className='flex p-4 font-projectFont text-base font-medium text-orange hover:bg-orange-100 hover:text-white px-3 py-2 rounded-md active:bg-orange-200'>Job Search</Link>
            <Link to='/CandidateProfile' className='flex p-4 font-projectFont text-base font-medium text-orange hover:bg-orange-100 hover:text-white px-3 py-2 rounded-md active:bg-orange-200'>Profile</Link>
            <div className='flex flex-col my-4 text-center'>                
                <button onClick={handleLogout} className='px-8 py-3 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-white hover:text-orange hover:border-orange active:text-orange-200 active:scale-105'>Sign Out</button>
            </div>
        </ul> 
    </div>
  )
}

export default NavBarCandidate






