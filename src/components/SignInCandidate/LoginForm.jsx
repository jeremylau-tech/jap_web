import React, { useState } from 'react'
import job_applicant from '../../assets/job-applicant.png'
import { BiUserPlus } from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom"
import { CandidateAuth } from '../../contexts/AuthContext'


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {signInCandidate} = CandidateAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            setLoading(true)
            await signInCandidate(email, password);
            navigate('/CandidateHome')
        } catch (e) {
            setError('Failed to sign in')
            console.log(e.message)
        }
        setLoading(false)
    }

    return (
      <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto mt-24 h-[550px] shadow-xl sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={job_applicant} alt="/"/>
            </div>
            <div className='p-6 flex flex-col justify-around'>
                <form onSubmit={handleSubmit} 
                    className='max-w-[400px] w-full mx-auto text-black bg-white'
                >
                    <h2 className='text-xl text-black md:text-2xl font-projectFont font-extrabold text-center mb-8'>Sign In to your account</h2>
                    <div className='flex flex-col py-2'>
                        <label className='font-projectFont text-black text-sm font-normal'>Email Address</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='border rounded p-2 focus: bg-white focus: text-black' type="email" placeholder='example@xyz.com' required />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-projectFont text-black text-sm font-normal'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className='border rounded p-2' type="password" placeholder='******' required />
                    </div>
                    
                    <button type='submit' className='border rounded-lg w-full my-4 py-2 bg-blue font-projectFont font-bold text-white hover:bg-blue-500'>
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

export default LoginForm
