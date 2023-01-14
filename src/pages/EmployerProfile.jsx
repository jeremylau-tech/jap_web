import React from 'react'
import NavBarEmployer from '../components/NavBarEmployer'
import Profile from '../components/EmployerProfile/Profile'
import Footer from '../components/Footer'


function CandidateProfile() {
  return (
    <div>
        <NavBarEmployer />
        <Profile />
        <Footer />
    </div>
  )
}

export default CandidateProfile