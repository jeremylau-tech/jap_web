import React from 'react'
import job_applicant from '../../assets/job-applicant.png'
import { BiUserPlus } from 'react-icons/bi'
import { Link } from "react-router-dom" 

function Form() {
  return (
      <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-xl sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={job_applicant} alt="/"/>
            </div>
            <div className='p-6 flex flex-col justify-around'>
                <form className='max-w-[400px] w-full mx-auto'>
                    <h2 className='text-2xl font-projectFont font-extrabold text-center mb-8'>Sign In to your account</h2>
                    <div className='flex flex-col py-2'>
                        <label className='font-projectFont font-normal'>Email address</label>
                        <input className='border rounded p-2' type="email" placeholder='example@xyz.com' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-projectFont font-normal'>Password</label>
                        <input className='border rounded p-2' type="password" placeholder='******' />
                    </div>
                    
                    <p className='font-projectFont text-xs text-blue text-right'>Forgot Password?</p>
                    <button className='border rounded-lg w-full my-4 py-2 bg-blue font-projectFont font-bold text-white hover:bg-blue-500'>
                        Sign In
                    </button>
                    <div class="flex justify-center items-center mt-6">
                        <Link to='/SignUpCandidate'  class="inline-flex items-center text-blue hover:text-blue-600 hover:scale-105 active:text-blue-200 active:scale-105 text-xs text-center">
                            <BiUserPlus size={25} />
                            <span class="ml-2">You don't have an account?</span>
                        </Link>
                    </div>
                </form>  
            </div>
        </div>
    </div>

  )
}

export default Form
