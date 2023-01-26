import React from 'react';
import JobCard from '../components/JobListing/JobCard';
import NavBar from '../components/NavBarCandidate'
import Footer from '../components/Footer';

function JobListing() {
  return (
    <div>
      <NavBar/>
      <JobCard/>
      <Footer/>
    </div>
  )
}

export default JobListing