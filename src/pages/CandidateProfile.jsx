import React from 'react'
import NavBarCandidate from '../components/NavBarCandidate'
import Profile from '../components/CandidateProfile/Profile'
import Footer from '../components/Footer'


function CandidateProfile() {
  return (
    <div>
        <NavBarCandidate />
        <Profile />
        <Footer />
    </div>
  )
}

export default CandidateProfile