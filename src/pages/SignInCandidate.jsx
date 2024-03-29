import React from 'react'
import Form from '../components/SignInCandidate/LoginForm'
import NavBar from '../components/SignInCandidate/NavBar'
import Footer from '../components/Footer'

function SignInCandidate() {
  return (
    <div className="SignInCandidate">
        <NavBar />
        <Form />
        <Footer />
    </div>
  )
}

export default SignInCandidate