import React from 'react'
import employer from '../../assets/employer.png'
import { BiUserPlus } from 'react-icons/bi'
import { Link } from "react-router-dom" 

function LoginForm() {
  return (
      <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto mt-24 h-[550px] shadow-xl sm:max-w-[900px]'>
            <div className='p-6 flex flex-col justify-around'>
                <form className='max-w-[400px] w-full mx-auto'>
                    <h2 className='text-xl text-black md:text-2xl font-projectFont font-extrabold text-center mb-8'>Sign In to your company account</h2>
                    <div className='flex flex-col py-2'>
                        <label className='font-projectFont text-black text-sm font-normal'>Company Email Address</label>
                        <input className='border rounded p-2' type="email" placeholder='example@company.com' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-projectFont text-black text-sm font-normal'>Password</label>
                        <input className='border rounded p-2' type="password" placeholder='******' />
                    </div>
                    
                    <button className='border rounded-lg w-full my-4 py-2 bg-orange font-projectFont font-bold text-white hover:bg-orange-500'>
                        Sign In
                    </button>
                    <div class="flex justify-center items-center mt-6">
                        <Link to='/SignUpEmployer'  class="inline-flex items-center text-orange hover:text-orange-600 hover:scale-105 active:text-orange-200 active:scale-105 text-xs text-center">
                            <BiUserPlus size={25} />
                            <span class="ml-2">You don't have an account?</span>
                        </Link>
                    </div>
                </form>  
            </div>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={employer} alt="/"/>
            </div>
        </div>
    </div>

  )
}

export default LoginForm
