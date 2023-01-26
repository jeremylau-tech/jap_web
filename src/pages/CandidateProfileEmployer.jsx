import React from 'react'
import NavBarCandidate from '../components/NavBarEmployer'
import Profile from '../components/CandidateProfileEmployer/Profile'
import Footer from '../components/Footer'

function CandidateProfileEmployer() {
  return (
    <div>
        <NavBarCandidate />
        <Profile />
        <Footer />
    </div>
  )
}

export default CandidateProfileEmployer