import React from 'react'
import JobForm from '../components/CreateJobForm/JobForm'
import NavBar from '../components/SignInEmployer/NavBar'
import Footer from '../components/Footer'

function SignInEmployer() {
  return (
    <div>
        <NavBar />
        <JobForm />
        <Footer />
    </div>
  )
}

export default SignInEmployer