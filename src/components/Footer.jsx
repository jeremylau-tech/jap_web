import React from 'react';
import logo_usm_black from '../assets/logo-usm-black.png';
import logo_jap_black from '../assets/logo-jap-black.png';
import { ImMail } from 'react-icons/im';

function Footer() {
  return (
    <div className='bg-orange'>
      <div className='max-w-[1240px] px-8 mx-auto bg-orange'>
        <div className='max-w-fit mx-auto pt-7'>
          <img className='h-[110px] mx-auto md:inline-flex md:mr-7' src={logo_usm_black} alt="/" />
          <img className='h-[150px] mx-auto md:inline-flex md:ml-7' src={logo_jap_black} alt="/" />
        </div>
      </div>
      <div className='max-w-[1240px] px-8 mx-auto pb-5 text-center bg-orange'>
        <p className='pb-6 text-sm italic text-black'>A one-stop platform that connects and unites students with opportunities.</p>
        <div className='mx-auto inline-flex text-black'>
          <ImMail size={25} className='mr-[6px]' />
          <a href="mailto:jap.contact@gmail.com" className='font-medium'>jap.contact@gmail.com</a>
        </div>
      </div>
      <div className='w-full mx-auto py-3 bg-black text-white text-center text-xs font-bold tracking-wide'>
        <p>JAP Developer, Universiti Sains Malaysia © 2022</p>
      </div>
    </div>
  )
}

export default Footer
