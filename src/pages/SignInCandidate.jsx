import React from 'react'
import LoginForm from '../components/SignInCandidate/LoginForm'
import NavBar from '../components/SignInCandidate/NavBar'
import Footer from '../components/Footer'

function SignInCandidate() {
  return (
    <div className="SignInCandidate">
        <NavBar />
        <LoginForm />
        <Footer />
    </div>
  )
}

export default SignInCandidate
