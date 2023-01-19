import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo_jap from '../../assets/logo-jap.png';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Link to='/' className='p-4'>
                    <img className='w-[130px]' src={logo_jap} alt="/" />
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default NavBar






