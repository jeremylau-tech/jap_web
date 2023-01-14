import React from 'react'
import job_applicant from '../../assets/job-applicant.png'
import { AiOutlineLogin } from 'react-icons/ai'
import { Link } from "react-router-dom" 

function RegistrationForm() {
  return (
      <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto mt-24 h-[550px] shadow-xl sm:max-w-[900px]'>
            <div className='p-6 flex flex-col justify-around'>
                <form className='max-w-[400px] w-full mx-auto'>
                    <h2 className='text-xl text-black md:text-2xl font-projectFont font-extrabold text-center mb-8'>Create your account now!</h2>
                    <div className='flex flex-col py-2'>
                        <label className='font-projectFont text-black text-sm font-normal'>Email Address</label>
                        <input className='border rounded p-2' type="email" placeholder='example@xyz.com' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-projectFont text-black text-sm font-normal'>Password</label>
                        <input className='border rounded p-2' type="password" placeholder='******' />
                    </div>
                    
                    <button className='border rounded-lg w-full my-4 py-2 bg-blue font-projectFont font-bold text-white hover:bg-blue-500'>
                        Sign Up
                    </button>
                    <div class="flex justify-center items-center mt-6">
                        <Link to='/SignInCandidate'  class="inline-flex items-center text-blue hover:text-blue-600 hover:scale-105 active:text-blue-200 active:scale-105 text-xs text-center">
                            <span class="mr-2">Already have an account?</span>
                            <AiOutlineLogin size={25} />
                        </Link>
                    </div>
                </form>  
            </div>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={job_applicant} alt="/"/>
            </div>
        </div>
    </div>

  )
}

export default RegistrationForm

