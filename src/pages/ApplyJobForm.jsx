import React from 'react'
import NavBarCandidate from '../components/NavBarCandidate'
import JobForm from '../components/ApplyJobForm/JobForm'
import Footer from '../components/Footer'

function ApplyJobForm() {
  return (
    <div>
        <NavBarCandidate />
        <JobForm />
        <Footer />
    </div>
  )
}

export default ApplyJobForm;