import React from 'react'
import NavBarEmployer from '../components/NavBarEmployer'
import ApplicantCard from '../components/ApplicantListing/ApplicantCard'
import Footer from '../components/Footer'

function ApplicantListing() {
  return (
    <div>
        <NavBarEmployer />
        <ApplicantCard/>
        <Footer />
    </div>
  )
}

export default ApplicantListing